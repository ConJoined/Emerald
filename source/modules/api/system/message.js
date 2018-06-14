module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
​
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.prefix) !== 0) return;
​
  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
​
  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);
  
  // Check for a syscommand
  const syscmd = client.syscmds.get(command);
​
  // If that command doesn't exist AT ALL, don't silently exit and do nothing, LOUDLY exit and do nothing
  if (!cmd && !syscmd) {
    const embed = new Discord.RichEmbed()
  .setTitle("You can't run this command.")
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor([99, 206, 160])
  .setDescription("This command doesn't exist.\n\n If it's a typo, carry on. If you need a list of commands, or if you want to suggest this command, [go to our website.]()")
  .setFooter("Requested by: @"..message.author.tag, "http://i.imgur.com/w1vhFSR.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addBlankField(true);
​
  message.channel.send({embed});
    return
  };
  if (syscmd) {
  /* I wanna check something */
  if (message.author.id = 424367587934339084 || message.author.id = 388323805124362240) {
   const embed = new Discord.RichEmbed()
  .setTitle("Running System Command")
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor([99, 206, 160])
  .setDescription("You probably have gotten the lecture about the dangers of this command. If not, here it is:\n\n- This command can bring down an entire shard. Only use it if you are SURE you need to.\n- Using eval can be dangerous. Be cautious with the command.\n\nBy using this command (and any other system commands), you agree to the Administrator Terms in [Section D of the Emerald ToC](https://friendesreboot.github.io/Emerald/terms.html#d).")
  .setFooter("Requested by: "..message.author.tag, message.author.displayAvatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addBlankField(true);
​
  message.author.send({embed});
  } else {
  const embed = new Discord.RichEmbed()
  .setTitle("You can't run this command.")
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor([99, 206, 160])
  .setDescription("This command doesn't exist, at least for you.\n\nYou see, this is a System command. System commands are very powerful commands.\n\nOf course, you're not ConJoined or muhammed51. Why bother using this command anyway?")
  .setFooter("Requested by: "..message.author.tag, message.author.displayAvatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addBlankField(true);
  }
  /* There we go */
  }
  message.author.send({embed});
​
  // Run the command
  cmd.run(client, message, args);
};
