using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VEEGA_APP.Core.Interfaces;
using VEEGA_APP.Helpers;
using VEEGA_APP.Infrastructure;
using VEEGA_APP.Infrastructure.Repos;

namespace VEEGA_APP
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("AppSettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"AppSettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            configuration = builder.Build();
        }

        public IConfiguration configuration{ get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddAutoMapper();

            // Inject AppIdentitySettings so that others can use too
            services.Configure<PhotoSettings>(configuration.GetSection("PhotoSettings"));

            services.Configure<AppSettings>(configuration.GetSection("ApplicationSettings"));
            var connectionString = configuration.GetConnectionString("VeegaCoreEF");
            services.AddDbContext<VeegaContext>(o => o.UseSqlServer(connectionString));

            //Scoped is used beacuse it persists through out the life time of the request
            //Unlike singleton that persissts through the life time  of the  application
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IVehicleFeatureRepository, VehicleFeatureRepository>();
            services.AddScoped<IVehicleMakeRepository, VehicleMakeRepository>();
            services.AddScoped<IVehicleDetailsRepository, VehicleDetailsRepository>();
            services.AddScoped<IVehicleModelRepository,  VehicleModelRepository>();


            //Enable Cors
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //to serve images, stylesheet etc.
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            app.UseMvc();
            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}
