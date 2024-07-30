const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_12_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ2RDkyV2h2dXRiRXpqN003SEpLZTQrVzNYYzM0U1ZaQkc2QzZZTlJGbG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFmYWxyRnJuUlJXeHk1Slo2ZEoyTUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE2NTI4NGItNzVjNy00MTUxLTgyOGUtNmI3ZWZlYTA2NThlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTg4LFxuICAgICAgMyxcbiAgICAgIDE2NCxcbiAgICAgIDEyMyxcbiAgICAgIDExNyxcbiAgICAgIDksXG4gICAgICAyMDIsXG4gICAgICA3OSxcbiAgICAgIDkwLFxuICAgICAgMTI1LFxuICAgICAgNTMsXG4gICAgICA5NCxcbiAgICAgIDgyLFxuICAgICAgMTE2LFxuICAgICAgMTIwLFxuICAgICAgODcsXG4gICAgICAxMzcsXG4gICAgICAyNDYsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDIyMCxcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgNTEsXG4gICAgICA2MSxcbiAgICAgIDg2LFxuICAgICAgOSxcbiAgICAgIDI0NyxcbiAgICAgIDE1NyxcbiAgICAgIDExLFxuICAgICAgMjQ1LFxuICAgICAgNDIsXG4gICAgICAxMjcsXG4gICAgICAzNSxcbiAgICAgIDIzNixcbiAgICAgIDI1MSxcbiAgICAgIDEyNCxcbiAgICAgIDI0NixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI1Mk1ZUTFNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIxMzI1NjE0OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDE5OTE3Njk4MDkxNTA6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW15N3U0Q0VJM1RuN1VHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrUCtWbzIxRVowcW5LQWRjbklyR3dEUWhHSXJNdWxqRlgzdUZhUEJXcm5NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV3bmZPZjIwK0F0Z0hTVEtydHhicEUwbDRHam1uMnZsSWYwQkZyK0t5YzVTZWI1ZitnUVhMaGExTU8zYnVDMlJONWx0RzZaeDU1MmRWZnkwbE5zdERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9BVFR0YXFRa0RZSklITkRubWlFTk4rMlZQeHkwcUJZTVdxdEdkcFdobm9RZmxLZHpkMGJSWUxqNzZyN0VBd25HMlJXbjVpUFJkRllKaS80ZGQyckR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjEzMjU2MTQ6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODAzMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPSmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9KYS5qc29uIjogIntcImtleURhdGFcIjpcInR1WExwYVNwYVFmTW8vRUMySGZ6d1NzaGVBUUw2dTJFUmdIYlVSMnNYaWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY5MzY2MzQ1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
