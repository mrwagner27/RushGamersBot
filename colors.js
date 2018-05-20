const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	const colorroles = ["Red", "Orange", "Yellow", "Green", "DarkGreen", "LightBlue", "DarkBlue", "Pink", "Violet", "Purple", "White", "Black"];
	let embed = new Discord.RichEmbed()
		.setTitle("Name Colors")
		.setDescription(colorroles.map(m => m).join("\n"))
		.setFooter(`Ran by ${message.author.tag}`)
		.setColor("BLUE");
	message.channel.send(embed).catch(function() {});
}
module.exports.help = {
	name: "colors"
}