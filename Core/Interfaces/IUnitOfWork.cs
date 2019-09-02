using System;
using System.Threading.Tasks;

namespace VEEGA_APP.Core.Interfaces
{
    public interface IUnitOfWork
    {
        Task<bool> completeAsync();
    }
}
