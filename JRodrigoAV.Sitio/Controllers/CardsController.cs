using JRodrigoAV.Sitio.Models.Decks;
using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    [Route("api/cards")]
    public class CardsController : Controller
    {
        private readonly WhiteDeck _whiteDeck;
        private readonly BlackDeck _blackDeck;
        public CardsController(WhiteDeck whiteDeck, BlackDeck blackDeck)
        {
            _whiteDeck = whiteDeck;
            _blackDeck = blackDeck;
        }

        [HttpGet("whitedeck")]
        public IActionResult WhiteDeck() => Json(_whiteDeck.ShowCards);

        [HttpGet("white/{id}")]
        public IActionResult GetWhiteCardById(int id) => Json(_whiteDeck.GetCardById(id));

        [HttpGet("blackdeck")]
        public IActionResult BlackDeck() => Json(_blackDeck.ShowCards);

        [HttpGet("black/{id}")]
        public IActionResult GetBlackCardById(int id) => Json(_blackDeck.GetCardById(id));
    }
}