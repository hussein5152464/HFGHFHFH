require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('534203414247112723')
        .setType('PLAYING')
        .setURL(`https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell`)
        .setDetails(`الشريف `)
        .setName(`ONWER EPIC`)
        .setState(`HUSSEIN`)
        .setParty({
            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`https://cdn.discordapp.com/attachments/1388210102749630685/1394576485179854878/1488727eca5c0b5a.jpg?ex=68775010&is=6875fe90&hm=7cc5ec242cf678ff45928e59381e9967426c521ecf17ef7cfed77c5520092fb1&`)
        .setAssetsLargeText(`ONLINE`)
        .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1388210102749630685/1394576485179854878/1488727eca5c0b5a.jpg?ex=68775010&is=6875fe90&hm=7cc5ec242cf678ff45928e59381e9967426c521ecf17ef7cfed77c5520092fb1&`)
        .setAssetsSmallText(`ONWER EPIC`)
        .addButton(`EPIC STORE`, `https://discord.gg/epc-s`)
        .addButton(`EPIC MODS`, `https://discord.gg/zmFptknw`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
