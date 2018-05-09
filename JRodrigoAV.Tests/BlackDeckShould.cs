using System;
using JRodrigoAV.Models.Cards;
using JRodrigoAV.Models.Decks;
using Xunit;

namespace JRodrigoAV.Tests
{
    public class BlackDeckShould : IDisposable
    {
        private BlackDeck _deck;

        public BlackDeckShould()
        {
            _deck =new BlackDeck();
        }

        [Fact]
        public void ReturnACard()
        {
            var card = _deck.GetTopCard();

            Assert.NotNull(card);
        }

        [Fact]
        public void ReturnDifferentCardAfterShuffle()
        {
            var topCard = _deck.GetTopCard();
            _deck.Shuffle();
            var newCard = _deck.GetTopCard();

            Assert.NotEqual(topCard.Id, newCard.Id);
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _deck = null; // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~BlackDeckShould() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}