using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    public class CACController:Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
