module.exports = async (client) => {
  
  await console.log(`____________________\nClient: ${client.user.tag}\nClient ID: ${client.user.id}\nGuild Count: ${client.guilds.cache.size}\nUser Count: ${client.users.cache.size}\n____________________`)
  client.user.setActivity(`z/help || Nueva version :3 `, { type: 'WATCHING' });
  
}