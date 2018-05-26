namespace JRodrigoAV.Models.Cards
{
    public class WhiteCard : BaseCard {
        bool Selected { get; set; }
        public WhiteCard () {

        }
        public WhiteCard (int id, string text) : base (id, text) {

        }
    }

}