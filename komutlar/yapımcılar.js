const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField(`Yapımcı`, `! 👑K҉R҉A҉L҉1҉9҉9҉9👑#2623`)
.setFooter(client.user.username, client.user.avatarURL())

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "yapımcılar",
  description: "yapımcılar",
  usage: "yapımcılar"
};
