using Microsoft.EntityFrameworkCore;
using VEEGA_APP.Core.DataObjects.Entities;

namespace VEEGA_APP.Infrastructure
{
    public class VeegaContext: DbContext
    {
       public VeegaContext(DbContextOptions<VeegaContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // For mapping complex types 
            modelBuilder.Entity<vehicle_details>(e =>
            {
                e.HasKey(x => x.id);
                e.OwnsOne(p => p.contact).Property(c => c.contact_name).HasColumnName("contact_name");
                e.OwnsOne(p => p.contact).Property(c => c.contact_email).HasColumnName("contact_email");
                e.OwnsOne(p => p.contact).Property(c => c.contact_phoneNumber).HasColumnName("contact_phoneNumber");
            });

            //vehicle feature has two keys
            modelBuilder.Entity<vehicle_feature_join>().HasKey(vf => new { vf.vehicle_detailsId, vf.featureId });
        }
        public DbSet<vehicle_make> vehicle_make { get; set; }
        public DbSet<vehicle_model> vehicle_model { get; set; }
        public DbSet<vehicle_feature> vehicle_feature { get; set; }
        public DbSet<vehicle_details> vehicle_details { get; set; }


    }
}
