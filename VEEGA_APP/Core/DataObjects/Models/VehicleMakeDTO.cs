using System.Collections.Generic;

namespace VEEGA_APP.Core.DataObjects.Models
{
    public class VehicleMakeDTO: VehicleBaseDTO
    {
        public IList<VehicleBaseDTO> models { get; set; }
    }
}
