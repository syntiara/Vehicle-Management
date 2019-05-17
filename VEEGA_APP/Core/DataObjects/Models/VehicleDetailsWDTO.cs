using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Models
{
    public class VehicleDetailsWDTO
    {
        public VehicleDetailsWDTO()
        {
            features = new List<int>();
        }
        [Required]
        public int modelId { get; set; }
        [Required]
        public bool isRegistered { get; set; }
        [Required]
        public ContactWDTO contact { get; set; }
        public IList<int> features { get; set; }

    }

    public class ContactWDTO
    {
        [Required]
        [StringLength(50, ErrorMessage = "Name exceeds 50 characters")]
        public string name { get; set; }
        [StringLength(50, ErrorMessage = "email exceeds 50 characters")]
        public string email { get; set; }
        [Required]
        [StringLength(14, ErrorMessage = "phone number exceeds 14 characters")]
        public string phone_number { get; set; }
    }
}
