using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()=> View();

        public IActionResult CAC() => View();

    }
}