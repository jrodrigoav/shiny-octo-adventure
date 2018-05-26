using System.Collections.Generic;
using System.Linq;
using JRodrigoAV.Models.Cards;
using JRodrigoAV.Models.Decks;

namespace JRodrigoAV.Models.Game {
    public class GameState {
        private readonly BlackDeck _blackDeck;
        private readonly WhiteDeck _whiteDeck;
        private readonly Players _players;
        public IEnumerable<string> PlayerNames => _players.Select (p => p.Value.Name);
        public bool Started { get; private set; }

        public BlackCard GameCard { get; private set; }
        public BlackDeck BlackDeck => _blackDeck;
        public WhiteDeck WhiteDeck => _whiteDeck;
        public Dictionary<string, string> Votes { get; set; }
        public GameState (Players players, WhiteDeck whiteDeck, BlackDeck blackDeck) {
            Started = false;
            _players = players;
            _blackDeck = blackDeck;
            _whiteDeck = whiteDeck;
            Votes = new Dictionary<string, string> ();
        }

        public void StartGame () {
            Started = true;
            GameCard = _blackDeck.GetTopCard ();
        }

        public void StopGame () {
            Started = false;
            GameCard = null;
            Votes.Clear ();
        }

        public IEnumerable<WhiteCard> DealCardsToPlayer (int cardsToDeal = 10) {
            return _whiteDeck.DealCardsToPlayer(cardsToDeal);
        }

        public void AddChoice (string playerId, int[] selectedCards) {
            if (!Votes.ContainsKey (playerId) && Started) {
                Votes.Add (playerId, new BuildViewModel ().Build (GameCard, selectedCards, _blackDeck, _whiteDeck));
            }
        }
    }
}