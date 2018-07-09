module.exports.run = async (bot, message, args) => {
	message.reply(`Pong! \`${bot.pings[0]}ms\``)
}
module.exports.help = {
	name: "ping"
}
.
