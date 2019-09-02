using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;
using VEEGA_APP.Helpers;

namespace VEEGA_APP.Infrastructure.Repos
{
    public class VehicleDetailsRepository : BaseRepository<vehicle_details, int>, IVehicleDetailsRepository
    {
        IMapper _mapper;
        public VehicleDetailsRepository(VeegaContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public vehicle_details CreateVehicleDetail(VehicleDetailsWDTO model)
        {
            try
            {
                var entity = _mapper.Map<vehicle_details>(model);
                entity.last_updated = DateTime.UtcNow;

                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public vehicle_details UpdateVehicleDetail(VehicleDetailsWDTO model, vehicle_details entity)
        {
            try
            {
                _mapper.Map<VehicleDetailsWDTO, vehicle_details>(model, entity);
                entity.last_updated = DateTime.UtcNow;

                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<vehicle_details> FindVehicleEntity(int id)
        {
            try
            {
                var entity = await GetWhereWithNoTracking(x => x.id == id).Include(m => m.vehicle_feature_join).FirstOrDefaultAsync();

                if (entity != null)
                    return entity;

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<VehicleDetailsDTO> GetVehicleDetails(int id)
        {
            try
            {
                //ThenInclude is used for eager loading related objects
                var entity = await GetWhereWithNoTracking(x => x.id == id).Include(v => v.vehicle_feature_join).ThenInclude(vf => vf.vehicle_feature)
                    .Include(v => v.vehicle_model).ThenInclude(m => m.vehicle_make).SingleOrDefaultAsync();



                //return await context.Vehicles
                //.Include(v => v.Features)
                //  .ThenInclude(vf => vf.Feature)
                //.Include(v => v.Model)
                //  .ThenInclude(m => m.Make)
                //.SingleOrDefaultAsync(v => v.Id == id);

                if (entity != null)
                    return _mapper.Map<VehicleDetailsDTO>(entity);

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<QueryResult<VehicleDetailsDTO>> GetVehicleDetailsList(VehicleQuery queryObj)
        {
            try
            {
                var result = new QueryResult<VehicleDetailsDTO>();

                //ThenInclude is used for eager loading related objects
                //include statement automatically orders the list by id
                var query = GetAllWithNoTracking().Include(v => v.vehicle_feature_join).ThenInclude(vf => vf.vehicle_feature)
                    .Include(v => v.vehicle_model).ThenInclude(m => m.vehicle_make).AsQueryable();

                if (queryObj.MakeId.HasValue)
                    query = query.Where(x => x.vehicle_model.makeId == queryObj.MakeId);

                // key is a string. Expression is on vehicle_details entity. Output is an object
                var columnsMap = new Dictionary<string, Expression<Func<vehicle_details, object>>>()
                {
                    ["make"] = v => v.vehicle_model.vehicle_make.name,
                    ["model"] = v => v.vehicle_model.name,
                    ["contactName"] = v => v.contact.contact_name,
                };

                query = query.ApplyOrdering(queryObj, columnsMap);
                result.TotalItems = await query.CountAsync();
                query = query.ApplyPaging(queryObj);

                //value to return after all the modifications
                await query.ToListAsync();
                var mapper = _mapper.Map<IList<VehicleDetailsDTO>>(query);
                result.Items = mapper;

                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
