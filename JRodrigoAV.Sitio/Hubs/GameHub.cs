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
        private readonly GameState _gameState;
        private readonly Players _players;
        public GameHub(Players players, GameState gameState)
        {
            _players = players;
            _gameState = gameState;
        }
        public async Task<object> JoinGame(string playerName)
        {
            bool result = false;
            string lowerCaseName = playerName.ToLowerInvariant();
            if (!_players.ContainsKey(lowerCaseName))
            {
                _players.Add(lowerCaseName, new Player(this.Context.ConnectionId, playerName));
                result = true;
            }
            if (result)
            {
                await Clients.All.InvokeAsync("PlayerJoined", playerName);
            }
            return await Task.Run(() => new { Joined = result, GameState = _gameState });
        }

        public async Task<bool> LeaveGame()
        {
            bool result = false;
            var player = GetPlayer();
            if (player != null)
            {
                result = _players.Remove(player.LowerCaseName);
                if(_players.Count == 0)
                {
                    _gameState.StopGame();
                }
                await Clients.All.InvokeAsync("PlayerLeft", player.Name);
            }
            return await Task.Run(() => result);
        }

        public async Task StartGame()
        {
            if (!_gameState.Started && GetPlayer() != null)
            {
                _gameState.StartGame();
                await Clients.All.InvokeAsync("GameStarted");
            }
        }

        public async Task StopGame()
        {
            if (_gameState.Started && GetPlayer() != null)
            {
                _gameState.StopGame();
                await Clients.All.InvokeAsync("GameStopped");
            }
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return LeaveGame();
        }

        private Player GetPlayer()
        {
            KeyValuePair<string, Player> keyValuePair = _players.SingleOrDefault(s => s.Value.ConnectionId == this.Context.ConnectionId);
            return keyValuePair.Value;
        }
    }
}
