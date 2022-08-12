const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM')
.addField(`:white_check_mark: Kullanıcı Komutları :white_check_mark:`,
`Niverys GIF BOT 
-**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
-**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
-**ping** Botun Pingini Gösterir!
-**istatistik** Botun İstatistiğini Gösterir!

[Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/XmYvS7yqRs)    
[Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=998896894761783306&scope=bot&permissions=27648860190)`)
    
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: '!･Rubn#1943',
  usage: 'kullanıcı'
};