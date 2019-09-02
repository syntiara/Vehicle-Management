using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Models
{
    public class VehicleBaseDTO
    {
        //Ensures that this property appears first when serialized
        [JsonProperty(Order = -2)]
        public int id { get; set; }

        [JsonProperty(Order = -2)]
        public string name { get; set; }

    }
}
