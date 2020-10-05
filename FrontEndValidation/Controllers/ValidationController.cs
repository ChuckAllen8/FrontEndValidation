using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FrontEndValidation.Models;
using Microsoft.AspNetCore.Mvc;

namespace FrontEndValidation.Controllers
{
    public class ValidationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Profile(User u)
        {
            return View(u);
        }
    }
}
