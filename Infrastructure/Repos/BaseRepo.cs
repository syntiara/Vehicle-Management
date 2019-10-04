using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Infrastructure.Repos
{
    public abstract class BaseRepository<TEntity, Tkey>: IBaseRepository<TEntity, Tkey> where TEntity: class
    {
        protected readonly DbContext _DBContext;

        public BaseRepository(DbContext DBContext)
        {
            _DBContext = DBContext;
        }

        public IQueryable<TEntity> GetWhereWithNoTracking(Expression<Func<TEntity, bool>> wherePredicate)
        {
            return
                _DBContext.Set<TEntity>().Where(wherePredicate).AsNoTracking();
        }

        public IQueryable<TEntity> GetWhere(Expression<Func<TEntity, bool>> wherePredicate)
        {
            return
                _DBContext.Set<TEntity>().Where(wherePredicate);
        }

        public IQueryable<TEntity> GetAllWithNoTracking()
        {
            return
                _DBContext.Set<TEntity>().AsNoTracking();
        }

        public async Task<TEntity> GetAsync(Tkey key)
        {
            return
                await _DBContext.Set<TEntity>().FindAsync(key);
        }

        public void Add(TEntity entity)
        {
                _DBContext.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            _DBContext.Set<TEntity>().AddRange(entities);
        }

        public async Task<bool> IsExists(Expression<Func<TEntity, bool>> wherePredicate)
        {
            return
               await  _DBContext.Set<TEntity>().AnyAsync(wherePredicate);
        }

        public void Remove(TEntity entity)
        {
            _DBContext.Set<TEntity>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            _DBContext.Set<TEntity>().RemoveRange(entities);
        }

        public void Update(TEntity entity)
        {
            _DBContext.Set<TEntity>().Update(entity);
        }
    }
}
