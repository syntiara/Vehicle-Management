using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Controllers
{
    [Route("api/vehicles/{vehicleId}/photos")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        private IVehicleFeatureRepository _vehicleFeatureRepo;
        private IHostingEnvironment _host;

        public PhotoController(IHostingEnvironment host, IVehicleFeatureRepository vehicleFeatureRepo)
        {
            _host = host;
            _vehicleFeatureRepo = vehicleFeatureRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(int vehicleId, IFormFile file)
        {
            try
            {
                var uploadsFolderPath = Path.Combine(_host.WebRootPath, "uploads");
                if (!Directory.Exists(uploadsFolderPath))
                    Directory.CreateDirectory(uploadsFolderPath);

                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                var filePath = Path.Combine(uploadsFolderPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

             }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}