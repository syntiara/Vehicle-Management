using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Infrastructure.Repos
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly VeegaContext _DBContext;

        public UnitOfWork(VeegaContext DBContext)
        {
            _DBContext = DBContext;
        }

        public async Task<bool> completeAsync()
        {
            try
            {
                var val = await _DBContext.SaveChangesAsync();
                return (val > 0);
            }
            catch (Exception ex)
            {
                throw ex;
                //return false;
            }
        }
    }
}
