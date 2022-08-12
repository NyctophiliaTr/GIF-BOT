const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/1003448099869573201/1005965798361272391/8B14CD18-717D-4FD9-B3B3-9284678FBF95.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1005966758588469248/744CABB2-C6DD-4B12-8CC4-8949135753B1.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1005966760870162573/568C2481-BB1E-48B5-92B2-E88B45546053.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1006229071673430016/10023D54-9D7D-46AF-9A1C-A00418A9A65E.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1006289824677904384/v.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1006289824891818025/1005781827132325889.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1006289825151848558/Media_220712_155011.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743422626136137/taki_babygif49.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743421040709723/taki_babygif45.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743377721921647/taerragif.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743157550329937/image0-25.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743148276723742/image0-6-1.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743122699845713/image0-2.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743092752527470/giphy-downsized-large.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742921352282244/f5401ef448874f30a7e65625c8f5c4ee_1.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742947411513455/Funny_PP_Gif_164.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742987253207120/Gif_PP_37.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742993674666146/Gif_PP_173.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743047068168322/hawli.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003743092752527470/giphy-downsized-large.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742834052050984/Baby_5.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742703240101888/AB96FD4B-5DCB-4C1C-92AD-A66E239F4C74.gif","https://cdn.discordapp.com/attachments/1003448099869573201/1003742661322231830/a_e965cc8affbe1944c4b1036384d1942c.gif",];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Baby Gif ;")
    
.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-baby','baby-gif','gifbaby','babygif'],

  permLevel: 0

};

exports.help = {

  name: 'baby',

  description: '!･Rubn#1943',

  usage: 'baby'

};