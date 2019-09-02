using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.Interfaces
{
     public interface IBaseRepository<TEntity, Tkey>
    {
        IQueryable<TEntity> GetWhereWithNoTracking(Expression<Func<TEntity, bool>> wherePredicate);

        IQueryable<TEntity> GetAllWithNoTracking();

        Task<TEntity> GetAsync(Tkey key);

        void Add(TEntity entity);

        void AddRange(IEnumerable<TEntity> entities);

        Task<bool> IsExists(Expression<Func<TEntity, bool>> wherePredicate);
        void Remove(TEntity entity);

        void RemoveRange(IEnumerable<TEntity> entities);

         void Update(TEntity entity);

    }
}
