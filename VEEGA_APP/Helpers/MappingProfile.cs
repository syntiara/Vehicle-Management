using AutoMapper;
using System.Linq;
using VEEGA_APP.Core.DataObjects.Entities;
using VEEGA_APP.Core.DataObjects.Models;

namespace VEEGA_APP.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<vehicle_feature, VehicleBaseDTO>().ReverseMap();
            CreateMap<vehicle_feature, VehicleBaseDTO>().ReverseMap();
            CreateMap<vehicle_feature, VehicleBaseDTO>().ReverseMap();
            //mapping generics
            //CreateMap(typeof(QueryResult<>), typeof(QueryResultDTO<>));


            CreateMap<vehicle_make, VehicleMakeDTO>()
                .ForMember(dest => dest.models, opt => opt.MapFrom(src => src.vehicle_model));

            CreateMap<vehicle_photo, PhotoDTO>()
              .ForMember(dest => dest.id, opt => opt.MapFrom(src => src.id))
              .ForMember(dest => dest.fileName, opt => opt.MapFrom(src => src.file_name));

            CreateMap<vehicle_details, VehicleDetailsDTO>()
                .ForMember(dest => dest.contact, opt => opt.MapFrom(src => new ContactDTO { name = src.contact.contact_name, email = src.contact.contact_email, phone_number = src.contact.contact_phoneNumber }))
                .ForMember(dest => dest.models, opt => opt.MapFrom(src => src.vehicle_model))
                .ForMember(dest => dest.makes, opt => opt.MapFrom(src => src.vehicle_model.vehicle_make))
                .ForMember(dest => dest.features, opt => opt.MapFrom(src => src.vehicle_feature_join.Select(x => x.vehicle_feature)));





            // mapping collectiona
            CreateMap<VehicleDetailsWDTO, vehicle_details>()
             //Ignore mapping primary key
             .ForMember(dest => dest.id, opt => opt.Ignore())
             .ForMember(dest => dest.contact, opt => opt.MapFrom(src => new contact { contact_name = src.contact.name, contact_email = src.contact.email, contact_phoneNumber = src.contact.phone_number }))
               .ForMember(dest => dest.vehicle_feature_join, opt => opt.Ignore())
              .AfterMap((vwdto, ve) =>
              {
                  // Remove unselected features
                  var removedFeatures = ve.vehicle_feature_join.Where(f => !vwdto.features.Contains(f.featureId));
                  foreach (var f in removedFeatures)
                      ve.vehicle_feature_join.Remove(f);

                  // Add new features
                  var addedFeatures = vwdto.features.Where(id => !ve.vehicle_feature_join.Any(f => f.featureId == id)).Select(id => new vehicle_feature_join { featureId = id });
                  foreach (var f in addedFeatures)
                      ve.vehicle_feature_join.Add(f);
              });


        }
    }
}
