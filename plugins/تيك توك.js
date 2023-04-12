/* Creditos a FG de Dylux-fg (Bot) */

import fg from 'api-dylux' 
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `*التحميل من منصة تيك توك*\n\n*—◉ مثال:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*التحميل من منصة تيك توك*\n\n*—◉ مثال:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*☺❀ @${m.sender.split`@`[0]} المرجو الانتظار سوف يصلك الفيديو الذي طلبته بعد قليل \n لاتنسى متابعتي في الانستغرام\n instagram.com/noureddine_ouafy *`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: ' ʙᴏᴛ ʙʏ ɴᴏᴜʀᴇᴅᴅɪɴᴇ ᴏᴜᴀꜰʏ', body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/noureddine_ouafy' }, mentionedJid: [m.sender]}}}, aa)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let p = await fg.tiktok(args[0]) 
let buttons = [{ buttonText: { displayText: '♫ تحميله على شكل موسيقى ♫' }, buttonId: `${usedPrefix}tomp3` }]
let te = `*صاحب الفيديو:* ${p.author || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te, footer: wm, buttons }, { quoted: m })  
} catch {  	
try { 
let aa2 = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ʙᴏᴛ ʙʏ ɴᴏᴜʀᴇᴅᴅɪɴᴇ ᴏᴜᴀꜰʏ', body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/noureddine_ouafy' }, mentionedJid: [m.sender]}}}, aa2)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap, footer: wm, buttons }, { quoted: m })  
} catch {
throw `*هناك خطأ راسل صاحب البوت ليحل المشكلة* \n instagram.com/noureddine_ouafy`
}}}  
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler