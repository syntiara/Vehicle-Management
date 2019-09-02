using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    public class vehicle_make
    {
        public vehicle_make()
        {
            //best practice is to instantiate a collection where it's created, to avoid null reference error
            vehicle_model = new List<vehicle_model>();
        }

        [Key]
        public int id { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Name exceeds 50 characters")]
        public string name { get; set; }

        public IList<vehicle_model> vehicle_model { get; set; }
    }
}
