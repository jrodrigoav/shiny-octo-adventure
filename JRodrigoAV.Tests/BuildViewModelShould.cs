using JRodrigoAV.Models.Decks;
using JRodrigoAV.Models.Game;
using Xunit;

namespace JRodrigoAV.Tests
{
    public class BuildViewModelShould
    {
        private BlackDeck _blackDeck;
        private WhiteDeck _whiteDeck;

        public BuildViewModelShould()
        {
            _blackDeck = new BlackDeck();
            _whiteDeck = new WhiteDeck();
        }

        [Theory]
        [InlineData(1, 1)]
        [InlineData(3,1,2,3)]
        public void ReturnText(int blackCardId, params int[] selectedCards)
        {
            var blackCard=_blackDeck.GetCardById(blackCardId);
            var sut = new BuildViewModel()
            {
                Blackcard = blackCardId,
                Selectedcards = selectedCards
            };
            var result = sut.Build(_blackDeck, _whiteDeck);

            Assert.NotEmpty(result);
            Assert.NotEqual("Select some cards first", result);
        }
    }
}