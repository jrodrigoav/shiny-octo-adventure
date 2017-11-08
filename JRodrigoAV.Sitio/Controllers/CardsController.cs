using JRodrigoAV.Sitio.Hubs;
using JRodrigoAV.Sitio.Models.Decks;
using JRodrigoAV.Sitio.Models.Game;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace JRodrigoAV.Sitio.Controllers
{
    [Route("api/cards")]
    public class CardsController : Controller
    {
        //private readonly IHubContext<GameHub> _gameHub;

        /*public CardsController(GameState gameState,IHubContext<GameHub> gameHubContext)
        {
            _gameState = gameState;
            _gameHub = gameHubContext;
        }*/

        [HttpGet("whitedeck")]
        public IActionResult WhiteDeck([FromServices]WhiteDeck whiteDeck) => Json(whiteDeck.ShowCards);

        [HttpGet("white/{id}")]
        public IActionResult GetWhiteCardById(int id, [FromServices]WhiteDeck whiteDeck) => Json(whiteDeck.GetCardById(id));

        [HttpGet("blackdeck")]
        public IActionResult BlackDeck([FromServices]BlackDeck blackDeck) => Json(blackDeck.ShowCards);

        [HttpGet("black/{id}")]
        public IActionResult GetBlackCardById(int id, [FromServices]BlackDeck blackDeck) => Json(blackDeck.GetCardById(id));

        [HttpGet("black")]
        public IActionResult GetBlackCard([FromServices]BlackDeck blackDeck)
        {
            return Json(blackDeck.GetTopCard());
        }

        [HttpGet("deal")]
        public IActionResult DealCards([FromServices] WhiteDeck whiteDeck, int cards = 10)
        {
            return Json(whiteDeck.DealCardsToPlayer(cards));
        }

        [HttpPost("build")]
        public string Build([FromBody]BuildViewModel model, [FromServices]WhiteDeck whiteDeck, [FromServices] BlackDeck blackDeck)
        {
            return model.Build(blackDeck, whiteDeck);
        }
    }
}