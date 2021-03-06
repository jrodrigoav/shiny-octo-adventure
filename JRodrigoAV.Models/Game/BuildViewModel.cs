using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JRodrigoAV.Models.Cards;
using JRodrigoAV.Models.Decks;

namespace JRodrigoAV.Models.Game {
    public class BuildViewModel {
        const string REPLACEME = "__________";
        public int Blackcard { get; set; }
        public int[] Selectedcards { get; set; }

        public string Build (BlackDeck blackDeck, WhiteDeck whiteDeck) {
            BlackCard black = blackDeck.GetCardById (Blackcard);
            if (Selectedcards?.Length == 0 || black == null) return "Select some cards first";

            StringBuilder result = new StringBuilder (black.Text);
            foreach (int cardId in Selectedcards) {
                WhiteCard card = whiteDeck.GetCardById (cardId);
                if (card != null) {
                    int pos = result.ToString ().IndexOf (REPLACEME);
                    if (pos < 0) {
                        result.AppendFormat (" {0}", card.Text);
                        break;
                    }
                    result.Remove (pos, REPLACEME.Length);
                    result.Insert (pos, card.Text);
                    //return text.Substring(0, pos) + replace + text.Substring(pos + search.Length);
                }
            }
            return result.ToString ();
        }

        public string Build (BlackCard gameCard, int[] selectedCards, BlackDeck blackDeck, WhiteDeck whiteDeck) {
            Blackcard = gameCard.Id;
            Selectedcards = selectedCards;
            return Build (blackDeck, whiteDeck);
        }
    }
}