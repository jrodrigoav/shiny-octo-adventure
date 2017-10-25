using System.Collections.Generic;
using System.Linq;

namespace JRodrigoAV.Sitio.Models.Game
{
    public class GameState
    {
        private readonly Players _players; 
        public IEnumerable<string> PlayerNames => _players.Select(p=>p.Value.Name);
        public bool Started { get; private set; }

        public GameState(Players players)
        {
            Started=false;
            _players=players;
        }

        public void StartGame()
        {
            Started=true;
        }

        public void StopGame()
        {
            Started=false;
        }
    }
}