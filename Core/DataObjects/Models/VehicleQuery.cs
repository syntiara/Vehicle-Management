using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.DataObjects.Models
{

    public class QueryObject
    {
        public bool IsAscending { get; set; }
        public string SortString { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public class VehicleQuery  : QueryObject
    {
        public int? MakeId { get; set; }
    }
}
