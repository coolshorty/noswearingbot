const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'ODEwMjE3NDEyMzYzNTUwNzIx.YCgbxA.Z3FqK2IbjifuCz6IdvThFdaUuV0';
var inappWords = ["ass","bitch","crap","dick","fuck","nigger","penis","piss","porn","sex","shit","xxx","hoe","shit","asshole"];

bot.on('message', function(message){
    const textMessage = message.content;
    if(message.content == "tn!info")
    {
        message.channel.send("**Bot created by ELginas#1014**");
    }
    if(message.content.includes("Thot Nullifier"))
    {
        if(message.author != "Thot Nullifier™#2922")
        {
            message.channel.send("Don't say my name!");
        }
    }
    for(var i = 0; i < inappWords.length; i++)
    {
        if((message.content.toLowerCase()).includes(inappWords[i]))
        {
            message.delete();
            message.channel.send("**"+message.author+" JUST SWORE**")
            message.author.send("", {files: ["https://cdn.discordapp.com/attachments/483635952502177792/486220964070293504/6bb.jpg"]});
            break;
        }
    }

});

bot.on('ready', function(){
    console.log('bot');
});

bot.login(TOKEN);
