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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349029720029";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_47_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZVcVVEQjF3eGhsUGE1cUdveG8wNmJIdUVhQTN6TEd5d0xJcmIwVzZZZEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyOTcyMDAyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FENjRDNTI1RjZDQUM4QUZBMkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjcxNjQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklkM1VDWDV0VGd5TnRoaGRkN2JXeUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmRhNzc1MTgtNDUyZS00NDA2LWFlZTEtMTY0MzU3NGUxMDU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE4NSxcbiAgICAgIDE1OSxcbiAgICAgIDQzLFxuICAgICAgOTMsXG4gICAgICAxMzgsXG4gICAgICAzLFxuICAgICAgMjUzLFxuICAgICAgMTgxLFxuICAgICAgMTY1LFxuICAgICAgMjUyLFxuICAgICAgMjE5LFxuICAgICAgMjM2LFxuICAgICAgMTMyLFxuICAgICAgNTgsXG4gICAgICA4NCxcbiAgICAgIDMyLFxuICAgICAgMTQ2LFxuICAgICAgOTQsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNDksXG4gICAgICAxMTgsXG4gICAgICAxNjgsXG4gICAgICAxOCxcbiAgICAgIDcxLFxuICAgICAgNDgsXG4gICAgICAyMDYsXG4gICAgICAyMzQsXG4gICAgICAxNjgsXG4gICAgICAyMTQsXG4gICAgICAxMjksXG4gICAgICAzOSxcbiAgICAgIDUsXG4gICAgICAzOSxcbiAgICAgIDExMyxcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgMTY0LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0oxOFhDVEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjk3MjAwMjk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngUHNoc2cTc2hzZxHzaHNnOqnglwiLFxuICAgIFwibGlkXCI6IFwiMTQzMDYxNDAxMjQ3ODU5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJEd3Y0RkVKaVBuN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyVTg0OGgzUHplTFNBdkQ5WjBWRFpFMTVydWhlVmxqZG80eWpSQWNSK0RZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhXYllhQlAvaC92NC9NUlRWTU53cXVEaUhuQ1V1dGc0d0RQTHRVc25PeFZyeGIzTVcyVm5PQ0YyY1JkUDBtRTZKc3pIZmRPaVFURTE1ZENUUERaRWpnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdWcHhrbTdkbWoveHB0djBEbm9rOEJRa0swZXVKMDlSUE5pcXBvanlvc3RwNzVsaG1yb1lKTkhZOEdOdG9CNkZzSVNmcFMzL0hEZGVXWXFxWlpCTWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjk3MjAwMjk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjcxNjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSm43XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKbjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSa3VNWnZVQXZDdFA0TVBmeTJtZkU3R0l6RjY3Y2drVGJQRjYvTzNwdmlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDc1MDg0MjIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAzOTQ5NjI0MVwifSIKfQ=="  // PUT your SESSION_ID 


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
