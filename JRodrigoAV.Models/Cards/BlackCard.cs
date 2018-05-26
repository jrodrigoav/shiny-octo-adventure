namespace JRodrigoAV.Models.Cards
{
    public class BlackCard : BaseCard {
        public int Pick { get; set; }

        public int Draw { get; set; }

        public BlackCard () {
            Pick = 0;
            Draw = 0;
        }

        public BlackCard (int id, string text, int pick, int draw) : base (id, text) {
            Pick = pick;
            Draw = draw;
        }
    }

}