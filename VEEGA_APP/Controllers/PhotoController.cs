using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.Interfaces;
using VEEGA_APP.Helpers;

namespace VEEGA_APP.Controllers
{
    [Route("api/vehicles/{vehicleId}/photos")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        //private readonly int MAX_BYTES = 10 * 1024 * 1024;
        //private readonly string[] ACCEPTED_FILE_TYPES = new string[] { ".jpg", ".jpeg", ".png" };
        private readonly PhotoSettings photoSettings;

        private IVehicleDetailsRepository _vehicleDetailsRepo;
        private IUnitOfWork _uow;
        private IHostingEnvironment _host;

        public PhotoController(IHostingEnvironment host, IVehicleDetailsRepository vehicleDetailsRepo, IUnitOfWork uow, IOptionsSnapshot<PhotoSettings> options)
        {
            _host = host;
            _vehicleDetailsRepo = vehicleDetailsRepo;
            _uow = uow;
            photoSettings = options.Value;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(int vehicleId, IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                    return BadRequest("No file");

                //validation for file size of 10mb
                if (file.Length > photoSettings.MaxBytes)
                    return BadRequest("Maximum file size exceeded");

                //validation for file types
                if (!photoSettings.IsSupported(file.FileName))
                    return BadRequest("Invalid file type");

                var vehicle = await _vehicleDetailsRepo.FindVehicleEntity(vehicleId);
                if (vehicle == null)
                    return NotFound(vehicle);


                //get this path
                var uploadsFolderPath = Path.Combine(_host.WebRootPath, "uploads");
                //if the directort doesn't exist, create it
                if (!Directory.Exists(uploadsFolderPath))
                    Directory.CreateDirectory(uploadsFolderPath);

                //always generate a new file name. Don't trust users file name
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);

                //combine the path and file name
                var filePath = Path.Combine(uploadsFolderPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                var photo = new vehicle_photo { file_name = fileName };
                vehicle.photos.Add(photo);
                if (await _uow.completeAsync())
                    return Ok(vehicle);

                return StatusCode(500, vehicle);

            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}