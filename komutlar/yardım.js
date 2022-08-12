const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.addField(`:white_check_mark: Niverys Gif Bot :white_check_mark:`,
 `Niverys GIF BOT             
-**man-gif** Rastgele Erkek Gifi Atar!
-**woman-gif** Rastgele Kadın Gifi Atar!
-**couple-gif** Rastgele Sevgili Gifi Atar!
-**baby-gif** Rastgele Bebek Gifi Atar!
-**animal-gif** Rastgele Hayvan Gifi Atar!

:white_check_mark: **Ekstra** :white_check_mark:

-**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!


[Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/XmYvS7yqRs)    
[Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=998896894761783306&scope=bot&permissions=27648860190)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '!･Rubn#1943',
  usage: 'yardım'
};