using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System.IO;
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
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
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
            services.AddScoped<IVehiclePhotoRepository, VehiclePhotoRepository>();


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

            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
            app.UseMvcWithDefaultRoute();
            //to serve images, stylesheet etc.
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    FileProvider = new PhysicalFileProvider(
            //Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads")),
            //    RequestPath = "/Myuploads",
            //    //ContentTypeProvider = provider
            //});

            //app.UseDirectoryBrowser(new DirectoryBrowserOptions
            //{
            //    FileProvider = new PhysicalFileProvider(
            //        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads")),
            //    RequestPath = "/Myuploads"
            //});
            app.UseCors("CorsPolicy");
            app.UseMvc();
            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}
