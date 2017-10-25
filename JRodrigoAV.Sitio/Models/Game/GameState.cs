using System.Collections.Generic;
using System.Linq;
using JRodrigoAV.Sitio.Models.Cards;
using JRodrigoAV.Sitio.Models.Decks;

namespace JRodrigoAV.Sitio.Models.Game
{
    public class GameState
    {
        private readonly BlackDeck _blackDeck;
        private readonly WhiteDeck _whiteDeck;
        private readonly Players _players; 
        public IEnumerable<string> PlayerNames => _players.Select(p=>p.Value.Name);
        public bool Started { get; private set; }

        public BlackCard GameCard {get;private set;}

        public GameState(Players players,WhiteDeck whiteDeck,BlackDeck blackDeck)
        {
            Started=false;
            _players=players;
            _blackDeck=blackDeck;
            _whiteDeck=whiteDeck;
        }

        public void StartGame()
        {
            Started=true;            
            GameCard=_blackDeck.GetTopCard();
        }

        public void StopGame()
        {
            Started=false;
            GameCard=null;
        }
    }
}