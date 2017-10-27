using JRodrigoAV.Sitio.Hubs;
using JRodrigoAV.Sitio.StartupServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace JRodrigoAV.Sitio
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {           
            services.AddMvc();

            services.AddSignalR();

            //services.AddSingleton(typeof(DefaultHubLifetimeManager<>), typeof(DefaultHubLifetimeManager<>));
            //services.AddSingleton(typeof(HubLifetimeManager<>), typeof(DefaultPresenceHublifetimeManager<>));
            services.AddSingleton(typeof(IUserTracker<>), typeof(InMemoryUserTracker<>));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseMvcWithDefaultRoute();

            app.UseSignalR(routes =>
            {
                routes.MapHub<Chat>("chat");
            });
        }
    }
}
