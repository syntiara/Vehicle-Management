using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Controllers
{
    [Route("api/make")]
    [ApiController]
    public class MakeController : ControllerBase
    {
        private IVehicleMakeRepository _vehicleMakeRepo;

        public MakeController(IVehicleMakeRepository vehicleMakeRepo)
        {
            _vehicleMakeRepo = vehicleMakeRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetMakes()
        {
            try
            {
                var makes = await _vehicleMakeRepo.GetAllVehicleMake();
                if (makes != null)
                    return Ok(makes);

                    return NotFound(makes);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}