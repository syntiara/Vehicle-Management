using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Entities
{
    //class to depict many-many relationship
    public class vehicle_feature_join
    {
        public int vehicle_detailsId { get; set; }
        public int featureId { get; set; }

        [ForeignKey("vehicle_detailsId")]
        public vehicle_details vehicle_details { get; set; }
        [ForeignKey("featureId")]
        public vehicle_feature vehicle_feature { get; set; }


    }
}
