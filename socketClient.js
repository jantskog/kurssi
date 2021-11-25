var net = require('net');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var promptName = 'Anna käyttäjänimi'
var client = new net.Socket();
client.connect(1337, '127.0.0.1', function () {
    console.log('Connected!');
    //console.log('Anna käyttäjänimi : ');
    //client.write('Hello, server! Love, Client.');

    rl.question(`${('Anna käyttäjänimi')}: `, mail => {
        username = mail;
        promptName = username
        rl.setPrompt(`${promptName}: `);
        rl.prompt()
    });
});

client.on('data', function (data) {
    console.log('Message : ' + data);
    //lue komentoriviltä tekstiä ja lähetä se sockettiin. 
    //    client.write (komentoriviltäluettudata)

    //rl = readline.createInterface(process.stdin, process.stdout);


    
    //rl.setPrompt(`>`);
    //rl.setPrompt(`${promptName}: `);
    rl.prompt()

    rl.on('line', (teksti) => {
        //rl.prompt()
       console.log(`teksti: ${teksti}`);
        client.write(teksti)
        if (teksti === "quit") {
            rl.close();
            client.end();
            client.destroy(); 
        }
    });

    //client.write("Viesti asiakkaalta"+teksti)

    //	client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});
