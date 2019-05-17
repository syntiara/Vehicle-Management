using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;

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

        public  vehicle_details UpdateVehicleDetail(VehicleDetailsWDTO model, vehicle_details entity)
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
                var entity = await GetAsync(id);

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
                var entity = await GetWhereWithNoTracking(x => x.id == id).Include(v => v.vehicle_feature_join).ThenInclude(x => x.Select(vf => vf.vehicle_feature))
                    .Include(v => v.vehicle_model).ThenInclude(m => m.vehicle_make).SingleOrDefaultAsync();

                if (entity != null)
                    return _mapper.Map<VehicleDetailsDTO>(entity);

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
