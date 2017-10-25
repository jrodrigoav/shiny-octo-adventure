using System;
using System.Collections.Generic;
using System.Linq;
using JRodrigoAV.Sitio.Models.Cards;

namespace JRodrigoAV.Sitio.Models.Decks
{
    public abstract class Deck<T> where T : BaseCard
    {
        protected List<T> AllCards { get; set; }
        protected List<T> GameCards { get; set; }

        public IEnumerable<T> ShowCards => AllCards;

        protected Deck()
        {
            AllCards = new List<T>();
            GameCards = null;
        }
        public void Shuffle()
        {
            GameCards = AllCards.OrderBy(s => Guid.NewGuid()).ToList();
        }

        public T GetCardById(int id)
        {
            return AllCards.SingleOrDefault(card => card.Id == id);
        }
        public T GetTopCard(bool reShuffle = false)
        {
            return GetNthCard(0, reShuffle);
        }

        public T GetBottomCard(bool reShuffle = false)
        {
            var max = GameCards.Count - 1;
            return GetNthCard(max);

        }

        private T GetNthCard(int index, bool reShuffle = false)
        {
            if (GameCards.Count <= 0 || reShuffle)
            {
                Shuffle();
            }
            if (GameCards.Count > 0)
            {
                var result = GameCards.ElementAt<T>(index);
                GameCards.RemoveAt(index);
                return result;
            }
            return null;
        }

        public T GetRandomCard(Random randomGen)
        {
            var max = GameCards.Count - 1;
            var index = randomGen.Next(0, max);
            return GetNthCard(index);
        }

        public Int32 CountGameCards()
        {
            if (GameCards == null)
                throw new Exception("You must Shuffle the deck before starting the Game");
            return GameCards.Count;
        }

        //private void Dispose(bool disposing)
        //{
        //   if (disposing)
        //   {
        //      if (AllCards != null)
        //      {
        //         AllCards.Clear();
        //         AllCards = null;
        //      }
        //      if (GameCards != null)
        //      {
        //         GameCards.Clear();
        //         GameCards = null;
        //      }
        //   }
        //}

        //protected override void Dispose()
        //{
        //   Dispose(true);
        //   GC.SuppressFinalize(this);
        //}
    }

    public partial class WhiteDeck : Deck<WhiteCard>
    {
        public List<WhiteCard> DealCardsToPlayer(int cardsToDeal = 10)
        {
            var result = new List<WhiteCard>(0);
            do
            {
                var card = GetTopCard();
                if (result.Any(g => g.Id == card.Id) == false)
                {
                    result.Add(card);
                }

            }
            while (result.Count < cardsToDeal);
            return result;
        }
    }

    public partial class BlackDeck : Deck<BlackCard>
    {
        const string CARDSLOT = "__________";

        private IEnumerable<int> FindSlots(string str)
        {
            for (int index = 0; ; index += CARDSLOT.Length)
            {
                index = str.IndexOf(CARDSLOT, index);
                if (index == -1)
                    break;
                yield return index;
            }

        }
    }

}
