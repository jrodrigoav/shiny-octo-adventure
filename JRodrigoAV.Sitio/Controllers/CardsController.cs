using JRodrigoAV.Sitio.Models.Decks;
using JRodrigoAV.Sitio.Models.Game;
using Microsoft.AspNetCore.Mvc;

namespace JRodrigoAV.Sitio.Controllers
{
    [Route("api/cards")]
    public class CardsController : Controller
    {
        private readonly GameState _gameState;
        private readonly WhiteDeck _whiteDeck;
        private readonly BlackDeck _blackDeck;
        public CardsController(GameState gameState, WhiteDeck whiteDeck, BlackDeck blackDeck)
        {
            _whiteDeck = whiteDeck;
            _blackDeck = blackDeck;
            _gameState = gameState;
        }

        [HttpGet("whitedeck")]
        public IActionResult WhiteDeck() => Json(_whiteDeck.ShowCards);

        [HttpGet("white/{id}")]
        public IActionResult GetWhiteCardById(int id) => Json(_whiteDeck.GetCardById(id));

        [HttpGet("blackdeck")]
        public IActionResult BlackDeck() => Json(_blackDeck.ShowCards);

        [HttpGet("black/{id}")]
        public IActionResult GetBlackCardById(int id) => Json(_blackDeck.GetCardById(id));

        [HttpGet("black")]
        public IActionResult GetBlackCard(){
            if(_gameState.Started)
            {
                return Json(_blackDeck.GetTopCard());
            }
            return BadRequest("Game not started");
        } 
    }
}