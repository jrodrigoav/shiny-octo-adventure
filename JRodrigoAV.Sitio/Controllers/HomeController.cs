using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()=> View();
        [HttpGet]
        public IActionResult CAC() => View();
        [HttpGet]
        public IActionResult SoliCACrio() => View();

    }
}