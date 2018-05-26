namespace JRodrigoAV.Models.Game {
    public class Player {
        public string ConnectionId { get; set; }

        public string Name { get; set; }

        public string LowerCaseName => Name.ToLowerInvariant ();

        public Player () {

        }

        public Player (string connectionId, string name) {
            ConnectionId = connectionId;
            Name = name;
        }
    }
}