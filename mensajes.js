// commands/mensaje.js
const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mensaje")
        .setDescription("Envía un mensaje en un canal")
        .addChannelOption(option =>
            option.setName("canal")
                .setDescription("Canal donde enviar el mensaje")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("contenido")
                .setDescription("Contenido del mensaje")
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const canal = interaction.options.getChannel("canal");
        const contenido = interaction.options.getString("contenido");

        await canal.send(contenido);
        await interaction.reply({ content: `📢 Mensaje enviado en ${canal}`, ephemeral: true });
    }
};