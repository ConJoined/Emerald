exports.run = (client, message, args) => {
  console.log(`Changed status in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setPresence({ game: { name: args.join(" "), type: 2 } });
  const embed = new  Discord.RichEmbed()
        .setTitle("Ran successfully")
        .setDescription("Okay, NERD, we did it for you. Lazy nerd. Here's your result. ```"..args.join(" ").."```\n But you're still average, and I'm still savage.")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by: " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setTimestamp();
      message.channel.send({ embed })
      return
}
