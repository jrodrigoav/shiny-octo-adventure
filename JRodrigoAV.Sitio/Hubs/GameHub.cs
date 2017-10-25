using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JRodrigoAV.Sitio.Models.Game;

namespace JRodrigoAV.Sitio.Hubs
{
    public class GameHub : Hub
    {
        private readonly Players _players;
        public GameHub(Players players)
        {
            _players = players;
        }
        public async Task<bool> JoinGame(string playerName)
        {
            bool result = false;
            if (!_players.ContainsKey(playerName))
            {
                _players.Add(playerName, new Player(this.Context.ConnectionId, playerName));
                result = true;
            }
            if (result)
            {
                await Clients.All.InvokeAsync("PlayerJoined", playerName);
            }
            return await Task.Run(() => result);
        }

        public async Task<bool> LeaveGame()
        {
            bool result = false;
            var player = _players.SingleOrDefault(s => s.Value.ConnectionId == this.Context.ConnectionId);
            if (player.Key != null)
            {
                result = _players.Remove(player.Key);
                await Clients.All.InvokeAsync("PlayerLeft",player.Key);
            }            
            return await Task.Run(() => result);
        }
    }
}
