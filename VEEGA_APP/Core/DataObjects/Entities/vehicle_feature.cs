using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    public class vehicle_feature
    {
        public vehicle_feature()
        {
            vehicle_feature_join = new List<vehicle_feature_join>();
        }
        [Key]
        public int id { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Name exceeds 50 characters")]
        public string name { get; set; }

        public IList<vehicle_feature_join> vehicle_feature_join { get; set; }
    }
}
