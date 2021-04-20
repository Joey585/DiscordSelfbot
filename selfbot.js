const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({disableEveryone: true})
const { prefix, token } = require('./config.json');
const { weatherAPI } = require('./config.json')

client.once('ready', () => {
	console.log('Ready!');
    console.log('Logged in as ' + client.user.tag)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    if (!args) return



    if (command === 'say') {
        if (message.content === '*say') {
            return message.reply('You need to specify what I need to say!')
        }
        if (args[0] === '*say') {
            return message.channel.send('You cannot do that.')
        }
        message.channel.send(args.join(' '))
    }
    
    if (command === 'help') {
        const helpEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Help Section')
        .setDescription(`This is the help section for the self bot of ${client.user.tag}`)
        .addField(`${prefix}help`, 'Sends the help section')
        .addField(`${prefix}say`, `Makes the selfbot say anything any person wants! Turn it off with ${prefix}say off`)
        .addField('More', 'Commands coming soon!')
        .setFooter('Coded by Joey585')
        message.channel.send(helpEmbed)
    }
});


client.login(token);