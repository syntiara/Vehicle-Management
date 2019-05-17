using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;

namespace VEEGA_APP.Core.Interfaces
{
    public interface IVehicleModelRepository : IBaseRepository<vehicle_model, int>
    {
        Task<bool> EntityExists(int modelId);
    }
}
