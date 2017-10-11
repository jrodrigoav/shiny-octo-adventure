using JRodrigoAV.Sitio.Models;
using JRodrigoAV.Sitio.StartupServices;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace JRodrigoAV.Sitio.Hubs
{
    public class Chat : HubWithPresence
    {
        public Chat(IUserTracker<Chat> userTracker)
            : base(userTracker)
        {
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.Client(Context.ConnectionId).InvokeAsync("SetUsersOnline", await GetUsersOnline());

            await base.OnConnectedAsync();
        }

        public override Task OnUsersJoined(UserDetails[] users)
        {
            return Clients.Client(Context.ConnectionId).InvokeAsync("UsersJoined", users);
        }

        public override Task OnUsersLeft(UserDetails[] users)
        {
            return Clients.Client(Context.ConnectionId).InvokeAsync("UsersLeft", users);
        }

        public async Task Send(string message)
        {
            await Clients.All.InvokeAsync("Send", Context.User.Identity.Name, message);
        }
    }
}
