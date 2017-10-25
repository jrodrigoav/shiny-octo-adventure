using JRodrigoAV.Sitio.Hubs;
using JRodrigoAV.Sitio.Models.Decks;
using JRodrigoAV.Sitio.Models.Game;
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
            services.AddSingleton<WhiteDeck>();
            services.AddSingleton<BlackDeck>();
            services.AddSingleton<Players>();
            services.AddSignalR();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSignalR(routes => routes.MapHub<GameHub>("game"));
            
            app.UseMvcWithDefaultRoute();

            app.UseStaticFiles();
        }
    }
}
