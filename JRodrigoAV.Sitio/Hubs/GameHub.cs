using JRodrigoAV.Sitio.Models.Game;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            result = _players.AddPlayer(playerName, Context.ConnectionId);
            if (result)
            {
                await Clients.All.InvokeAsync("PlayerJoined", _gameState.PlayerNames);
            }
            return await Task.Run(() => new { Joined = result, GameState = _gameState, WhiteCards = _gameState.DealCardsToPlayer() });
        }

        public async Task<bool> LeaveGame()
        {
            bool result = false;
            var player = GetPlayer();
            if (player != null)
            {
                result = _players.Remove(player.LowerCaseName);
                if (_players.Count == 0)
                {
                    _gameState.StopGame();
                }
                await Clients.All.InvokeAsync("PlayerLeft", _gameState.PlayerNames);
            }
            return await Task.Run(() => result);
        }

        public async Task StartGame()
        {
            if (!GameInProgress())
            {
                _gameState.StartGame();

                await Clients.All.InvokeAsync("GameStarted", _gameState);
            }
        }

        public async Task StopGame()
        {
            if (GameInProgress())
            {
                _gameState.StopGame();
                await Clients.All.InvokeAsync("GameStopped");
            }
        }

        public async Task SendCards(int[] selectedCards = null)
        {
            if (GameInProgress() && selectedCards != null)
            {
                await Clients.Client(Context.ConnectionId).InvokeAsync("ReceiveCards", _gameState.DealCardsToPlayer(selectedCards.Length));
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

        private bool GameInProgress()
        {
            return _gameState.Started && GetPlayer() != null;
        }
    }
}
