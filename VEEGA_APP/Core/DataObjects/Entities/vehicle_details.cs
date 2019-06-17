using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    public class vehicle_details
    {
        public vehicle_details()
        {
            vehicle_feature_join = new List<vehicle_feature_join>();
            photos = new List<vehicle_photo>();
        }
        [Key]
        public int id { get; set; }
        public int modelId { get; set; }
        [Required]
        public bool isRegistered { get; set; }
        public contact contact { get; set; }
        [Required]
        public DateTime last_updated { get; set; }

        [ForeignKey("modelId")]
        public virtual vehicle_model vehicle_model { get; set; }

        public IList<vehicle_feature_join> vehicle_feature_join { get; set; }

        public IList<vehicle_photo> photos { get; set; }
    }

    public class contact
    {
        //public contact(string _name, string _email, string _phoneNumber)
        //{
        //    contact_name = _name;
        //    contact_email = _email;
        //    contact_phoneNumber = _phoneNumber;
        //}

        [Required]
        [StringLength(50, ErrorMessage = "Name exceeds 50 characters")]
        public string contact_name { get; set; }
        [StringLength(50, ErrorMessage = "email exceeds 50 characters")]
        public string contact_email { get; set; }
        [Required]
        [StringLength(14, ErrorMessage = "phone number exceeds 14 characters")]
        public string contact_phoneNumber { get; set; }
    }
   

}
