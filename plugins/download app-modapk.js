import { search, download } from  'aptoide-scraper' 
let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case  'modapk' : case  'apkmod' : case  'aptoide' :
if (!text) throw `*[❗] اكتب الملومات بشكل صحيح*`    
let searchA = await search(text)
if (searchA.length < 1) return await  conn.sendMessage(m.chat, { text:'  *[❗] لا توجد نتائج*'  }, { quoted: m } )
var srh = [];  
for (var i = 0; i < searchA.length; i++) {
srh.push({ title: searchA[i].name, description: ''  , rowId: prefix +  'sift'   + searchA[i].id });}
const sections = [{title:  'اختر الهاك' , rows: srh}]
const listMessage = {text: `┌───[ᴍᴏᴅᴀᴘᴋ ʙʏ midoria bot]\n│\n│- 📟 االنتائج الخاصة :${text}\n│\n└─────────────────◉`, footer: wm, title: null, buttonText: "اختر𝐈", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case  'sift' : case  'aptoidedl' :
if (!text) throw `*[❗] متال للرابط: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await download(text)
if ( data5.size.replace(  'MB'  , ''  ) > 200) return await conn.sendMessage(m.chat, { text: ' *[ ⛔ ] لا يمكن تحميل هذا التطبيق بسبب الحجم*'  }, { quoted: m } )
if ( data5.size.includes( 'GB' )) return await conn.sendMessage(m.chat, { text: ' *[ ⛔ ] لا يمكن تحميل هذا التطبيق بسبب الحجم ' }, { quoted: m } )
await conn.sendMessage(m.chat, { document: { url: data5.dllink }, mimetype:  'application/vnd.android.package-archive' , fileName: data5.name +  '.apk' , caption: null }, { quoted: m })   
break    
}} catch {
throw `*[❗] خطا 𝙾 خطا*`
}}    
handler.command = /^(apkmoad|modaapk|dapk2|sift|aptoidedl)$/i
export default handler




/*let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case  modapk : case  apkmod :
if (!text) throw `*[❗] خطا*`        
const data2 = await fetchJson( https://api.akuari.my.id/search/searchmod2?query=  + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text:  *[❗] لا توجد نتائج*  }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description:   , rowId: prefix +  dapk2   + data[i].link });}
const sections = [{title:  ختار الهاك , rows: srh}]
const listMessage = {text: `┌───[ᴍᴏᴅᴀᴘᴋ ʙʏ ᴍʏsᴛɪᴄʙᴏᴛ]\n│\n│- 📟 النتائج ديال: ${text}\n│\n└─────────────────◉`, footer: wm, title: null, buttonText: "الخيارات", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case  dapk2 : 
if (!text) throw `*[❗] اكتب الرابط بشكل صحيح: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson( https://api.akuari.my.id/downloader/dlmod2?link=  + text)
if ( data5.respon.size.replace(  MB  ,   ) > 200) return await conn.sendMessage(m.chat, { text:  *[ ⛔ ] الله اكبر الارشيف كبير الحجم*  }, { quoted: m } )
if ( data5.respon.size.includes( GB )) return await conn.sendMessage(m.chat, { text:  *[ ⛔ ] الله اكبر الارشيف كبير الحجم*  }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype:  application/vnd.android.package-archive , fileName: data5.respon.title +  .apk , caption: null }, { quoted: m })   
break        
}
} catch {
throw `*[❗]كتب ولا ختار داكشي *`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method:  GET , url: url, headers: { User-Agent :  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 }, ...options })
return res.data
} catch (err) {
return err
}}*/
