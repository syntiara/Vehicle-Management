using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Models
{
    public class VehicleDetailsDTO
    {
        public VehicleDetailsDTO()
        {
            features = new List<VehicleBaseDTO>();
        }
        public int id { get; set; }
        public VehicleBaseDTO models { get; set; }
        public VehicleBaseDTO makes { get; set; }

        public bool isRegistered { get; set; }
        public ContactDTO contact { get; set; }
        public DateTime lastUpdated { get; set; }
        public IList<VehicleBaseDTO> features { get; set; }
    }   
}
