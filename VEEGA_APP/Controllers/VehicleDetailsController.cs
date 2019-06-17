using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VEEGA_APP.Core.DataObjects.Models;
using VEEGA_APP.Core.Interfaces;

namespace VEEGA_APP.Controllers
{
    [Route("api/vehicle-details")]
    [ApiController]
    public class VehicleDetailsController : ControllerBase
    {
        private IVehicleDetailsRepository _vehicleDetailsRepo;
        private IVehicleModelRepository _vehicleModelRepo;
        private IUnitOfWork _uow;


        public VehicleDetailsController(IVehicleDetailsRepository vehicleDetailsRepo, IVehicleModelRepository vehicleModelRepo, IUnitOfWork uow)
        {
            _vehicleDetailsRepo = vehicleDetailsRepo;
            _vehicleModelRepo = vehicleModelRepo;
            _uow = uow;
        }

        [HttpPost]
        public async Task<IActionResult> CreateVehicleDetails([FromBody]VehicleDetailsWDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if (!await _vehicleModelRepo.EntityExists(model.modelId))
                {
                    ModelState.AddModelError("ModelId", "Invalid model id");
                    return BadRequest(ModelState);
                }
                var entity = _vehicleDetailsRepo.CreateVehicleDetail(model);
                _vehicleDetailsRepo.Add(entity);
                if (await _uow.completeAsync())
                    return Ok(model);

                return StatusCode(500);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVehicleDetails(int id, [FromBody]VehicleDetailsWDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var vehicleEntity = await _vehicleDetailsRepo.FindVehicleEntity(id);

                if (vehicleEntity == null)
                    return NotFound(id);

                var entity = _vehicleDetailsRepo.UpdateVehicleDetail(model, vehicleEntity);
                _vehicleDetailsRepo.Update(entity);
                if (await _uow.completeAsync())
                    return Ok(model);

                return StatusCode(500, model);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicleDetails(int id)
        {
            try
            {
                var vehicleEntity = await _vehicleDetailsRepo.FindVehicleEntity(id);

                if (vehicleEntity != null)
                {
                    _vehicleDetailsRepo.Remove(vehicleEntity);
                    if (await _uow.completeAsync())
                        return Ok(id);
                }

                return NotFound(id);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVehicleDetails(int id)
        {
            try
            {
                var vehicleDetails = await _vehicleDetailsRepo.GetVehicleDetails(id);

                if (vehicleDetails != null)
                {
                    return Ok(vehicleDetails);
                }

                return NotFound(id);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }

        [HttpGet()]
        public async Task<IActionResult> GetVehicleDetailsList([FromQuery] VehicleQuery queryObj)
        {
            try
            {
                var vehicleDetails = await _vehicleDetailsRepo.GetVehicleDetailsList(queryObj);

                if (vehicleDetails != null)
                {
                    return Ok(vehicleDetails);
                }

                return NotFound(vehicleDetails);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}