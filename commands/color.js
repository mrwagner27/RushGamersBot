module.exports.run = async (bot, message, args) => {
const colorroles = ["Red", "Orange", "Yellow", "Green", "DarkGreen", "LightBlue", "DarkBlue", "Pink", "Violet", "Purple", "White", "Black"];
const colors = ["red", "orange", "yellow", "green", "darkgreen", "lightblue", "darkblue", "pink", "violet", "purple", "white", "black"];

function removeColorRoles(roles, user) {
	colorroles.forEach((color) => {
		if (user.roles.find("name", color)) {
			user.removeRole(roles.find("name", color)).catch(function() {});
		}
	});
}
		if(!args[0]) return message.reply("Please provide a name color!").catch(function() {});
		let color = args[0].toLowerCase();
		if(!colors.includes(color)) return message.reply("Not a valid name color!").catch(function() {});
		let index = colorroles.map(r => r.toLowerCase()).indexOf(color);
		let role = message.guild.roles.find("name", colorroles[index]);
		removeColorRoles(message.guild.roles, message.member);
		message.member.addRole(role).then(() => {
			message.reply(`Gave you the ${color} name color!`).catch(function() {});
		}).catch(() => {
			message.reply(`I could not give you the ${color} role. Please check my permissions and try again.`).catch(function() {});
		});
}
module.exports.help = {
	name: "color"
}
