using System.Collections.Generic;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;

namespace VEEGA_APP.Core.Interfaces
{
    public interface IVehicleDetailsRepository : IBaseRepository<vehicle_details, int>
    {
        vehicle_details CreateVehicleDetail(VehicleDetailsWDTO model);
        vehicle_details UpdateVehicleDetail(VehicleDetailsWDTO model, vehicle_details entity);
        Task<vehicle_details> FindVehicleEntity(int id);

        Task<VehicleDetailsDTO> GetVehicleDetails(int id);
        Task<QueryResult<VehicleDetailsDTO>> GetVehicleDetailsList(VehicleQuery queryObj);
    }
}
