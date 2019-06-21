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
    public class VehiclePhotoRepository : BaseRepository<vehicle_photo, int>, IVehiclePhotoRepository
    {
        IMapper _mapper;
        public VehiclePhotoRepository(VeegaContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }

        public async Task<IList<PhotoDTO>> GetPhotoInfo(int vehicleId)
        {
            try
            {
                var entity = await GetWhereWithNoTracking(x => x.vehicleId == vehicleId).ToListAsync();

                if (entity != null)
                    return _mapper.Map<IList<PhotoDTO>>(entity);

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
