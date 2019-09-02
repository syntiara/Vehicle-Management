using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;
using VEEGA_APP.Helpers;

namespace VEEGA_APP.Controllers
{
    [Route("api/vehicle-details/{vehicleId}/photos")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        //private readonly int MAX_BYTES = 10 * 1024 * 1024;
        //private readonly string[] ACCEPTED_FILE_TYPES = new string[] { ".jpg", ".jpeg", ".png" };
        private readonly PhotoSettings photoSettings;

        private IVehicleDetailsRepository _vehicleDetailsRepo;
        private IVehiclePhotoRepository _vehiclePhotoRepo;
        private IUnitOfWork _uow;
        private IHostingEnvironment _host;
        private IMapper _mapper;

        public PhotoController(IHostingEnvironment host, IVehicleDetailsRepository vehicleDetailsRepo, IUnitOfWork uow, IOptionsSnapshot<PhotoSettings> options, IMapper mapper, IVehiclePhotoRepository vehiclePhotoRepo)
        {
            _host = host;
            _vehicleDetailsRepo = vehicleDetailsRepo;
            _vehiclePhotoRepo = vehiclePhotoRepo;
            _uow = uow;
            photoSettings = options.Value;
            _mapper = mapper;
        }

        [HttpPost]
        //[FromForm] is used to accept files
        public async Task<IActionResult> Upload(int vehicleId, [FromForm(Name = "file")] IFormFile file)
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

                var photo = new vehicle_photo { file_name = fileName, vehicleId = vehicleId };
                vehicle.photos.Add(photo);
                _vehicleDetailsRepo.Update(vehicle);
                if (await _uow.completeAsync())
                    return Ok(_mapper.Map<PhotoDTO>(photo));

                return StatusCode(500, _mapper.Map<PhotoDTO>(photo));

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetListOfPhoto(int vehicleId)
        {
            try
            {
                var res = await _vehiclePhotoRepo.GetPhotoInfo(vehicleId);
                if (res == null)
                    return NotFound(res);

                return Ok(res);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }

        }
    }
}