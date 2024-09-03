//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2347061787462";
global.owner = process.env.OWNER_NUMBER || "2347061787462";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUk0Umt1bGlxZTZFVVRmc1Zya2tsUThpUXg5azIwOHFtTnNaVmtKUDlVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWp0RHpBU2xLeVZkaU02REZvRjNyeTZuMlk4Tk1GZmNwcVFNY2tuNU1YND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSExUQzVmRzdOQXpPVEZ2SC9wT3NvZFFiY2E1QzdmWkoyeTlkbTNrUUh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWkxPdERDV2JJZGVBWlMxSVNiMHlqa1JDV3BPdXYvcEx6YWRLRThrbTJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHeGluZWRvNW9GZ1Jxa0RxbXhKWEZUTTBKdThxSU5tYUEzdjNGTFUyM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLbkEyRkwxVHRxa0F1MEpjc3JQSXNyRm4vT1RCUmlPQTYvYVh2dlF6eWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElDQkVBYTRqNkRRSDh2S1ZZc1dXUVJoWDZtMFFnK2dIdmpyYkd0WVVHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVU1VnMzQy9JTTlRRVVqekVKall1MUJhOUs3R200QUlzalAxQ29KNUtnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNL0lxbnBobE9iNWtYSloxTVZ2U3VMWWZEOGNUYkpzRzFTS0lKbUdiMzhvQ1BvY2QvSlAzcnluSSt3eFVYbUdlTVdTcFp2bFZkN1NYNlA4OEdWY2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6ImdjOUQ2dGZ5d2NjbVVGRTFrcjdETHdER0d1YjgxODJPNVd5WERqTzdVZEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InU1THVUZ3F6Um9HRjJFLXdKdnFWU2ciLCJwaG9uZUlkIjoiNjk1MzA1Y2QtN2Q3MC00M2Y5LWIyMmItNDMyOGEwYjZjOTU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img2Y3lyMWk2dy9lSHI1blhYLy9ieTlRdGFJMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RXhrYmNFcWNUSEdhNHFPTDBXZnFENHc5WkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlkzSkIxWFEiLCJtZSI6eyJpZCI6IjIzNDcwNjE3ODc0NjI6NTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AyMzdNQUVFTHZ2MjdZR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjkrZFZ0dTJ0Vnc0NDNTZzdudHN3dk9yZkxRUkFtc0JKaUZ6SHhRdHcrVEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IncycEVOaG4xSUJuWjdWbmR2TnhkamRoQTJPL1BGT3VPNFBwYmIxUm9pL0E3LzFKU3ZDek9FckRENTZ3Mi9JbmxqOVhxTUlQTVkyS3NuVWxQVDBUbUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSWmpOT01UeUJrekJxb1owczFhS0N5NjkzS0lSR1VCN2Z6OWcyMEMrVG13SUJPNmVlTUZIMG83VHZQRFNYRDJhTFlFWDR6T1cwektQSWRYeFRoUHZqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNjE3ODc0NjI6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmZuVmJidHJWY09PTjBvTzU3Yk1MenEzeTBFUUpyQVNZaGN4OFVMY1BreSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM2NDE2OX0="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
