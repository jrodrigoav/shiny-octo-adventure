using System;

namespace JRodrigoAV.Models.Cards
{
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

}