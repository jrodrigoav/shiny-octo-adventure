using System;

namespace JRodrigoAV.Models.Cards
{

    public class TranslationCard {
        public int CardId { get; set; }

        public int CultureId { get; set; }

        public string CultureText { get; set; }

        public DateTime CreatedOn { get; set; }

        public Nullable<DateTime> LastModified { get; set; }
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