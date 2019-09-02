using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Controllers
{
    [Route("api/feature")]
    [ApiController]
    public class FeatureController : ControllerBase
    {
        private IVehicleFeatureRepository _vehicleFeatureRepo;

        public FeatureController(IVehicleFeatureRepository vehicleFeatureRepo)
        {
            _vehicleFeatureRepo = vehicleFeatureRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetFeatures()
        {
            try
            {
                var features = await _vehicleFeatureRepo.GetAllVehicleFeature();
                if (features.Count != 0)
                    return Ok(features);

                    return NotFound(features);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}