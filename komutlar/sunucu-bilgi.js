const Discord = require('discord.js');

exports.run = (client, message) => {

let sunucu = new Discord.MessageEmbed()

.setThumbnail(message.guild.iconURL)

.setColor("RANDOM")

.setTitle("\n\nSunucu İstatistik")

.addField('Sunucu İd :', message.guild.id)
.addField('Sunucu Sahibi :', message.guild.owner, true)
.addField('Üye Sayısı :', message.guild.memberCount)

return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["sunucu-bilgi","sb","s-b"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
name: 'sunucubilgi',
description: '!･Rubn#1943',
usage: 'sunucubilgi'
};