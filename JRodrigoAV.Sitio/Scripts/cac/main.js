import signalR from  '../signalr-client';

function test() {
    console.log('Testing');
    try {
        let transportType = signalR.TransportType[getParameterByName('transport')] || signalR.TransportType.WebSockets;
        let logger = new signalR.ConsoleLogger(signalR.LogLevel.Information);
        let connection = new signalR.HubConnection('/chat', { transport: transportType, logger: logger });
    }
    catch (e) {
        console.error(e);
    }
}

test();