// commands/ticket.js
const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Crea un ticket de soporte"),
    async execute(interaction) {
        const guild = interaction.guild;
        const user = interaction.user;

        // Crear canal privado
        const canal = await guild.channels.create({
            name: `ticket-${user.username}`,
            type: 0, // Texto
            permissionOverwrites: [
                {
                    id: guild.roles.everyone.id,
                    deny: ["ViewChannel"]
                },
                {
                    id: user.id,
                    allow: ["ViewChannel", "SendMessages"]
                },
                {
                    id: interaction.client.user.id,
                    allow: ["ViewChannel", "SendMessages"]
                }
            ]
        });

        await canal.send(`🎟️ Hola ${user}, describe tu problema y un staff te atenderá.`);
        await interaction.reply({ content: `✅ Ticket creado: ${canal}`, ephemeral: true });
    }
};