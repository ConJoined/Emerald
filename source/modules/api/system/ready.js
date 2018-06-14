exports.run = (client) => {
  console.log(`Ready to serve NERDS in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setPresence({ game: { name: 'on Eme; help me.' } });
}
