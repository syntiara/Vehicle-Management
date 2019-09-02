using AutoMapper;
using System;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Infrastructure.Repos
{
    public class VehicleModelRepository : BaseRepository<vehicle_model, int>, IVehicleModelRepository
    {
        IMapper _mapper;
        public VehicleModelRepository(VeegaContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public async Task<bool> EntityExists(int modelId)
        {
            try
            {
                if (await IsExists(x => x.id == modelId))
                    return true;

                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
