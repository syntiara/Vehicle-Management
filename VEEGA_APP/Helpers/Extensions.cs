using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Models;
using static System.Net.Mime.MediaTypeNames;

namespace VEEGA_APP.Helpers
{
    public static class Extensions
    {
        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query, QueryObject queryObj, Dictionary<string, Expression<Func<T, object>>> columnsMap)
        {
            if (string.IsNullOrWhiteSpace(queryObj.SortString) || !columnsMap.ContainsKey(queryObj.SortString))
                return query;

            if (queryObj.IsAscending)
                return query = query.OrderBy(columnsMap[queryObj.SortString]);
            else
                return query = query.OrderByDescending(columnsMap[queryObj.SortString]);
        }

        public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query, QueryObject queryObj)
        {
            if(queryObj.Page <= 0)
                queryObj.Page = 1;

            if (queryObj.PageSize <= 0)
                queryObj.PageSize = 10;

            return query.Skip((queryObj.Page - 1) * queryObj.PageSize).Take(queryObj.PageSize);
        }
    }
}
