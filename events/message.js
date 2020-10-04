
const db1 = require('megadb')
let interchat = new db1.crearDB('interchat');
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
module.exports = async(client, message) => {

if(!message.guild || message.author.bot) return;
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);

if (message.content.match(RegMention)) { 
    message.channel.send(`usa z/help para jugar conmigo >w<`)
}
let kana = interchat.obtener("array").then(sa =>{
    if(sa.includes(message.channel.id)){
        if (message.author.bot) return;
    


const array2 = [
  "discord.gg",
  "discord.me",
  "discord.io/",
  "discordapp.com/invite",
  "https:",
  ".com",
  ".net"
];
let prohibidos = ["", ""];


if(prohibidos.includes(message.author.id)) return;

const interchatembed = new MessageEmbed()
  if(message.attachments.first()){
    async function a() {
    const url = message.attachments.first().url

    const channellog = client.channels.cache.get("762367139499081758")
    
    const atta = new Discord.MessageAttachment(url,"attachment.png")
    
    const log = await channellog.send(atta)
    
    const aurl = log.attachments.first().url
    if (array2.some(word => message.content.toLowerCase().includes(word))) {
      message.delete();
  
      message
        .reply("No se permiten invitaciones en este servidor .")
    } else {
    
    interchatembed.setImage(aurl)
    interchatembed.setDescription(message)
    interchatembed.setAuthor(message.author.tag, message.author.avatarURL())
    interchatembed.setFooter(`${message.guild.name}, (${message.author.id})`)
    interchatembed.setThumbnail(message.author.avatarURL)
    interchatembed.setColor("RANDOM");
    sa.forEach(a => {
  try{
      client.channels.cache.get(a).send(interchatembed).catch(() =>interchat.extract("array", a))
  } catch {
    interchat.extract("array", a)
  }
 
    })
    setTimeout(()=> message.delete(),2000)
  }
    }
    a()
}else {

        
        
   interchatembed.setAuthor(message.author.tag, message.author.avatarURL())
   interchatembed.setFooter(`${message.guild.name}, (${message.author.id})`)
   interchatembed.setThumbnail(message.author.avatarURL)
   interchatembed.setDescription(message)
   interchatembed.setColor("RANDOM");


                                                                

  
  //Acá hacemos el AntiInvites
  if (array2.some(word => message.content.toLowerCase().includes(word))) {
    message.delete();

    message
      .reply("No se permiten invitaciones en este servidor .")
       
    //Terminamos AntiInvites
  } else {
      if (message.author.bot) return;
            setTimeout(()=> message.delete(),2000)
   
    sa.forEach(a => {
       
  
      client.channels.cache.get(a).send(interchatembed)
      
      
      
 
    })
      
  } 
}


    
       
    }
   
    
})
 prefix = client.config.d_prefix

if(!message.content.startsWith(prefix)) return

let msgArray = message.content.split(" ");

let cmd = msgArray[0];

let args = msgArray.slice(1);

let command = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

if(command) command.run(client, message, args).catch(console.log);
message.channel.stopTyping()
  
}