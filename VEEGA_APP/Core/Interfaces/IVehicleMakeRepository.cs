using System.Collections.Generic;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;

namespace VEEGA_APP.Core.Interfaces
{
    public interface IVehicleMakeRepository : IBaseRepository<vehicle_make, int>
    {
        Task<IList<VehicleMakeDTO>> GetAllVehicleMake();
    }
}
