import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'هذا الامر خاص بتحميل للفيديوات '
await m.reply( 'جاري تحميل الفيذيو المرجو الانتظار قليلا رجاء في حالة لم يقم البوت بتحميل الفيديو الخاص بك  اعلم ان الفيديو طويل او ان حجمه كبير  ويمكنك مراسلة نورالدين للمزيد من المعلومات instagram.com/noureddine_ouafy')
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, '*[❀] 𝙴𝚁𝚁𝙾𝚁*', m)}
}}
handler.command = /^fgmp3|dlmp3|miki|getaud|yt(a|mp3)$/i
export default handler
