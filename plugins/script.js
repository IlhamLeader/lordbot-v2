let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*Riyo Botz Menggunakan Script*
github.com/AmmarBN/lordbot-aq-tes
_*Jangan Lupa Follow Sama Kasi Star Ya kak*_

`.trim(), m)
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(script)$/i
handler.owner = false
handler.mods = false
handler.premium = falsehttps://github.com/AmmarBN/lordbot-v2
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
