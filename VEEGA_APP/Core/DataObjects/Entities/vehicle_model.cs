using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    public class vehicle_model
    {
        [Key]
        public int id { get; set; }
        public int makeId { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Name exceeds 50 characters")]
        public string name { get; set; }

        [ForeignKey("makeId")]
        public vehicle_make vehicle_make { get; set; }
    }
}
