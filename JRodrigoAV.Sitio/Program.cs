using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace JRodrigoAV.Sitio
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            IWebHost result = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseIISIntegration()
                .Build();
            return result;
        }
    }
}
