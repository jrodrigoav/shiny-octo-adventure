﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()=> View();

        public IActionResult CAC() => View();

    }
}