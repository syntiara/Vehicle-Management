using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Infrastructure.Repos
{
    public class VehicleMakeRepository: BaseRepository<vehicle_make, int>, IVehicleMakeRepository
    {
        IMapper _mapper;

        public VehicleMakeRepository(VeegaContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public async Task<IList<VehicleMakeDTO>> GetAllVehicleMake()
        {
            try
            {
                var vehicleMakes = await GetAllWithNoTracking().Include(m => m.vehicle_model).OrderBy(x => x.name).ToListAsync();
                return _mapper.Map<IList<VehicleMakeDTO>>(vehicleMakes);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
