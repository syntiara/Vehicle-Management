using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Infrastructure.Repos
{
    public class VehicleFeatureRepository: BaseRepository<vehicle_feature, int>, IVehicleFeatureRepository
    {
         IMapper _mapper;
            public VehicleFeatureRepository(VeegaContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
            public async Task<IList<VehicleBaseDTO>> GetAllVehicleFeature()
            {
                try
                {
                var vehicleFeatures = await GetAllWithNoTracking().ToListAsync();

                return _mapper.Map<IList<VehicleBaseDTO>>(vehicleFeatures);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
    }
}
