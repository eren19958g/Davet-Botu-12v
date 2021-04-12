const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  let premium2 = await db.fetch(`pre_${message.guild.id}`)
  let pre
  if(!premium2){
    pre = "Hayır!"
  }else{
    pre = "Evet!"
  }
  const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField(`Versiyon`, `0.2`, true)
    .addField(`Aktiflik Süresi`, duration, true)
    .addField(`Sunucular`, bot.guilds.cache.size.toLocaleString(), true)
    .addField(`Kullanıcılar`, bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(`Ping`, bot.ws.ping + "ms", true)
    .addField(
      `Ram Kullanımı`,
      `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
      true
    )
    .addField(`Bu Sunucu Premium Mu?`, pre, false)
    .addField(`Destek Sunucusu`, `https://discord.gg/YM59Mv8G59`, false)
    .addField(`Botu Ekleyin`, `https://discord.gg/YM59Mv8G59`, false)//https://discord.gg/YM59Mv8G59
  .addField(`Bota Oy Verin`, `https://discord.gg/YM59Mv8G59`, false)
    .setFooter(bot.user.username, bot.user.avatarURL());
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
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
