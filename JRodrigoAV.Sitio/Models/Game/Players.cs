using System.Collections.Generic;

namespace JRodrigoAV.Sitio.Models.Game
{
    public class Players : Dictionary<string, Player>
    {
        public bool AddPlayer(string playerName, string connectionId)
        {
            bool result = false;
            string lowerCaseName = playerName.ToLowerInvariant();
            if (!ContainsKey(lowerCaseName))
            {
                Add(lowerCaseName, new Player(connectionId, playerName));
                result = true;
            }
            return result;
        }
    }
}