using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    public class vehicle_photo
    {
        public int id { get; set; }
        [Required]
        [MaxLength(255)]
        public string file_name { get; set; }
        public int vehicleId { get; set; }

        [ForeignKey("vehicleId")]
        public virtual vehicle_details vehicle_details { get; set; }

    }
}
