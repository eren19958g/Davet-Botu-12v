const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["https://discord.gg/YM59Mv8G59", "Versiyon v0.2"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  client.user.setStatus("online");

  /*client.user.setActivity("https://discord.gg/YM59Mv8G59", { type: "WATCHING" });*/
};
