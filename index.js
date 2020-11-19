const Discord = require('discord.js');
const { MessageChannel } = require('worker_threads');
const client = new Discord.Client();
const prefix = '%';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  let args = msg.content.substring(prefix.length).split(" ");
  switch(args[0]){
    case 'help':
    const embed = new Discord.MessageEmbed()
    .setColor('#A52A2A')
    .setTitle('Commands')
    .setDescription('Here are some commands.')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
  
  msg.channel.send(embed);
  break;
  }
})


client.on('message', msg => {
  if (msg.content === 'activate shart') {
    msg.channel.send('shart now online');
  }
});



client.on('message', msg => {
    if (msg.content === 'hello') {
      msg.reply('i sharted');
    }
  });
client.login(process.env.token);