

module.exports = async(client, message) => {

if(!message.guild || message.author.bot) return;
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);

if (message.content.match(RegMention)) { 
    message.channel.send(`usa z/help para jugar conmigo >w<`)
}
  
 prefix = client.config.d_prefix

if(!message.content.startsWith(prefix)) return

let msgArray = message.content.split(" ");

let cmd = msgArray[0];

let args = msgArray.slice(1);

let command = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

if(command) command.run(client, message, args).catch(console.log);
message.channel.stopTyping()
  
}