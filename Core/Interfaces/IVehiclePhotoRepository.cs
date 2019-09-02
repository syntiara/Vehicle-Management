using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Models;

namespace VEEGA_APP.Core.Interfaces
{
    public interface IVehiclePhotoRepository
    {
        Task<IList<PhotoDTO>> GetPhotoInfo(int vehicleId);
    }
}
