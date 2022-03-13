let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082119800783]
│ • Telkomsel [082129353366]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281223918622
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
