if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply('Hey you cannot use this command.')
        }
        const userWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        let warnTarget = message.guild.members.cache.get(userWarn.id)
        if (!userWarn) return message.channel.send("**Couldn't find that user**.")
        const reason = args.slice(1).join(" ");
        if (!reason) return message.reply(`Please type a reason.`);
        let kEmbed = new Discord.MessageEmbed()
            .setColor(Color)
            .setTitle(`${warnTarget.user.tag} was warned!`)
            .setDescription(`**${warnTarget.user.tag} Warned by **${message.author.username}.\n**reason:** ${reason}`)
        message.channel.send({ embed: kEmbed })
  }
}
