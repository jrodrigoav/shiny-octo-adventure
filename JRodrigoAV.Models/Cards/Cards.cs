using System;

namespace JRodrigoAV.Models.Cards {

    public class BaseCard {
        public int Id { get; set; }

        public string Text { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? LastModified { get; set; }

        //public virtual ICollection<TranslationCard> Translations { get; set; }
        public BaseCard () {

        }
        public BaseCard (int id, string text) {
            Id = id;
            Text = text;
        }
    }

    public class TranslationCard {
        public int CardId { get; set; }

        public int CultureId { get; set; }

        public string CultureText { get; set; }

        public DateTime CreatedOn { get; set; }

        public Nullable<DateTime> LastModified { get; set; }
    }

    public class WhiteCard : BaseCard {
        bool Selected { get; set; }
        public WhiteCard () {

        }
        public WhiteCard (int id, string text) : base (id, text) {

        }
    }

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

    public class WhiteCardTranslation : TranslationCard {
        public WhiteCard Card { get; set; }
    }

    public class BlackCardTranslation : TranslationCard {
        public BlackCard Card { get; set; }
    }

    public enum CardTypes {
        Black = 0,
        White = 1
    }

}