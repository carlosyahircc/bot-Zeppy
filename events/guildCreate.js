module.exports = async (client, guild) => {

    let channelID;
    let channels = guild.channels.cache
    channelLoop:
    for(let c of channels){
      let channeltype = c[1].type
      if(channeltype === "text"){
        channelID = c[0]
        break channelLoop
      }
    }
    let channel =
        client.channels.cache.get(channelID)
    
    
     client.channels.resolve(channel).send("**Gracias por añadirme >w<** \n • Conmigo te podras divertir :3 pero para eso debes saber mis comandos UwU usa z/help :3 \n Mi prefix es: \n `z/`\n •  \n •`Unete al servidor (≧ω≦)`: https://discord.gg/Dj7zXen");

}