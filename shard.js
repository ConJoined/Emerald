/*
    The following code goes into it's own file, and you run this file
    instead of your main bot file.
*/
​
const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./source/sourcefile.js');
Manager.spawn(12); // This example will spawn 12 shards (30,000 guilds);
