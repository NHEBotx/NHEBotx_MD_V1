/*
 ✅ 𝘽𝘼𝘾𝘼, 𝙁𝘼𝙃𝘼𝙈𝙄, 𝘿𝘼𝙉 𝙇𝘼𝙆𝙐𝙄𝙉
 - Mau lu jual atau ngga, Urusanmu. tanggung jawabmu pas di Akhirat nanti. udh dikasih dan lu dapet scnya gratis malah dijual (ga amanah)
 - ini makek base dari Yurin'S
 - Jangan ubah Tqto, tanpa mereka, sc ini ga akan pernah rilis & gabakalan kalian dapat
 ⚠️ 𝐈𝐧𝐠𝐚𝐭 𝐒𝐞𝐛𝐚𝐠𝐢𝐚𝐧, 𝐒𝐜 𝐀𝐤𝐮 𝐄𝐧𝐜, 𝐌𝐚𝐮 𝐲𝐚𝐧𝐠 𝐍𝐨 𝐄𝐍𝐂? 𝐆𝐚𝐛𝐮𝐧𝐠 𝐤𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 & 𝐆𝐫𝐨𝐮𝐩
 CHANNEL WA:
 https://whatsapp.com/channel/0029Vb2kT5pJ3jv5yIVMsx2q
 GROUP WA:
 https://chat.whatsapp.com/Bc0N1yYfNwI25RMDOrrwjg
       * 👑 ©NHE-NHEBotx - 2025
       https://github.com/NHEBotx
*/
//===================[ TEMPAT MODULE ]=====================\\
require("./config")
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@adiwajshing/baileys")
const fs = require('fs');
const path = require('path');
const c = '`'
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const simbol = ["⟁", "⌬", "⨉", "⦿", "▣", "◇", "◆", "⬢", "⧫", "✦", "✪", "■", "✹", "⚙", "☰", "⛶", "⟡", "⟐", "⭑", "⭘", "❖", "❯", "❯❯", "⟫", "⟩"];
let simbols = `${pickRandom(["⟁", "⌬", "⨉", "⦿", "▣", "◇", "◆", "⬢", "⧫", "✦", "✪", "■", "✹", "⚙", "☰", "⛶", "⟡", "⟐", "⭑", "⭘", "❖", "❯", "❯❯", "⟫", "⟩"])}`;
// Path ke file riwayat
const popularPath = './database/popular.json';
let popularData = {};
try {
  popularData = JSON.parse(fs.readFileSync(popularPath, 'utf8'));
} catch (error) {
  fs.writeFileSync(popularPath, JSON.stringify({}));
}

function savePopularData() {
  fs.writeFileSync(popularPath, JSON.stringify(popularData, null, 2));
}

function updatePopularCommand(command) {
  if(!popularData[command]) {
    popularData[command] = 1;
  } else {
    popularData[command]++;
  }
  savePopularData();
}

function resetPopularCommands() {
  popularData = {};
  savePopularData();
}
const riwayatPath = path.join(__dirname, 'database/riwayat.json');
// Load riwayat
let riwayat = JSON.parse(fs.readFileSync(riwayatPath, 'utf8'));
let pler = [];
try {
  pler = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8'));
} catch (error) {
  console.error('Error reading or parsing idgrup.json:', error);
}
const {
  pinterest,
  pinterest2,
  wallpaper,
  wikimedia,
  quotesAnime,
  multiDownload,
  yanzGpt,
  happymod,
  umma,
  ringtone,
  jadwalsholat,
  styletext,
  tiktokDl,
  facebookDl,
  instaStory,
  bk9Ai,
  ytMp4,
  ytMp3,
  mediafireDl,
  quotedLyo,
  simi
} = require('./lib/screaper')
const {
  githubstalk,
  npmstalk
} = require('./lib/scp/scraper');
const {
  TelegraPh,
  UguuSe
} = require('./lib/uploader');
const {
  CatBox,
  fileIO,
  pomfCDN
} = require('./lib/scp/uploader');
let botSettings = {
  autotyping: true,
  autovn: false
};
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require('./lib/exif');
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const lyrics = require('./lib/scp/lyrics');
const {
  toAudio,
  toPTT,
  toVideo
} = require('./lib/converter');
const {
  tiktokSearchVideo,
  tiktokDownloaderVideo
} = require('./lib/scp/tiktok');
const GDrive = require('./lib/scp/drive');
const remini = require('./lib/scp/remini');
const translate = require('translate-google-api');
const os = require('os');
const axios = require('axios')
const {
  performance
} = require('perf_hooks');
const speed = require('performance-now');
const qs = require('qs');
const util = require('util')
const ffmpeg = require('fluent-ffmpeg');
const FileType = require('file-type');
const {
  exec,
  execSync
} = require("child_process")
const chalk = require('chalk')
const {
  youtube
} = require("btch-downloader")
const moment = require('moment-timezone');
const yts = require('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
global.public = true; // Default: public

// Default prompt
let aiPrompt = "Kamu adalah asisten AI dari dunia ghibli"; // Default prompt
let prompt = "Kamu adalah NheBotxAi, asisten AI dari dunia Ghibli. Pembuatmu adalah NHEBotx. Kamu dirancang untuk membantu pengguna dengan memberikan jawaban terbaik.";
let conversationHistory = {};
let autoAiStatus = false;
const getContacts = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/NHEBotx/HelloUserNHEBotx/refs/heads/main/realown.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const addCmd = (id, command) => {
  // Konversi hash ke Base64
  const base64Hash = Buffer.from(id).toString('base64');
  const obj = {
    id: base64Hash,
    chats: command
  }; // Simpan dengan Base64
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand, null, 2)); // Simpan ke database
};
// Fungsi Mendapatkan Posisi Command
const getCommandPosition = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      position = i;
    }
  });
  return position;
};
// Fungsi Mendapatkan Command Berdasarkan Hash
const getCmd = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      position = i;
    }
  });
  if(position !== null) {
    return _scommand[position].chats;
  }
};
// Fungsi Mengecek Apakah Command Ada
const checkSCommand = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      status = true;
    }
  });
  return status;
};
// Fungsi Format Monospace
function monospace(string) {
  return '```' + string + '```';
}
module.exports = nhbtx = async (nhbtx, m, msg, chatUpdate, store) => {
	try {
		const {
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
    const content = JSON.stringify(m.message);
    const type = m.message ? Object.keys(m.message)[0] : null;
    let _chats = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : type == "buttonsResponseMessage" && m.message[type].selectedButtonId ? m.message[type].selectedButtonId : type == "stickerMessage" && getCmd(m.message[type].fileSha256.toString("base64")) !== null && getCmd(m.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(m.message[type].fileSha256.toString("base64")) : "";
    const cmd = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
    const from = m.key.remoteJid
    var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
    //==================[ TEMPAT CONST LIB ]=====================\\
    const {
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom
    } = require('./lib/myfunc')
    const {
      addResponList,
      delResponList,
      isAlreadyResponList,
      isAlreadyResponListGroup,
      sendResponList,
      updateResponList,
      getDataResponList
    } = require('./lib/respon-list');
    const {
      isSetProses,
      addSetProses,
      removeSetProses,
      changeSetProses,
      getTextSetProses
    } = require('./lib/setproses');
    const {
      isSetDone,
      addSetDone,
      removeSetDone,
      changeSetDone,
      getTextSetDone
    } = require('./lib/setdone');
    //===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
    const budy = (typeof m.text === 'string') ? m.text : '';
    const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><™©®Δ^βα~¦|/\\©^]/;
    const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const text = q = args.join(" ")
    const isGroup = m && m.isGroup ? m.isGroup : false;
    const sender = m.key.fromMe ? (nhbtx.user.id.split(':')[0] + '@s.whatsapp.net' || nhbtx.user.id) : (m.key.participant || m.key.remoteJid)
    const botNumber = await nhbtx.decodeJid(nhbtx.user.id)
    const senderNumber = sender.split('@')[0]
    const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const pushname = m.pushName || `${senderNumber}`
    const isBot = botNumber.includes(senderNumber)
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const Vip = JSON.parse(fs.readFileSync('./database/premium.json'))
    const owner = JSON.parse(fs.readFileSync('./owner.json'))
    const isOwner = owner.includes(senderNumber) || isBot
    const isVip = prem.includes(sender)
    const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const groupMetadata = m.isGroup ? await nhbtx.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const qmsg = (quoted.msg || quoted)
    //
    //=================[ TEMPAT FUNCTION DATABASE ]====================\\
    let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
    let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
    let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
    let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
    //function waitrespon pin
    async function waitForResponse(sender) {
      return new Promise((resolve, reject) => {
        const listener = (msg) => {
          if(msg.sender === sender) {
            nhbtx.removeListener('message', listener); // Remove listener after getting response
            resolve(msg.body); // Resolve the promise with the user's response
          }
        };
        nhbtx.on('message', listener);
        // Set a timeout for the user to respond
        setTimeout(() => {
          nhbtx.removeListener('message', listener); // Clean up listener if no response
          reject('Timeout: No response received.');
        }, 30000); // 30 seconds timeout
      });
    }
    //
    let list = []
    for(let i of owner) {
      list.push({
        displayName: await nhbtx.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await nhbtx.getName(i + '@s.whatsapp.net')}\n
FN:${await nhbtx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: manahanmanatahan@gmail.com
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@ghstmod/\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
      })
    }
    //===================[ FUNCTION STORE]=====================\\
    // Helper functions
    async function emote(emo) {
      nhbtx.sendMessage(m.chat, {
        react: {
          text: emo,
          key: m.key
        }
      });
    }
    async function sendButton(chat, judul, teks, button, m) {
      let msg = generateWAMessageFromContent(chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: saluranName,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: nhbtx.decodeJid(nhbtx.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonImage(chat, judul, teks, buffer, button, m) {
      const uploadFile = {
        upload: nhbtx.waUploadToServer
      };
      const imageMessage = await prepareWAMessageMedia({
        image: buffer,
      }, uploadFile, );
      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: saluranName,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: nhbtx.decodeJid(nhbtx.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                imageMessage: imageMessage.imageMessage,
                hasMediaAttachment: true
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonVideo(chat, judul, teks, buffer, button, m) {
      const uploadFile = {
        upload: nhbtx.waUploadToServer
      };
      const videoMessage = await prepareWAMessageMedia({
        video: buffer,
      }, uploadFile, );
      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: saluranName,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: nhbtx.decodeJid(nhbtx.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                videoMessage: videoMessage.videoMessage,
                hasMediaAttachment: true
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonDocument(chat, judul, teks, thumb, button, m) {
      let msg = generateWAMessageFromContent(chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: saluranName,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: nhbtx.decodeJid(nhbtx.user.id)
                },
                externalAdReply: {
                  title: ucapanWaktu,
                  body: pushname,
                  thumbnailUrl: thumbUrl,
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                thumbnailUrl: thumbUrl,
                subtitle: namaowner,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia({
                  document: thumb,
                  mimetype: 'image/png',
                  fileLength: 10000000000,
                  jpegThumbnail: thumb,
                  fileName: saluranName
                }, {
                  upload: nhbtx.waUploadToServer
                }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    };
    async function createUser(username, email, password) {
      const response = await fetch(global.pterodactylkey.domain + "api/application/users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + global.pterodactylkey.apikey
        },
        body: JSON.stringify({
          email,
          username,
          first_name: username,
          last_name: username,
          language: "en",
          password
        })
      });
      return await response.json();
    }
    nhbtx.sendImageAsStickers = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
      let buffer
      if(options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
      } else {
        buffer = await imageToWebp(buff)
      }
      await nhbtx.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      }).then(response => {
        fs.unlinkSync(buffer)
        return response
      })
    }
    async function createServer(username, memo, disk, cpu, userId, description) {
      const response = await fetch(global.pterodactylkey.domain + "api/application/servers", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + global.pterodactylkey.apikey,
        },
        body: JSON.stringify({
          name: `${username} Server`,
          description,
          user: userId,
          egg: parseInt(pterodactylkey.eggs),
          docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
          startup: "npm start",
          limits: {
            memory: memo === "Unlimited" ? 0 : memo,
            swap: 0,
            disk: disk === "Unlimited" ? 0 : disk,
            io: 500,
            cpu
          }
        })
      });
      return await response.json();
    }

    function findRiwayat(idtrx) {
      // Baca file riwayat.json
      const riwayatPath = './database/riwayat.json';
      const riwayat = JSON.parse(fs.readFileSync(riwayatPath));
      // Cari transaksi dengan ID TRX yang cocok dan status "pending"
      const transaction = Object.values(riwayat).find(t => t.idtrx === idtrx && t.status === "pending");
      return transaction;
    }
    const idkcl = (length) => {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const idgede = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const idnum = (length) => {
      let result = '';
      const characters = '1234567890';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const thum = fs.readFileSync("./storage/image.png")
    const thumb = fs.readFileSync("./storage/image.png")
    const imqris = fs.readFileSync('./storage/qris.png')

    function toRupiah(angka) {
      var saldo = "";
      var angkarev = angka.toString().split("").reverse().join("");
      for(var i = 0; i < angkarev.length; i++)
        if(i % 3 == 0) saldo += angkarev.substr(i, 3) + ".";
      return ("" + saldo.split("", saldo.length - 1).reverse().join(""));
    }
    let member = JSON.parse(fs.readFileSync("./database/user.json"));
    const cek = (satu, dua) => {
      let store = false;
      Object.keys(member).forEach((i) => {
        if(member[i].id == dua) {
          store = i;
        }
      });
      if(store !== false) {
        if(satu == "id") {
          return member[store].id;
        }
        if(satu == "saldo") {
          return member[store].saldo;
        }
        if(satu == "transaksi") {
          return member[store].transaksi;
        }
        if(satu == "idproduk") {
          return member[store].idproduk;
        }
        if(satu == "idtujuan") {
          return member[store].idtujuan;
        }
        if(satu == "nama") {
          return member[store].nama;
        }
        if(satu == "harga") {
          return member[store].harga;
        }
        if(satu == "seri") {
          return member[store].seri;
        }
      }
      if(store == false) {
        return null;
      }
    };
    let sett = (satu, dua, tiga) => {
      Object.keys(member).forEach((i) => {
        if(member[i].id == dua) {
          if(satu == "+saldo") {
            member[i].saldo += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "-saldo") {
            member[i].saldo -= tiga;
            if(satu == "±seri") {
              db_user[i].seri = tiga;
              fs.writeFileSync("./database/user.json", JSON.stringify(member));
            }
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "transaksi") {
            member[i].transaksi = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "idproduk") {
            member[i].idproduk = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "idtujuan") {
            member[i].idtujuan = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "nama") {
            member[i].nama = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "+harga") {
            member[i].harga += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "harga") {
            member[i].harga = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
        }
      });
    };
    const saldo = toRupiah(`${cek("saldo", m.sender)}`);
    //
    if(m.message) {
      console.log(chalk.black.bgCyan(' [ NOTIF ] '), // Teks singkat dengan simbol kilat
        chalk.black.bgYellow(` ⏰ ${new Date().toLocaleTimeString()} `), // Simbol jam dan waktu
        chalk.white.bgMagenta(` 💬 ${budy || m.mtype} `), // Simbol pesan
        '\n' + chalk.green('👤 Dari: '), chalk.blue(pushname), // Nama pengirim dengan simbol orang
        chalk.redBright(`📧 ${m.sender}`), // ID pengirim dengan simbol email
        '\n' + chalk.green('📍 Chat: '), chalk.yellow(m.isGroup ? '👥 Grup' : '🔒 Privat') // Grup dengan simbol grup, privat dengan simbol gembok
      );
    }

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await nhbtx.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

			for (let i = 0; i < lod.length; i++) {
				await nhbtx.sendMessage(m.chat, { text: lod[i], edit: key });
			}
		}
    //==================[ FUNCTION FITUR ]=====================\\
    const ftoko = {
      key: {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `Hai👋🏻.\nBOT BY\nNHEBotx`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "1000000000000",
            retailerId: `NHENotStore`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const script = {
      key: {
        fromMe: false,
        participant: `6288989971490 @s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `Hai👋🏻${pushname},BUY YA`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "10000000",
            retailerId: `NHEID`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const sound = {
      key: {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(from ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      "message": {
        "audioMessage": {
          "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
          "mimetype": "audio/mp4",
          "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
          "fileLength": "1067401",
          "seconds": 9999999999999,
          "ptt": true,
          "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
          "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
          "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
          "mediaKeyTimestamp": "1684161893"
        }
      }
    }
    try {
      ppuser = await nhbtx.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)
    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = global.limitawal.free
      let user = global.db.data.users[m.sender]
      if(typeof user !== 'object') global.db.data.users[m.sender] = {}
      if(user) {
        if(!isNumber(user.afkTime)) user.afkTime = -1
        if(!('afkReason' in user)) user.afkReason = ''
        if(!isNumber(user.limit)) user.limit = limitUser
      } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
      }
    } catch (err) {
      console.log(err)
    }
    // respon list 
    if(m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
      var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
      if(get_data_respon.isImage === false) {
        nhbtx.sendMessage(m.chat, {
          text: sendResponList(m.chat, body.toLowerCase(), db_respon_list)
        }, {
          quoted: m
        })
      } else {
        nhbtx.sendMessage(m.chat, {
          image: await getBuffer(get_data_respon.image_url),
          caption: get_data_respon.response
        }, {
          quoted: m
        })
      }
    }
    const reSize = async (buffer, ukur1, ukur2) => {
      return new Promise(async (resolve, reject) => {
        let jimp = require('jimp')
        var baper = await jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
        resolve(ab)
      })
    }
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
    const resize = async (image, width, height) => {
      const read = await jimp.read(image);
      const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
      return data;
    };
async function downloadMp4(link) {
  try {
    console.log('🕒 Memulai proses download MP4...');
    nhbtx.sendMessage(m.chat, {
      react: { text: '🕒', key: m.key }
    });

    // Fetch data dari API
    let response = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${link}`);
    let textResponse = await response.text();

    // Validasi apakah respons adalah JSON
    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (err) {
      console.error('❌ Respons bukan JSON:', textResponse);
      reply("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
      return;
    }

    console.log('📥 Respons diterima dari API:', data);

    if (data.status) {
      console.log('✅ Data valid, mengirim file video...');
      nhbtx.sendMessage(m.chat, {
        video: { url: data.data.dl },
        caption: ''
      }, { quoted: m });
      console.log('✅ Proses selesai, file video berhasil dikirim.');
    } else {
      console.log('❌ Gagal mengambil video. URL tidak valid.');
      reply("Gagal mengambil video. Silakan periksa URL.");
    }
  } catch (err) {
    console.error('❌ Terjadi kesalahan:', err.message);
    reply(`Error: ${err.message}`);
  }
}

async function downloadMp3(link) {
  try {
    console.log('🕒 Memulai proses download MP3...');
    nhbtx.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    // Panggil API untuk mendapatkan URL file
    let response = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${link}`);
    let textResponse = await response.text();

    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (err) {
      console.error('❌ Respons bukan JSON:', textResponse);
      reply("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
      return;
    }

    console.log('📥 Respons diterima dari API:', data);

    if (data.status && data.data.dl) {
      const fileUrl = data.data.dl;
      const fileName = 'audio.mp3';
      const fixedFileName = 'fixed_audio.mp3';
      const filePath = path.join(__dirname, fileName);
      const fixedFilePath = path.join(__dirname, fixedFileName);

      // Unduh file audio
      console.log('⏳ Mengunduh file audio...');
      const writer = fs.createWriteStream(filePath);
      const audioResponse = await axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream',
      });

      audioResponse.data.pipe(writer);

      writer.on('finish', () => {
        console.log('✅ File audio berhasil diunduh, memulai proses konversi...');

        // Proses ulang file audio menggunakan ffmpeg
        ffmpeg(filePath)
          .toFormat('mp3') // Konversi ulang ke format MP3
          .on('end', () => {
            console.log('✅ File audio berhasil dikonversi.');

            // Kirim file audio yang telah diperbaiki
            nhbtx.sendMessage(m.chat, {
              audio: fs.readFileSync(fixedFilePath),
              mimetype: 'audio/mpeg',
              fileName: 'audio_fixed.mp3', // Nama file baru
            }, { quoted: m });

            // Hapus file sementara
            fs.unlinkSync(filePath);
            fs.unlinkSync(fixedFilePath);
            console.log('✅ File audio berhasil dikirim dan file sementara dihapus.');
          })
          .on('error', (err) => {
            console.error('❌ Gagal mengonversi file audio:', err.message);
            reply('Gagal memproses ulang file audio.');
          })
          .save(fixedFilePath);
      });

      writer.on('error', (err) => {
        console.error('❌ Gagal mengunduh file audio:', err.message);
        reply('Gagal mengunduh file audio.');
      });

    } else {
      console.log('❌ Gagal mengambil audio. URL tidak valid.');
      reply("Gagal mengambil audio. Silakan periksa URL.");
    }
  } catch (err) {
    console.error('❌ Terjadi kesalahan:', err.message);
    reply(`Error: ${err.message}`);
  }
}
    if(!global.public) {
      if(!m.key.fromMe && !isOwner) return; // Abaikan jika bukan pesan bot atau owner
    }
    // func db
    // Load user database from JSON file
    function loadUserDatabase() {
      let rawdata = fs.readFileSync('database/user.json');
      return JSON.parse(rawdata);
    }
    // Save updated user database back to JSON file
    function saveUserDatabase(database) {
      fs.writeFileSync('database/user.json', JSON.stringify(database, null, 2));
    }
const userFirePath = './database/userFire.json';

// Baca database user fire
function loadUserFire() {
  if (!fs.existsSync(userFirePath)) {
    fs.writeFileSync(userFirePath, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(userFirePath));
}

// Simpan perubahan database user fire
function saveUserFire(db) {
  fs.writeFileSync(userFirePath, JSON.stringify(db, null, 2));
}

// Fungsi untuk mendapatkan thumbnail berdasarkan limit
function getFireThumbnail(limit) {
  const thumbnails = {
    1000: 'https://files.catbox.moe/s9oach.jpg',  // VIP/Premium
    100: 'https://files.catbox.moe/uw2kns.jpg',
    80: 'https://files.catbox.moe/fs4w47.jpg',
    60: 'https://files.catbox.moe/zi8v7c.jpg',
    40: 'https://files.catbox.moe/vzl15i.jpg',
    20: 'https://files.catbox.moe/qpmin2.jpg',
    10: 'https://files.catbox.moe/dejf4c.jpg',
    0: 'https://files.catbox.moe/minp55.jpg',          // Untuk limit habis
    '-1': 'https://files.catbox.moe/lo1m1s.jpg'    // Thumbnail khusus Owner
  };

  // Default thumbnail jika limit tidak sesuai
  const defaultThumbnail = 'https://files.catbox.moe/lo1m1s.jpg';

  if (limit === -1) return thumbnails['-1']; // Owner (unlimited)
  if (limit > 1000) return thumbnails[1000]; // Di atas 1000 (VIP)
  if (limit >= 101 && limit <= 1000) return thumbnails[1000];
  if (limit >= 81 && limit <= 100) return thumbnails[100];
  if (limit >= 61 && limit <= 80) return thumbnails[80];
  if (limit >= 41 && limit <= 60) return thumbnails[60];
  if (limit >= 21 && limit <= 40) return thumbnails[40];
  if (limit >= 11 && limit <= 20) return thumbnails[20];
  if (limit >= 1 && limit <= 10) return thumbnails[10];
  if (limit === 0) return thumbnails[0]; // Limit habis

  return defaultThumbnail; // Jika tidak masuk rentang, gunakan default
}
const firely = (m, teks) => {
  const db = loadUserFire();
  const sender = m.sender;

  // Cek sinkronisasi role premium
  if (prem.includes(sender.replace('@s.whatsapp.net', ''))) {
      db[sender] = {
          limit: 1000,
          role: 'vip'
      };
      saveUserFire(db);
  }

  // Jika user belum terdaftar
  if (!db[sender]) {
      const role = isOwner ? 'owner' : isVip ? 'vip' : 'user';
      db[sender] = {
          limit: role === 'owner' ? -1 : role === 'vip' ? 1000 : 100,
          role: role
      };
      saveUserFire(db);
  }

  const userLimit = db[sender].limit;

  if (db[sender].role !== 'owner') {
      if (userLimit <= 0) {
          firelos(m, '🔥 Limit Anda sudah habis!');
          return false;
      }

      db[sender].limit -= 1;
      saveUserFire(db);
  }

  const thumbnailUrl = getFireThumbnail(userLimit);
  nhbtx.sendMessage(m.chat, {
      text: teks + `\n🔥 Limit tersisa: ${db[sender].limit}`,
      contextInfo: {
          externalAdReply: {
              title: `🔥 Fire Limit`,
              body: `🔥 Your Fire Limits: ${userLimit}`,
              previewType: "PHOTO",
              thumbnailUrl: thumbnailUrl,
              sourceUrl: `https://wa.me/${botnum}`
          }
      }
  }, { quoted: m });

  return true;
};
const firelos = (m, teks) => {
  const db = loadUserFire();
  const sender = m.sender;

  const userLimit = db[sender]?.limit || 0; // Default 0 jika user tidak ada
  const thumbnailUrl = getFireThumbnail(userLimit);

  nhbtx.sendMessage(m.chat, {
    text: teks + `\n🔥 Anda tidak memiliki limit tersisa.`,
    contextInfo: {
      externalAdReply: {
        title: `🔥 Fire Limit`,
        body: `🔥 Your Fire Limits: ${userLimit}`,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailUrl,
        sourceUrl: `https://whatsapp.com/channel/0029Vb2kT5pJ3jv5yIVMsx2q`
      }
    }
  }, { quoted: m });
};
    //===================[ FUNCTION REPLY ]=====================\\
    const aifake = {
      key: {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        liveLocationMessage: {
          caption: `© NHEBotx`,
          jpegThumbnail: ""
        }
      },
    }
    const nhbtxmand = body.replace(prefix, '').trim().split(/ +/).shift().toUpperCase();

// Array emoji alam dan hewan yang baru
const emojis = ['⚡', '🌪️', '🌊', '🫧', '💧', '🪵', '🍄', '☘️', '🍃', '🪷', '💫', '✨', '🌟', '🔥', '🪨', '🪽', '⚓', '💎', '🚀', '🛸', '✈️', '🥕', '🍓', '🐙', '🦑', '🦞', '🐣', '🐓', '🐍', '🐊', '🐉', '🐱', '🌻', '🐦‍🔥', '🐬', '🍏', '⚽', '🪀', '🔮', '🧸', '🦉', '🐾', '🦪', '🎠', '🏕️'
];

// Memilih emoji secara acak
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Membuat teks dengan format yang diinginkan
const formattednhbtxmand = `${randomEmoji} ${nhbtxmand}`;

// Menyiapkan objek message untuk digunakan
const hw = {
  key: {
    participant: '18002428478@s.whatsapp.net',
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    liveLocationMessage: {
      caption: `${formattednhbtxmand}`,
      jpegThumbnail: ""
    }
  },
  quoted: sound
}
    const jq = {
      key: {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        liveLocationMessage: {
          caption: `Always Use Termux⚡`,
          jpegThumbnail: ""
        }
      },
      quoted: sound
    }
    // Pastikan autotyping atau autovn aktif berdasarkan pesan yang sedang diketik
    if(botSettings.autotyping && nhbtx.public) {
      await nhbtx.sendPresenceUpdate('composing', m.chat);
    }
    if(botSettings.autovn && nhbtx.public) {
      await nhbtx.sendPresenceUpdate('recording', m.chat);
    }
    // Lokasi file JSON di folder 'database'
    const thumbListFilePath = path.join(__dirname, 'database', 'thumbList.json');
    // Fungsi untuk membaca data thumbnail dari file JSON
    const readThumbList = () => {
      if(!fs.existsSync(thumbListFilePath)) {
        // Jika file tidak ada, buat file baru dengan array kosong
        fs.writeFileSync(thumbListFilePath, JSON.stringify([]));
        return [];
      }
      const data = fs.readFileSync(thumbListFilePath, 'utf-8');
      return JSON.parse(data);
    };
    // Fungsi untuk menulis data thumbnail ke file JSON
    const writeThumbList = (thumbList) => {
      fs.writeFileSync(thumbListFilePath, JSON.stringify(thumbList, null, 2));
    };
    // Fungsi untuk menambahkan thumbnail
    const addthumb = (nama, url) => {
      const thumbList = readThumbList();
      // Cek apakah nama sudah ada
      if(thumbList.find(thumb => thumb.name === nama)) {
        return 'Thumbnail dengan nama tersebut sudah ada.';
      }
      // Menambahkan thumbnail ke dalam daftar
      thumbList.push({
        name: nama,
        url: url
      });
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil ditambahkan.`;
    };
    // Fungsi untuk menghapus thumbnail berdasarkan nama
    const delthumb = (nama) => {
      const thumbList = readThumbList();
      const index = thumbList.findIndex(thumb => thumb.name === nama);
      if(index === -1) {
        return 'Thumbnail dengan nama tersebut tidak ditemukan.';
      }
      thumbList.splice(index, 1);
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil dihapus.`;
    };
    // Fungsi untuk menampilkan daftar thumbnail
    const listthumb = () => {
      const thumbList = readThumbList();
      if(thumbList.length === 0) {
        return 'Tidak ada thumbnail yang tersimpan.';
      }
      return thumbList.map(thumb => `Nama: ${thumb.name}, URL: ${thumb.url}`).join('\n');
    };
    // Fungsi untuk memilih thumbnail secara random dari daftar
    const getRandomThumb = () => {
      const thumbList = readThumbList();
      return thumbList[Math.floor(Math.random() * thumbList.length)]?.url || 'https://i.ibb.co.com/R61x9rw/file-FYm2-ZN29-Bfg-RBgbpw-Y2kio.webp';
    };
    const reply = (teks) => {
      nhbtx.sendMessage(from, {
        text: teks,
        contextInfo: {
        mentionedJid: [m.sender],
          "externalAdReply": {
            "title": `BOT BY NHEBotx`,
            "body": `© NHEBotx`,
            "previewType": "PHOTO",
            "thumbnailUrl": getRandomThumb(),
            "sourceUrl": wach
          }
        }
      }, {
        quoted: hw
      })
    }
    const reply2 = (teks) => {
      nhbtx.sendMessage(from, {
        text: teks
      }, {
        quoted: m
      })
    }
    //==================[ FUNCTION WAKTU ]======================\\
    let d = new Date(new Date() + 3600000);
    let locale = "id";
    let clock = d.toLocaleTimeString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const date = moment().tz("Asia/Jakarta").format("dddd, ll");
    const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");

    function getFormattedDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
    }
    const hariini = d.toLocaleDateString('id', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
      hours = (hours < 10) ? "0" + hours : hours
      minutes = (minutes < 10) ? "0" + minutes : minutes
      seconds = (seconds < 10) ? "0" + seconds : seconds
      return hours + " jam " + minutes + " menit " + seconds + " detik"
    }

    function msToDate(ms) {
      temp = ms
      days = Math.floor(ms / (24 * 60 * 60 * 1000));
      daysms = ms % (24 * 60 * 60 * 1000);
      hours = Math.floor((daysms) / (60 * 60 * 1000));
      hoursms = ms % (60 * 60 * 1000);
      minutes = Math.floor((hoursms) / (60 * 1000));
      minutesms = ms % (60 * 1000);
      sec = Math.floor((minutesms) / (1000));
      return days + " Hari " + hours + " Jam " + minutes + " Menit";
      // +minutes+":"+sec;
    }
    // Sayying time
    const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if(timee < "23:59:00") {
      var waktuucapan = 'Selamat Malam 🌃'
    }
    if(timee < "19:00:00") {
      var waktuucapan = 'Selamat Petang 🌆'
    }
    if(timee < "18:00:00") {
      var waktuucapan = 'Selamat Sore 🌅'
    }
    if(timee < "15:00:00") {
      var waktuucapan = 'Selamat Siang 🏙'
    }
    if(timee < "10:00:00") {
      var waktuucapan = 'Selamat Pagi 🌄'
    }
    if(timee < "05:00:00") {
      var waktuucapan = 'Selamat Subuh 🌉'
    }
    if(timee < "03:00:00") {
      var waktuucapan = 'Tengah Malam 🌌'
    }
    //==================[ FUNCTION RESPON SALAH ]======================\\
    /*if (prefix && command) {
    let caseNames = getCaseNames();
    function getCaseNames() {
    const fs = require('fs');
    try {
    const data = fs.readFileSync('case.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);
    if (matches) {
    const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    return caseNames;
    } else {
    return [];
    } } catch (err) {
    console.log('Terjadi kesalahan:', err);
    return [];
    }}
    let noPrefix = command
    let mean = didyoumean(noPrefix, caseNames);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);
    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
    let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
    m.reply(response)
    }}*/
    //=================[ TEMPAT CASE DI BAWAH INI ]=================\\
    switch(command) {
      case 'populer':
        // Pisahkan data populer menjadi command dan AI
        let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai') // Eksklusi AI
          .sort((a, b) => b[1] - a[1]) // Urutkan berdasarkan jumlah penggunaan
          .slice(0, 4) // Ambil 4 teratas
          .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`); // Format per elemen
        // Format untuk command menjadi dua kolom
        let formattedCommandList = commands.length ? commands.reduce((rows, current, index) => {
            if(index % 2 === 0) {
              rows.push([current]); // Tambah elemen baru
            } else {
              rows[rows.length - 1].push(current); // Tambah ke baris terakhir
            }
            return rows;
          }, []).map(row => row.join(` ${c}|${c} `)) // Gabungkan elemen dalam satu baris dengan " || "
          .join('\n') // Gabungkan semua baris dengan newline
          : 'Belum ada data command populer.';
        // Tambahkan pesan untuk AI (jika diperlukan)
        let aiMessage = popularData.ai ? `${c}AI telah digunakan sebanyak ${popularData.ai} kali.${c}` : `${c}AI belum digunakan.${c}`;
        // Gabungkan hasil akhir
        let formattedPopularList = `${formattedCommandList}\n\n${aiMessage}`;
        // Gunakan formattedPopularList di balasan
        reply(`Statistik penggunaan:\n\n${formattedPopularList}`);
        break
      case 'githubstalk': {
        updatePopularCommand(command); // Mencatat command
        if(!text) return m.reply(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} NHEBotx`);
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          const userInfo = await githubstalk(text);
          console.log(userInfo);
          reply(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
        } catch (err) {
          console.error(err);
          m.reply(`❌ Ada masalah waktu ambil data GitHub, Bro! Coba lagi nanti ya 🥺`);
        }
      }
      break
      case 'npmstalk': {
        updatePopularCommand(command); // Mencatat command
        if(!text) return m.reply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          // First, check if the package exists
          const npmInfo = await npmstalk(text);
          if(!npmInfo) {
            return m.reply(`❌ Package ${text} tidak ditemukan di NPM.`);
          }
          reply(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
        } catch (err) {
          console.error(err);
          if(err.response && err.response.status === 404) {
            m.reply(`❌ Package ${text} tidak ditemukan di NPM.`);
          } else {
            m.reply(`❌ Ada masalah waktu ambil data dari NPM, Bro! Coba lagi nanti ya 🥺`);
          }
        }
      }
      break
      case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
updatePopularCommand(command); // Mencatat command
				if (!text) return reply(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return reply('Link nggak valid')
				if (!(await firely(m, '⏳ Sedang memproses...'))) return; // Jika limit habis, proses berhenti di sini
				try {
					const res = await GDrive(text);
					if (res.error) return reply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					nhbtx.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			break
      case 'resetpop':
        if(!isOwner) return reply(mess.owners)
        resetPopularCommands(); // Reset data
        reply('Data fitur populer telah direset.');
        break
      case "script": {
        updatePopularCommand(command);
        const sc = `SC KAMI JUAL 70.000\nKETIK OWNER UNTUK MEMBELI`;
        nhbtx.sendMessage(from, {
          text: sc,
          contextInfo: {
            "externalAdReply": {
              "title": `HALO ${pushname}`,
              "body": `${waktuucapan}`,
              "previewType": "PHOTO",
              "thumbnailUrl": `https://i.ibb.co.com/R61x9rw/file-FYm2-ZN29-Bfg-RBgbpw-Y2kio.webp`,
              "sourceUrl": `https://whatsapp.com/channel/0029Vb2kT5pJ3jv5yIVMsx2q`
            }
          }
        }, {
          quoted: script
        });
      }
      break
      case 'nhbtxum':
      case 'menu': {
    updatePopularCommand(command); // Mencatat command
    const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅", "⭐"];
    // Mengirimkan reaksi secara berurutan
    for (const emoji of reactEmojis) {
        await nhbtx.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        });
    }

    // Ambil database limit dari `cekfire`
    const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? 'Unlimited ♾️' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1

    // Ambil top 4 command populer
    let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai')
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
    let formattedCommandList = commands.length
        ? commands.reduce((rows, current, index) => {
            if (index % 2 === 0) {
                rows.push([current]);
            } else {
                rows[rows.length - 1].push(current);
            }
            return rows;
        }, []).map(row => row.join(` ${c}|${c} `))
        .join('\n')
        : 'Belum ada data command populer.';

    let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}null${c}`;
    const statusUser = isOwner ? '👑 Owner NHE' : `🔑 Role: ${role}`;

    // Format menu dengan limit
    const nhbtxmenu = `┌─━【👾 SYSTEM LOGS 👾】━─┐  
      *ACCESS GRANTED*  
       WELCOME, OPERATOR  
└─━【👾 SYSTEM ACTIVE 👾】━─┘  

💻 *TERMINAL STATUS*  
> *User*       : @${m.sender.split('@')[0]}  
> *Connection* : Secure 🔒  
> *Authority*  : AUTHORIZED ✅  

━━━━━━━━━━━━━━━━━━━━━━━━━━  
🌐 *BOT CONFIGURATION*  
┌ *Bot Name*   : ${namabot}  
├ *Admin*      : ${namaowner}  
├ *Uptime*     : ${runtime(os.uptime())}  
├ *User Status*: ${statusUser}  
├ *Limit*      : ${limitDisplay}  
└ *Mode*       : ${nhbtx.public ? 'Public 👥' : 'Self 👤'}  

📡 *CORE SYSTEM*  
└ _Baileys x NheBotx_  

━━━━━━━━━━━━━━━━━━━━━━━━━━  
⚙️ *AI MONITORING*  
> Detected Activity: ${aiMessage}  

━━━━━━━━━━━━━━━━━━━━━━━━━━  
💀 *COMMAND INTERFACE*  
┌ TOP COMMANDS  
${formattedCommandList}  
└ END OF COMMANDS  

━━━━━━━━━━━━━━━━━━━━━━━━━━  
📜 *MENU SELECTION*  
> Select an option below:  

✔️ [${c}SUPPORTED${c}]  
✔️ [${prefix}tqto]  
✔️ [${prefix}realown]  

━━━━━━━━━━━━━━━━━━━━━━━━━━  
⚠️ *WARNING*  
Unauthorized access will trigger countermeasures.  
System tracking enabled.  

> *READY FOR NEXT INPUT.*
`;
        await reply('Menampilkan menu nhbtx')
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: nhbtxmenu
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: fs.readFileSync('./NheBotxMedia/image/owner.jpg')
                  }, {
                    upload: nhbtx.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{
      "title": "Click Here ⎙",
      "sections": [
        {
          "title": "Select Menu",
          "highlight_label": "NHE Botz🍄",
          "rows": [
            {
              "title": "🔍 ALL MENU",
              "description": "Menampilkan semua menu",
              "id": "${prefix}allmenu"
            },
            {
              "title": "⬇️ DOWNLOAD MENU",
              "description": "Menu untuk mendownload dan mencari",
              "id": "${prefix}downloadmenu"
            },
            {
              "title": "📚 OTHER MENU",
              "description": "Other menu",
              "id": "${prefix}othermenu"
            },
            {
              "title": "🔥 OWNER MENU",
              "description": "Hanya © Author yang boleh menggunakan command ini",
              "id": "${prefix}ownermenu"
            },
            {
              "title": "🔮 AI MENU",
              "description": "Menu Artificial intelligence free",
              "id": "${prefix}aimenu"
            },
            {
              "title": "🎤 AUDIO MENU",
              "description": "Menu untuk merubah audio",
              "id": "${prefix}audiomenu"
            },
            {
              "title": "🔄 CONVERT MENU",
              "description": "Menu untuk converter",
              "id": "${prefix}convertmenu"
            },
            {
              "title": "🫧 GROUP MENU",
              "description": "Menu tentang group",
              "id": "${prefix}groupmenu"
            }
          ]
        }
      ]
    }`
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{
      "display_text": "© Author",
      "url": "https://wa.me/${nomerOwner}"
    }`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: idsaluran,
                    newsletterName:  `${namaBot} ${randomEmoji}`,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'downloadmenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const ytmenu = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


*${c}DOWNLOAD MENU${c}*

${simbols} ${prefix}ytmp3 <link>
${simbols} ${prefix}ytmp4 <link>
${simbols} ${prefix}song <q>
${simbols} ${prefix}ytsearch <q>
${simbols} ${prefix}tiktok <link>
${simbols} ${prefix}tiktoksearch <q>
${simbols} ${prefix}ttmp3 <link>
${simbols} ${prefix}spotify <q>
${simbols} ${prefix}spotifydl <link>
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: ytmenu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'convertmenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const convertmenu = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


*${c}CONVERT MENU${c}*

${simbols} ${prefix}sticker
${simbols} ${prefix}toimg
${simbols} ${prefix}tourl
${simbols} ${prefix}img2ibb
${simbols} ${prefix}tomp3
${simbols} ${prefix}toaudio
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: convertmenu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'addowner': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return reply(mess.owners);
        if(!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
        bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
        let ceknye = await nhbtx.onWhatsApp(bnnd);
        if(ceknye.length == 0) return reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
        owner.push(bnnd);
        fs.writeFileSync('./owner.json', JSON.stringify(owner));
        reply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
      }
      break
      case 'delowner': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return reply(mess.owners);
        if(!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
        ya = q.split("|")[0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
        reply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
      }
      break
      case 'listowner': {
updatePopularCommand(command); // Mencatat command
        let teks = '┌──⭓「 *List Owner* 」\n│\n';
        for(let x of owner) {
          teks += `│⭔ ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
        reply(teks);
      }
      break
      case 'aimenu': {
updatePopularCommand(command);
await emote(randomEmoji);
const menuai = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


*${c}AI MENU${c}*

${simbols} ${prefix}metaai
${simbols} ${prefix}llama
${simbols} ${prefix}setpromt2
${simbols} ${prefix}nous
${simbols} ${prefix}claudeai
${simbols} ${prefix}dbrxai
${simbols} ${prefix}deepseek
${simbols} ${prefix}dreamshaper
${simbols} ${prefix}img2text
${simbols} ${prefix}venice
${simbols} ${prefix}latukam
${simbols} ${prefix}qwq
${simbols} ${prefix}stabilityai
${simbols} ${prefix}stable
${simbols} ${prefix}flux
${simbols} ${prefix}gandalf
${simbols} ${prefix}gemini
`
nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: menuai,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'audiomenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const audiomenuu = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


*${c}AUDIO MENU${c}*

${simbols} ${prefix}bass
${simbols} ${prefix}blown
${simbols} ${prefix}deep
${simbols} ${prefix}earrape
${simbols} ${prefix}slow
${simbols} ${prefix}fast
${simbols} ${prefix}robot
${simbols} ${prefix}smooth
${simbols} ${prefix}nightcore
${simbols} ${prefix}reverse
${simbols} ${prefix}fat
${simbols} ${prefix}squirrel
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: audiomenuu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'groupmenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const groupmenu = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


╭───❑ 👾 ${c} GROUP MENU ${c} 👾 
│  
├${simbols} ${prefix}grup > Mengatur grup
├${simbols} ${prefix}getgcid > Mendapatkan ID grup
├${simbols} ${prefix}creategc > Membuat grup baru
├${simbols} ${prefix}closetime > Menutup grup sementara
├${simbols} ${prefix}hidetag > Mention anggota secara tersembunyi
├${simbols} ${prefix}opentime > Membuka grup
├${simbols} ${prefix}contacttag > Tag kontak tertentu
├${simbols} ${prefix}kudeta > Mengambil alih grup
├${simbols} ${prefix}sendcontact > Mengirim kontak
├${simbols} ${prefix}setdesc > Mengubah deskripsi grup
├${simbols} ${prefix}setnamegc > Mengganti nama grup
├${simbols} ${prefix}delppgc > Menghapus foto profil grup
├${simbols} ${prefix}setppgc > Mengubah foto profil grup
├${simbols} ${prefix}getcontact > Mendapatkan info kontak
│  
╰──────────────────╯
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: groupmenu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'ownermenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const ownermenu = `Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan, Semoga harimu Menyenangkan ya, dan apa yang dibutuhkan hari ini?'} 👋🏻


╭─❑ 👾 ${c} OWNER MENU ${c} 👾 ❑─╮
│
├${simbols} ${prefix}restart > Restart bot
├${simbols} ${prefix}mode > Ubah mode bot
├${simbols} ${prefix}addcase > Tambah kasus
├${simbols} ${prefix}delcase > Hapus kasus
├${simbols} ${prefix}addowner > Tambah owner
├${simbols} ${prefix}sendsc > Kirim source code
├${simbols} ${prefix}delowner > Hapus owner
├${simbols} ${prefix}sendclear > Kirim log clear
├${simbols} ${prefix}addprem > Tambah premium
├${simbols} ${prefix}listprem > Daftar pengguna premium
├${simbols} ${prefix}delprem > Hapus premium
├${simbols} ${prefix}setbiobot > Ubah bio bot
├${simbols} ${prefix}delppbot > Hapus foto profil bot
├${simbols} ${prefix}setppbot > Ubah foto profil bot
├${simbols} ${prefix}listfireuser > Daftar pengguna fire
├${simbols} ${prefix}cekfire > Cek status fire
├${simbols} ${prefix}upfire > Tambah fire
├${simbols} ${prefix}delfire > Hapus fire
├${simbols} ${prefix}listowner > Daftar owner
├${simbols} ${prefix}getcase > Ambil detail kasus
├${simbols} ${prefix}addthumb > Tambah thumbnail
├${simbols} ${prefix}listthumb > Daftar thumbnail
├${simbols} ${prefix}delthumb > Hapus thumbnail <name>
├${simbols} ${prefix}upswtext > Upload teks status
├${simbols} ${prefix}upswimg > Upload gambar status
├${simbols} ${prefix}upswvid > Upload video status
├${simbols} ${prefix}upswaudio > Upload audio status
├${simbols} ${prefix}settings > Pengaturan bot
├${simbols} ${prefix}delsession > Hapus sesi bot
├${simbols} ${prefix}pushcontact > Kirim teks push
├${simbols} ${prefix}pushkontak2 > Kirim teks push 
├${simbols} ${prefix}resetpop > Reset popularitas
├${simbols} ${prefix}setcmd > Tambah perintah
├${simbols} ${prefix}delcmd  > Hapus perintah
├${simbols} ${prefix}nhbtxai > AI NheBotX
├${simbols} ${prefix}listcmd > Daftar perintah
│
╰─────────────────────────────╯
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: ownermenu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'othermenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        const othermenu = `╔══✪〘 🌐 *Halo ${m.pushName ? m.pushName : 'Pengguna NHEBOTX yang Selalu aku rindukan'}!* 🌐 〙✪══╗  
║  
║ 🔹 *Semoga harimu menyenangkan!*  
║ 🔹 *Apa yang dibutuhkan hari ini?*  
║  
╚══════✪〘 👾 ${c} OTHER MENU ${c} 👾 〙✪══════╝  
╔═══════════════════════════╗  
║${simbols} ${prefix}popular       ┃ Lihat popularitas bot  
║${simbols} ${prefix}script        ┃ Unduh script bot  
║${simbols} ${prefix}totalfitur    ┃ Total fitur bot  
║${simbols} ${prefix}readviewonce  ┃ Baca pesan sekali lihat  
║${simbols} ${prefix}brat <txt>    ┃ Respon teks otomatis  
║${simbols} ${prefix}delete        ┃ Hapus pesan  
║${simbols} ${prefix}remini        ┃ Perbaiki gambar buram  
║${simbols} ${prefix}faktaunik     ┃ Fakta menarik harian  
║${simbols} ${prefix}mitos         ┃ Jelajahi mitos menarik  
║${simbols} ${prefix}suit          ┃ Bermain suit seru  
║${simbols} ${prefix}cecanindo     ┃ Cecan Indonesia  
║${simbols} ${prefix}cecanchina    ┃ Cecan China  
║${simbols} ${prefix}cecankorea    ┃ Cecan Korea  
║${simbols} ${prefix}cecanthai     ┃ Cecan Thailand  
║${simbols} ${prefix}cecanviet     ┃ Cecan Vietnam  
║${simbols} ${prefix}cecanjapan    ┃ Cecan Jepang  
║${simbols} ${prefix}cats          ┃ Foto kucing lucu  
║${simbols} ${prefix}bluearchive   ┃ Gambar Blue Archive  
║${simbols} ${prefix}neko          ┃ Karakter neko  
║${simbols} ${prefix}waifu         ┃ Pilih waifu favorit  
║${simbols} ${prefix}owner         ┃ Info tentang owner bot  
║${simbols} ${prefix}about         ┃ Info lengkap bot  
╚═══════════════════════════╝
    `;
        nhbtx.sendMessage(m.chat, {
          image: tmn,
          caption: othermenu,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'allmenu': {
        updatePopularCommand(command);
        await emote(randomEmoji);
        // Ambil top 4 command populer
        // Pisahkan data populer menjadi command dan AI
        let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai') // Eksklusi AI
          .sort((a, b) => b[1] - a[1]) // Urutkan berdasarkan jumlah penggunaan
          .slice(0, 4) // Ambil 4 teratas
          .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`); // Format per elemen
        // Format untuk command menjadi dua kolom
        let formattedCommandList = commands.length ? commands.reduce((rows, current, index) => {
            if(index % 2 === 0) {
              rows.push([current]); // Tambah elemen baru
            } else {
              rows[rows.length - 1].push(current); // Tambah ke baris terakhir
            }
            return rows;
          }, []).map(row => row.join(` ${c}|${c} `)) // Gabungkan elemen dalam satu baris dengan " || "
          .join('\n') // Gabungkan semua baris dengan newline
          : 'Belum ada data command populer.';
        // Tambahkan pesan untuk AI (jika diperlukan)
        let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}null${c}`;
        // Status pengguna
        const statusUser = isOwner ? '👑 Owner NHE' : '🪀 User';
        // Format menu
        const allmn = `╭━━━━━━━━━━━━━━━━━━━━━╮  
💬 *Hello @${m.sender.split('@')[0]}* 👋🏻  
╰━━━━━━━━━━━━━━━━━━━━━╯  

📊 *SYSTEM INFORMATION*  
╭───────────────────────╮  
├ ⭐ *Bot Name*: ${namabot}  
├ 👑 *Owner*: ${namaowner}  
├ ⏰ *Runtime*: ${runtime(os.uptime())}  
├ 🔖 *Status*: ${statusUser}  
├ 📚 *Library*: _Baileys x NheBotx_  
├ 📍 *Mode*: ${nhbtx.public ? 'public👥' : 'self👤'}  
╰───────────────────────╯  

💧 *AI ACTIVITY*  
╭───────────────────────╮  
├ 🔵 *AI Hits*: ${aiMessage}  
╰───────────────────────╯  

⚡ *TOP COMMANDS*  
╭───────────────────────╮  
${formattedCommandList.split('\n').map((cmd, idx) => `├ ${idx + 1}. ${cmd}`).join('\n')}  
╰───────────────────────╯   

📌 *Tips:*  
Gunakan perintah dengan bijak untuk pengalaman terbaik! 😊  
━━━━━━━━━━━━━━━━━━━━━━━━━

---

╔═════ ⭑ *${c}📋 LIST ALL MENU 📋${c}* ⭑ ═════╗  
║  
║ ✨ Nikmati pengalaman luar biasa dengan fitur lengkap yang kami tawarkan!  
║  
╚══════════════════════════════════╝  

╔═══✦ *📥 DOWNLOAD MENU 📥* ✦═══╗  
║  
║ 💾 *Nikmati berbagai opsi untuk mengunduh konten dari platform populer!*  
║ Gunakan perintah berikut:  
║  
╠➤ ${simbols} ${prefix}ytmp3 <link>       ┃ *Unduh audio dari YouTube (MP3)*  
╠➤ ${simbols} ${prefix}ytmp4 <link>       ┃ *Unduh video dari YouTube (MP4)*  
╠➤ ${simbols} ${prefix}song <q>           ┃ *Cari & unduh lagu berdasarkan judul*  
╠➤ ${simbols} ${prefix}ytsearch <q>       ┃ *Cari video di YouTube*  
╠➤ ${simbols} ${prefix}tiktok <link>      ┃ *Unduh video dari TikTok*  
╠➤ ${simbols} ${prefix}tiktoksearch <q>   ┃ *Cari video TikTok berdasarkan kata kunci*  
╠➤ ${simbols} ${prefix}ttmp3 <link>       ┃ *Konversi video TikTok ke MP3*  
╠➤ ${simbols} ${prefix}spotify <q>        ┃ *Cari lagu di Spotify*  
╠➤ ${simbols} ${prefix}spotifydl <link>   ┃ *Unduh lagu dari Spotify*  
║  
╚══════════════════════════════════╝

---

╔═════ ⭑ *_🎶 AUDIO MENU 🎶_* ⭑ ═════╗  
║  
║ 🎧 *Atur audio sesuai keinginanmu dengan efek berikut:*  
║  
╠➤ ${simbols} ${prefix}bass         ┃ *Tingkatkan bass audio.*  
╠➤ ${simbols} ${prefix}blown        ┃ *Efek suara blown.*  
╠➤ ${simbols} ${prefix}deep         ┃ *Suara dalam.*  
╠➤ ${simbols} ${prefix}earrape      ┃ *Efek suara yang sangat keras.*  
╠➤ ${simbols} ${prefix}slow         ┃ *Perlambat audio.*  
╠➤ ${simbols} ${prefix}fast         ┃ *Percepat audio.*  
╠➤ ${simbols} ${prefix}robot        ┃ *Suara robot.*  
╠➤ ${simbols} ${prefix}smooth       ┃ *Efek suara halus.*  
╠➤ ${simbols} ${prefix}nightcore    ┃ *Efek suara malam.*  
╠➤ ${simbols} ${prefix}reverse      ┃ *Putar audio secara terbalik.*  
╠➤ ${simbols} ${prefix}fat          ┃ *Efek suara tebal.*  
╠➤ ${simbols} ${prefix}squirrel     ┃ *Efek suara unik.*  
║  
╚══════════════════════════════════╝

---

╔═════ ⭑ *_🤖 AI MENU 🤖_* ⭑ ═════╗  
║  
║ 🤖 *Manfaatkan kecerdasan buatan dengan perintah berikut:*  
║  
╠➤ ${simbols} ${prefix}metaai        ┃ *Akses AI metadata.*  
╠➤ ${simbols} ${prefix}llama         ┃ *Interaksi dengan model AI Llama.*  
╠➤ ${simbols} ${prefix}setpromt2     ┃ *Atur prompt AI ke mode 2.*  
╠➤ ${simbols} ${prefix}nous          ┃ *Gunakan AI Nous.*  
╠➤ ${simbols} ${prefix}claudeai      ┃ *Interaksi dengan Claude AI.*  
╠➤ ${simbols} ${prefix}dbrxai        ┃ *Akses DBRX AI.*  
╠➤ ${simbols} ${prefix}deepseek      ┃ *Mencari informasi mendalam.*  
╠➤ ${simbols} ${prefix}dreamshaper   ┃ *Bentuk mimpi menggunakan AI.*  
╠➤ ${simbols} ${prefix}img2text      ┃ *Konversi gambar menjadi teks.*  
╠➤ ${simbols} ${prefix}venice        ┃ *Gunakan model AI Venice.*  
╠➤ ${simbols} ${prefix}latukam       ┃ *Model AI Latukam.*  
╠➤ ${simbols} ${prefix}qwq           ┃ *Akses AI QWQ.*  
╠➤ ${simbols} ${prefix}stabilityai   ┃ *Gunakan AI Stabilitas.*  
╠➤ ${simbols} ${prefix}stable        ┃ *Model AI Stable.*  
╠➤ ${simbols} ${prefix}flux          ┃ *Akses model AI Flux.*  
╠➤ ${simbols} ${prefix}gandalf       ┃ *Interaksi dengan AI Gandalf.*  
╠➤ ${simbols} ${prefix}gemini        ┃ *Gunakan model AI Gemini.*  
║  
╚══════════════════════════════════╝

---

╔═════ ⭑ *_👥 GROUP MENU 👥_* ⭑ ═════╗  
║  
║ 👥 *Kelola grup dengan fitur-fitur berikut:*  
║  
╠➤ ${simbols} ${prefix}grup           ┃ *Buat grup baru.*  
╠➤ ${simbols} ${prefix}getgcid        ┃ *Dapatkan ID grup.*  
╠➤ ${simbols} ${prefix}creategc       ┃ *Buat grup chat baru.*  
╠➤ ${simbols} ${prefix}closetime      ┃ *Tutup grup pada waktu tertentu.*  
╠➤ ${simbols} ${prefix}hidetag        ┃ *Sembunyikan tag di grup.*  
╠➤ ${simbols} ${prefix}opentime       ┃ *Buka grup pada waktu tertentu.*  
╠➤ ${simbols} ${prefix}kudeta         ┃ *Fitur kudeta grup.*  
╠➤ ${simbols} ${prefix}setdesc        ┃ *Atur deskripsi grup.*  
╠➤ ${simbols} ${prefix}setnamegc      ┃ *Ubah nama grup.*  
╠➤ ${simbols} ${prefix}delppgc        ┃ *Hapus foto profil grup.*  
╠➤ ${simbols} ${prefix}setppgc        ┃ *Atur foto profil grup.*  
╠➤ ${simbols} ${prefix}contacttag     ┃ *Tag kontak dalam grup.*  
╠➤ ${simbols} ${prefix}sendcontact    ┃ *Kirim kontak ke grup.*  
╠➤ ${simbols} ${prefix}getcontact     ┃ *Dapatkan informasi kontak.*  
║  
╚══════════════════════════════════╝

---

╔═════ ⭑ *_👤 OWNER MENU 👤_* ⭑ ═════╗  
║  
║ 👤 *Perintah untuk pemilik bot:*  
║  
╠➤ ${simbols} ${prefix}restart         ┃ *Restart bot.*  
╠➤ ${simbols} ${prefix}mode            ┃ *Atur mode bot.*  
╠➤ ${simbols} ${prefix}addcase         ┃ *Tambahkan kasus baru.*  
╠➤ ${simbols} ${prefix}delcase         ┃ *Hapus kasus yang ada.*  
╠➤ ${simbols} ${prefix}addowner        ┃ *Tambahkan pemilik baru.*  
╠➤ ${simbols} ${prefix}sendsc          ┃ *Kirim screenshot.*  
╠➤ ${simbols} ${prefix}delowner        ┃ *Hapus pemilik dari daftar.*  
╠➤ ${simbols} ${prefix}sendclear       ┃ *Bersihkan pesan.*  
╠➤ ${simbols} ${prefix}addprem         ┃ *Tambahkan pengguna premium.*  
╠➤ ${simbols} ${prefix}listprem        ┃ *Tampilkan daftar pengguna premium.*  
╠➤ ${simbols} ${prefix}delprem         ┃ *Hapus pengguna dari premium.*  
╠➤ ${simbols} ${prefix}setbiobot       ┃ *Atur bio bot.*  
╠➤ ${simbols} ${prefix}delppbot        ┃ *Hapus foto profil bot.*  
╠➤ ${simbols} ${prefix}setppbot        ┃ *Atur foto profil bot.*  
╠➤ ${simbols} ${prefix}listfireuser    ┃ *Tampilkan daftar pengguna terlarang.*  
╠➤ ${simbols} ${prefix}cekfire         ┃ *Periksa status pengguna terlarang.*  
╠➤ ${simbols} ${prefix}upfire          ┃ *Tingkatkan status pengguna terlarang.*  
╠➤ ${simbols} ${prefix}delfire         ┃ *Hapus pengguna terlarang.*  
╠➤ ${simbols} ${prefix}listowner       ┃ *Tampilkan daftar pemilik.*  
╠➤ ${simbols} ${prefix}getcase         ┃ *Dapatkan detail kasus.*  
╠➤ ${simbols} ${prefix}addthumb <name>|<link> ┃ *Tambahkan thumbnail baru.*  
╠➤ ${simbols} ${prefix}listthumb       ┃ *Tampilkan daftar thumbnail.*  
╠➤ ${simbols} ${prefix}delthumb <name> ┃ *Hapus thumbnail berdasarkan nama.*  
╠➤ ${simbols} ${prefix}upswtext        ┃ *Unggah teks baru.*  
╠➤ ${simbols} ${prefix}upswimg         ┃ *Unggah gambar baru.*  
╠➤ ${simbols} ${prefix}upswvid         ┃ *Unggah video baru.*  
╠➤ ${simbols} ${prefix}upswaudio       ┃ *Unggah audio baru.*  
╠➤ ${simbols} ${prefix}settings        ┃ *Atur pengaturan bot.*  
╠➤ ${simbols} ${prefix}delsession      ┃ *Hapus sesi bot.*  
╠➤ ${simbols} ${prefix}pushcontact     ┃ *Kirim kontak ke pengguna.*  
╠➤ ${simbols} ${prefix}pushkontak2     ┃ *Kirim kontak ke pengguna lain.*  
╠➤ ${simbols} ${prefix}resetpop        ┃ *Reset popularitas pengguna.*  
╠➤ ${simbols} ${prefix}setcmd          ┃ *Atur perintah bot.*  
╠➤ ${simbols} ${prefix}delcmd          ┃ *Hapus perintah bot.*  
╠➤ ${simbols} ${prefix}nhbtxai         ┃ *Akses AI NHBT.*  
╠➤ ${simbols} ${prefix}listcmd         ┃ *Tampilkan daftar perintah.*  
║  
╚══════════════════════════════════╝

---

╔═════ ⭑ *_🌟 OTHER MENU 🌟_* ⭑ ═════╗  
║  
║ 🌟 *Fitur tambahan yang bisa kamu gunakan:*  
║  
╠➤ ${simbols} ${prefix}popular         ┃ *Tampilkan konten populer.*  
╠➤ ${simbols} ${prefix}script          ┃ *Akses skrip bot.*  
╠➤ ${simbols} ${prefix}totalfitur      ┃ *Tampilkan total fitur bot.*  
╠➤ ${simbols} ${prefix}readviewonce    ┃ *Baca pesan yang hanya bisa dibaca sekali.*  
╠➤ ${simbols} ${prefix}brat <txt>      ┃ *Kirim pesan dengan teks tertentu.*  
╠➤ ${simbols} ${prefix}delete          ┃ *Hapus pesan tertentu.*  
╠➤ ${simbols} ${prefix}remini          ┃ *Buat gambar mini.*  
╠➤ ${simbols} ${prefix}faktaunik       ┃ *Dapatkan fakta unik.*  
╠➤ ${simbols} ${prefix}mitos           ┃ *Dapatkan informasi tentang mitos.*  
╠➤ ${simbols} ${prefix}suit            ┃ *Mainkan suit.*  
╠➤ ${simbols} ${prefix}cecanindo       ┃ *Dapatkan gambar cewek Indo.*  
╠➤ ${simbols} ${prefix}cecanchina      ┃ *Dapatkan gambar cewek China.*  
╠➤ ${simbols} ${prefix}cecankorea      ┃ *Dapatkan gambar cewek Korea.*  
╠➤ ${simbols} ${prefix}cecanthai       ┃ *Dapatkan gambar cewek Thailand.*  
╠➤ ${simbols} ${prefix}cecanviet       ┃ *Dapatkan gambar cewek Vietnam.*  
╠➤ ${simbols} ${prefix}cecanjapan      ┃ *Dapatkan gambar cewek Jepang.*  
╠➤ ${simbols} ${prefix}cats            ┃ *Dapatkan gambar kucing.*  
╠➤ ${simbols} ${prefix}bluearchive     ┃ *Akses Blue Archive.*  
╠➤ ${simbols} ${prefix}neko            ┃ *Dapatkan gambar Neko.*  
╠➤ ${simbols} ${prefix}waifu           ┃ *Dapatkan gambar Waifu.*  
╠➤ ${simbols} ${prefix}owner           ┃ *Informasi tentang pemilik bot.*  
╠➤ ${simbols} ${prefix}about           ┃ *Info lebih lanjut tentang bot.*  
║  
╚══════════════════════════════════╝

---

Silakan gunakan perintah sesuai kebutuhanmu! Jika ada pertanyaan, jangan ragu untuk bertanya. 😊
`
let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: allmn
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: fs.readFileSync('./NheBotxMedia/image/tmenu.jpg')
                  }, {
                    upload: nhbtx.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{
                    "display_text":"ABOUT💧",
                    "id":"${prefix}about"}`
                  },{
                    "name": "cta_url",
                    "buttonParamsJson": `{
      "display_text": "© Author",
      "url": "https://wa.me/${nomerOwner}"
    }`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: idsaluran,
                    newsletterName: `${namaBot} ${randomEmoji}`,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {quoted: hw})
        await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'pushkontak2': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return reply(mess.owners);
        if(!isGroup) return reply(mess.groups);
        var name = text.split('/')[0];
        var chet = text.split('/')[1];
        if(!name) return reply(`Contoh: ${prefix + command} nama/pesan`);
        if(!chet) return reply(`Contoh: ${prefix + command} nama/pesan`);
        let kontak = {
          displayName: "Contact",
          contacts: [{
            displayName: name,
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }]
        }
        let push = await nhbtx.groupMetadata(m.chat)
        if(push.participants.length > 300) return reply('Batas member maksimal: *300*')
        await reply('bentar');
        for(let a of push.participants) {
          const repf = await nhbtx.sendMessage(a.id, {
            contacts: kontak
          })
          nhbtx.sendMessage(a.id, {
            text: chet
          }, {
            quoted: repf
          })
          await sleep(1000);
        }
        await reply(mess.dones);
      }
      break
      case 'totalfitur': {
updatePopularCommand(command); // Mencatat command
        const total = ((fs.readFileSync('./case.js').toString()).match(/case '/g) || []).length
        reply(`Total Fitur : ${total}`);
      }
      break
      case 'addprem':
case 'addpremium':
case 'setpremium': {
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return reply(mess.owners);
    if (!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
    
    const bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    const ceknye = await nhbtx.onWhatsApp(bnnd);
    if (ceknye.length == 0) return reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
    if (prem.includes(bnnd)) return reply('Nomor ini sudah terdaftar sebagai Premium User!');

    prem.push(bnnd);
    fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));

    // Update role di userFire.json
    const dbFire = loadUserFire();
    const userJid = bnnd + '@s.whatsapp.net';
    dbFire[userJid] = {
        limit: 1000,
        role: 'vip'
    };
    saveUserFire(dbFire);

    reply(`Nomor ${bnnd} sekarang menjadi Premium User (VIP)!!! 🎉`);
}
break;
      case 'delprem':
case 'deletepremium':
case 'delpremium':
case 'delpr': {
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return reply(mess.owners);
    if (!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
    
    const ya = q.split("|")[0].replace(/[^0-9]/g, '');
    if (!prem.includes(ya)) return reply('Nomor ini tidak terdaftar sebagai Premium User!');
    
    const unp = prem.indexOf(ya);
    prem.splice(unp, 1);
    fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));

    // Update role di userFire.json
    const dbFire = loadUserFire();
    const userJid = ya + '@s.whatsapp.net';
    if (dbFire[userJid]) {
        dbFire[userJid].role = 'user';
        dbFire[userJid].limit = 100;
        saveUserFire(dbFire);
    }

    reply(`Nomor ${ya} berhasil dihapus dari daftar Premium User! ❌`);
}
break;
case 'listprem':
case 'listpremium':
case 'listpr': {
updatePopularCommand(command); // Mencatat command
    let teks = '┌──⭓「 *List Premium User* 」\n│\n';
    for (let x of prem) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${prem.length}*`;
    reply(teks);
}
break;
      case 'statustext':
      case 'upswtext':
      case 'upswteks': {
        updatePopularCommand(command); // Mencatat command			
        if(!isOwner) return reply(mess.owners);
        if(!q) return reply('Teksnya mana?');
        await nhbtx.sendMessage('status@broadcast', {
          text: q
        }, {
          backgroundColor: '#FF000000',
          font: 3,
          statusJidList: Object.keys(global.db.data.users)
        });
        reply('Sukses kirim status teks!');
      }
      break
      case 'sendclear': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return reply(mess.owners);
        if(!text) return reply('Masukkan ID grup atau nomor kontak.');
        const targetId = text.trim(); // ID grup atau nomor tujuan
        const emptyMessage = '\n'.repeat(1000); // Membuat pesan kosong dengan 1000 baris
        try {
          await nhbtx.sendMessage(targetId, {
            text: emptyMessage
          }); // Mengirimkan pesan
          reply(`Pesan kosong sebanyak 1000 baris berhasil dikirim ke ${targetId}.`);
        } catch (error) {
          console.error(error);
          reply('Gagal mengirim pesan kosong. Pastikan ID yang Anda masukkan benar.');
        }
        break
      }
      case 'statusvideo':
      case 'upswvideo': {
        updatePopularCommand(command); // Mencatat command
        if(!isOwner) return reply(mess.owners);
        if(/video/.test(mime)) {
          // Unduh video dari pesan yang di-reply
          var videosw = await nhbtx.downloadAndSaveMediaMessage(quoted);
          // Dapatkan informasi default untuk caption
          let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
          let mediaType = mime || 'Tidak diketahui';
          let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
          });
          let sender = `${m.pushName || namaowner}`;
          // Buat caption default
          let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🎥 *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
          // Kirim video ke status WhatsApp
          await nhbtx.sendMessage('status@broadcast', {
            video: {
              url: videosw
            },
            caption: q ? q : defaultCaption
          }, {
            statusJidList: Object.keys(global.db.data.users)
          });
          await reply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
        } else {
          reply('⚠️ Tolong reply ke video dulu ya, Cik! 🎥');
        }
      }
      break
case 'setprompt2': {
updatePopularCommand(command); // Mencatat command
    if (!text) return reply('⚠️ Harap masukkan prompt yang ingin digunakan.\n\nContoh: setprompt Kamu adalah AI yang membantu pengguna.');
    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    aiPrompt = text;
    reply(`✅ Prompt berhasil diperbarui:\n\n${aiPrompt}`);
}
break

case 'llama': {
updatePopularCommand(command); // Mencatat command // Nama case mengikuti nama API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: llama33 Apa itu teknologi AI?');
    try {
        // Panggil API dengan prompt dan teks yang diberikan
        const apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=${encodeURIComponent(aiPrompt)}&text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'metaai': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: meta-llama Apa kabar?');
    try {
        // Panggil API tanpa prompt
        const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'nous': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: nous-hermes Hai, apa kabar?');
    try {
        // Panggil API dengan parameter content
        const apiUrl = `https://api.siputzx.my.id/api/ai/nous-hermes?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'claudeai': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: claude-sonnet Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'dbrxai': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: dbrx-instruct Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'deepseek': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: deepseek-chat Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'dreamshaper': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk membuat gambar.\n\nContoh: dreamshaper buatkan gambar kucing');
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' }); // Mengatur response untuk menangani buffer gambar

        if (response.status === 200) {
            const buffer = Buffer.from(response.data, 'binary'); // Konversi data menjadi buffer
            nhbtx.sendMessage(m.chat, { 
                image: buffer, 
                caption: `Gambar berhasil dibuat berdasarkan prompt: "${text}"` 
            }, { quoted: m });
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'img2text': {
updatePopularCommand(command); // Mencatat command
    try {
        // Periksa apakah file media valid (gambar)
        if (/webp|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading dan menyimpan key untuk edit nanti
            if (!(await firely(m, '⏳ Sedang memproses...'))) return; // Jika limit habis, proses berhenti di sini

            // Emoji yang akan digunakan
            const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

            // Mengirimkan reaksi secara berurutan
            for (const emoji of reactEmojis) {
                await nhbtx.sendMessage(m.chat, {
                    react: {
                        text: emoji,
                        key: m.key
                    }
                });
            }

            // Unduh media
            let media = await quoted.download();

            // Unggah media ke Uguu.se untuk mendapatkan URL
            let anu = await UguuSe(media);
            if (!anu.url) throw 'Gagal mengunggah media ke Uguu.se!';

            // Kirim URL ke API Anda
            let response = await fetch(`https://api.siputzx.my.id/api/ai/image2text?url=${anu.url}`);
            let result = await response.json();

            // Periksa respons API
            if (result.status && result.data) {
                // Terjemahkan hasil ke Bahasa Indonesia menggunakan translate-google-api
                let translatedText = await translate(result.data, {
                    from: 'en',
                    to: 'id'
                });

                // Kirim hasil terjemahan ke pengguna
                m.reply(`*Hasil Deskripsi Gambar (Bahasa Indonesia):*\n\n${translatedText}`);
            } else {
                m.reply('❌ Gagal mendapatkan deskripsi gambar dari API!');
            }
        } else {
            reply('⚠️ Kirim atau reply gambar yang ingin diubah menjadi teks!');
        }
    } catch (e) {
        // Tangani error dan kirim pesan jika ada masalah
        console.error(e);
        reply('❌ Terjadi kesalahan saat memproses gambar!');
    }
}
break
case 'venice': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk AI Venice.\n\nContoh: venice Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan prompt dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/venice?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            reply(response.data.message); // Balas dengan output dari AI Venice
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'tesload': {
    const lod = [
        "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
        "████▒▒▒▒▒▒▒▒ 30%",
        "███████▒▒▒▒▒ 50%",
        "██████████▒▒ 80%",
        "████████████ 100%"
    ];

    // Kirim pesan awal dan simpan key untuk diedit
    const { key } = await nhbtx.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

    // Proses loading dengan update pesan secara bertahap
    for (let i = 0; i < lod.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
        await nhbtx.sendMessage(m.chat, { text: lod[i], edit: key });
    }

    // Setelah semua update selesai, edit menjadi "Loading selesai"
    await nhbtx.sendMessage(m.chat, { text: '✅ Loading selesai!', edit: key });

    // Kirim pesan lain setelah loading selesai
    reply('Proses loading telah selesai!');
}
break;
case 'latukam': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan konten untuk AI Latukam.\n\nContoh: latukam Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari AI Latukam
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'qwq': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan konten untuk API QwQ-32B.\n\nContoh: qwq Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/qwq-32b-preview?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            reply(response.data.data); // Balas dengan output dari API QwQ-32B
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'stabilityai': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk Stability AI.\n\nContoh: stabilityai Buatkan gambar pohon');
    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Pastikan menerima data dalam bentuk buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            nhbtx.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Stability AI untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'stable': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk Stable Diffusion.\n\nContoh: stable-diffusion Buatkan gambar ikan');
    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Terima data dalam format buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            nhbtx.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Stable Diffusion untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'flux': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk Flux AI.\n\nContoh: flux Buatkan gambar cyberpunk lizard');
    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Terima data dalam format buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            nhbtx.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Flux AI untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'gandalf': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan prompt untuk Gandalf AI.\n\nContoh: gandalf Kamu siapa?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/gandalf?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            reply(response.data.data); // Kirim teks hasil dari API Gandalf
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'gemini': {
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return reply('⚠️ Harap masukkan konten untuk Gemini Pro AI.\n\nContoh: gemini-pro Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            reply(response.data.data); // Kirim teks hasil dari API Gemini Pro
        } else {
            reply('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'quotesanime': {
updatePopularCommand(command); // Mencatat command 
    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API untuk mendapatkan data quotes
        const apiUrl = `https://otakotaku.com/quote/view/1567/melihat-harapan`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            // Pilih satu quote secara acak
            const quotes = response.data.data;
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

            // Kirim pesan dengan quotes acak
            nhbtx.sendMessage(m.chat, {
                image: { url: randomQuote.gambar }, // Gambar dari karakter
                caption: `🎭 *Quotes Anime* 🎭\n\n`
                        + `📺 *Anime*: ${randomQuote.anime}\n`
                        + `🎬 *Episode*: ${randomQuote.episode}\n`
                        + `🎭 *Karakter*: ${randomQuote.karakter}\n\n`
                        + `💬 *Quote*:\n"${randomQuote.quotes}"\n\n`
                        + `🔗 [Baca lebih lanjut](${randomQuote.link})`
            }, { quoted: m });
        } else {
            reply('❌ Tidak dapat menemukan quotes anime. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat mengambil data quotes anime.');
    }
}
break
case 'cecanindo': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/indonesia', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Indonesia' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan Indonesia. Silakan coba lagi nanti.');
    }
    break
}
case 'bluearchive': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/blue-archive', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Blue Archive' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Blue Archive. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanchina': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/china', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan China' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan China. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanjapan': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/japan', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Japan' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan Japan. Silakan coba lagi nanti.');
    }
    break
}
case 'cecankorea': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/korea', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Korea' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan Korea. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanthai': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/thailand', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Thailand' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan Thailand. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanviet': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/vietnam', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Vietnam' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Cecan Vietnam. Silakan coba lagi nanti.');
    }
    break
}
case 'cats': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cats', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar kucing lucu' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar kucing. Silakan coba lagi nanti.');
    }
    break
}
case 'neko': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/neko', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Neko' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Neko. Silakan coba lagi nanti.');
    }
    break
}
case 'waifu': {
updatePopularCommand(command); // Mencatat command
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/waifu', { responseType: 'arraybuffer' });
        nhbtx.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Waifu' }, { quoted: m });
    } catch (error) {
        reply('Gagal mengambil gambar Waifu. Silakan coba lagi nanti.');
    }
    break
}
      case 'statusimg':
      case 'statusimage':
      case 'upswimg': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(/image/.test(mime)) {
          // Unduh gambar dari pesan yang di-reply
          var imagesw = await nhbtx.downloadAndSaveMediaMessage(quoted);
          // Dapatkan informasi default untuk caption
          let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
          let mediaType = mime || 'Tidak diketahui';
          let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
          });
          let sender = `${m.pushName || namaowner}`;
          // Buat caption default
          let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🖼️ *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
          // Kirim gambar ke status WhatsApp
          await nhbtx.sendMessage('status@broadcast', {
            image: {
              url: imagesw
            },
            caption: q ? q : defaultCaption
          }, {
            statusJidList: Object.keys(global.db.data.users)
          });
          await reply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
        } else {
          reply('⚠️ Tolong reply ke gambar dulu ya, Cik! 🖼️');
        }
      }
      break
      case 'rvo':
      case 'readviewonce': {
updatePopularCommand(command); // Mencatat command
        if(!m.quoted) return reply(`Reply to view once message`)
        if(m.quoted.mtype !== 'viewOnceMessageV2') return reply(`This is not a view once message`)
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        let msg = m.quoted.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
          buffer = Buffer.concat([buffer, chunk])
        }
        if(/video/.test(type)) {
          return nhbtx.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if(/image/.test(type)) {
          return nhbtx.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
      }
      break
      //[ *CASE AI JOKO SIJAWA* ]
			case "joko": {
				if (!text) return reply("mau nanya apa sama joko\nExampel: .joko nama kamu siapa?")
				await nhbtx.sendMessage(m.chat, {
					mimetype: 'audio/mp4',
					audio: {
						url: "https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=" + (await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text)).data.data
					}
				}, {
					quoted: m
				});
			}
			break
      case 'statusaudio':
      case 'upswaudio': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(/audio/.test(mime)) {
          var audiosw = await nhbtx.downloadAndSaveMediaMessage(quoted);
          await nhbtx.sendMessage('status@broadcast', {
            audio: {
              url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
          }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(global.db.data.users)
          });
          await reply('Sukses kirim status audio!');
        } else {
          reply('Reply audio dulu, ya!');
        }
      }
      break
      case 'contact': {
        updatePopularCommand(command); // Mencatat command
        await nhbtx.sendMessage(m.chat, {
          contacts: {
            displayName: "Owner",
            contacts: contacts
          }
        }, {
          quoted: m
        });
      }
      break
      case 'getcontact':
      case 'getcon': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!(isAdmins || isOwner)) return reply(mess.admins); // Hanya admin atau pemilik yang bisa
        bigpp = await nhbtx.sendMessage(m.chat, {
          text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
        }, {
          quoted: m,
          ephemeralExpiration: 86400
        });
        await sleep(1000);
        nhbtx.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
      }
      break
      case 'savecontact':
      case 'svcontact': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!(isAdmins || isOwner)) return reply(mess.admin); // Hanya admin atau pemilik yang bisa
        let cmiggc = await nhbtx.groupMetadata(m.chat);
        let orgiggc = participants.map(a => a.id);
        vcard = '';
        noPort = 0;
        for(let a of cmiggc.participants) {
          vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
        }
        let nmfilect = './contacts.vcf';
        reply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
        require('fs').writeFileSync(nmfilect, vcard.trim());
        await sleep(2000);
        nhbtx.sendMessage(m.chat, {
          document: require('fs').readFileSync(nmfilect),
          mimetype: 'text/vcard',
          fileName: 'Contact.vcf',
          caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
        }, {
          ephemeralExpiration: 86400,
          quoted: m
        });
        require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
      }
      break
      case 'upfire': {
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return reply('❌ Hanya Owner yang bisa menggunakan perintah ini!');
    if (args.length < 2) return reply(`⚠️ Gunakan format:\n\n.upfire @user/jid jumlah\n\nContoh:\n.upfire @user 100\n.upfire 6288888888888 100`);

    let target;
    let jumlah = parseInt(args[1]);

    // Cek apakah menggunakan tag atau nomor
    if (m.mentionedJid.length !== 0) {
        target = m.mentionedJid[0]; // Jika pakai tag
    } else if (/^\d+$/.test(args[0])) {
        target = args[0] + '@s.whatsapp.net'; // Jika pakai nomor
    } else {
        return reply('⚠️ Masukkan nomor atau tag user yang valid!');
    }

    if (isNaN(jumlah) || jumlah <= 0) return reply('⚠️ Masukkan jumlah limit yang valid!');

    const db = loadUserFire();

    // Tambahkan limit
    if (!db[target]) {
        db[target] = { limit: jumlah, role: 'user' };
    } else {
        db[target].limit += jumlah;
    }

    saveUserFire(db);
    reply(`✅ Berhasil menambahkan ${jumlah} limit untuk @${target.split('@')[0]}`, { mentions: [target] });
}
break;

case 'delfire': {
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return reply('❌ Hanya Owner yang bisa menggunakan perintah ini!');
    if (m.mentionedJid.length === 0) return reply(`⚠️ Tag user yang ingin direset limitnya!\n\nContoh: .delfire @user`);

    let target = m.mentionedJid[0];
    const db = loadUserFire();

    if (!db[target]) return reply(`⚠️ User belum memiliki data limit!`);
    
    db[target].limit = 0;
    saveUserFire(db);

    reply(`✅ Limit user @${target.split('@')[0]} berhasil direset ke 0!`, { mentions: [target] });
}
break;

case 'listfireuser': {
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return reply('❌ Hanya Owner yang bisa menggunakan perintah ini!');

    const db = loadUserFire();
    let list = `🔥 *Daftar User dan Limit Fire*\n\n`;

    if (Object.keys(db).length === 0) {
        return reply('⚠️ Tidak ada data user di database.');
    }

    // Looping user dan format limit
    for (let user in db) {
        let limitDisplay = db[user].limit === -1 ? '∞' : db[user].limit; // Ubah -1 jadi ∞
        list += `👤 @${user.split('@')[0]}\n🔥 Limit: ${limitDisplay}\n📛 Role: ${db[user].role}\n\n`;
    }

    // Kirim pesan dengan mention semua user
    nhbtx.sendMessage(m.chat, { text: list, mentions: Object.keys(db) }, { quoted: m });
}
break;
case 'cekfire': {
updatePopularCommand(command); // Mencatat command
    const db = loadUserFire();

    let target;

    // Jika pakai tag
    if (m.mentionedJid[0]) {
        target = m.mentionedJid[0];
    } 
    // Jika input berupa nomor
    else if (args[0]) {
        target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } 
    // Jika tidak ada input, cek limit diri sendiri
    else {
        target = m.sender;
    }

    // Cek apakah user sudah terdaftar di database
    if (!db[target]) {
        return reply(`🔥 User @${target.split('@')[0]} belum memiliki limit.`, { mentions: [target] });
    }

    let role = db[target].role;
    let limit = db[target].limit;

    let message = `🔥 *Cek Fire Limit*\n\n`;
    message += `👤 User: @${target.split('@')[0]}\n`;
    message += `📛 Role: ${role}\n`;
    message += `🔥 Sisa Limit: ${limit === -1 ? 'Unlimited ♾️' : limit}\n`;

    reply(message, { mentions: [target] });
}
break;
case 'ig':
case 'instagram':
case 'igdl': {
updatePopularCommand(command); // Mencatat command
    console.log('📢 Memproses perintah IG Download...');

    if (!text) {
        console.log('⚠️ Tidak ada URL yang diberikan.');
        return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contoh:*\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/`);
    }
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    // Mengambil angka setelah URL jika ada
    const regex = /(\d+)$/;
    const match = text.match(regex);
    const numImages = match ? parseInt(match[1]) : 8; // Default ke 8 jika tidak ada angka

    console.log('🌐 URL yang dimasukkan:', text);
    console.log('🔢 Jumlah gambar yang akan dikirim:', numImages);

    try {
        console.log('📡 Menghubungi API...');
        let anu = await fetchJson(`https://api.siputzx.my.id/api/d/igdl?url=${text}`);
        console.log('🔍 Respons API:', JSON.stringify(anu, null, 2));

        if (!anu.status || !anu.data || anu.data.length === 0) {
            console.log('❌ Data tidak ditemukan atau kosong.');
            return reply('❌ Konten tidak ditemukan. Pastikan tautannya benar!');
        }

        console.log('✅ Data ditemukan! Proses pengiriman...');
        let count = 0; // Untuk membatasi jumlah gambar/video yang dikirim

        // Batasi data yang dikirim sesuai jumlah yang diinginkan
        const totalItems = Math.min(anu.data.length, numImages);

        for (let i = 0; i < totalItems; i++) {
            let item = anu.data[i];

            console.log('📦 Item ditemukan:', item);

            // Ambil data file dari URL
            console.log('⏳ Mengunduh file untuk deteksi tipe...');
            const response = await axios.get(item.url, { responseType: 'arraybuffer' });

            // Periksa header Content-Type
            const contentType = response.headers['content-type'];
            console.log('Tipe file dari header:', contentType);

            // Deteksi tipe file jika header tidak memberikan informasi yang jelas
            let type;
            if (contentType) {
                if (contentType.startsWith('video')) {
                    type = { mime: 'video/mp4' }; // Asumsikan video mp4 jika tipe file adalah video
                } else if (contentType.startsWith('image')) {
                    type = { mime: 'image/jpeg' }; // Asumsikan gambar jpeg jika tipe file adalah image
                }
            }

            // Jika header tidak memberikan informasi, coba deteksi dari buffer
            if (!type) {
                const buffer = Buffer.from(response.data);
                type = await FileType.fromBuffer(buffer);
                console.log('🔎 Tipe file terdeteksi dari buffer:', type);
            }

            // Kirim file berdasarkan tipe yang terdeteksi
            if (type && type.mime.startsWith('video')) {
                console.log('🎥 Mengirim video...');
                const buffer = Buffer.from(response.data);
                await nhbtx.sendMessage(m.chat, {
                    video: buffer,
                    caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
                }, { quoted: m });
                console.log('✅ Video berhasil dikirim!');
            } else if (type && type.mime.startsWith('image')) {
                console.log('🖼️ Mengirim gambar...');
                const buffer = Buffer.from(response.data);
                await nhbtx.sendMessage(m.chat, {
                    image: buffer,
                    caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})`
                }, { quoted: m });
                console.log('✅ Gambar berhasil dikirim!');
            } else {
                console.log('❓ Jenis file tidak dikenali:', item.url);
                reply('⚠️ Jenis file tidak dikenali!');
            }

            count++; // Increment count setiap gambar/video dikirim
        }

        if (count === 0) {
            reply('⚠️ Tidak ada konten untuk dikirim.');
        }
    } catch (err) {
        console.error('❌ Error:', err);
        reply('❌ Terjadi kesalahan. Coba lagi nanti.');
    }
}
break
      case 'sendcontact':
      case 'sencontact': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!m.mentionedJid[0]) return reply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
        let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
        let snContact = {
          displayName: "Contact",
          contacts: [{
            displayName: snTak,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
          }]
        };
        nhbtx.sendMessage(m.chat, {
          contacts: snContact
        }, {
          ephemeralExpiration: 86400
        });
      }
      break
      case 'getgc':
      case 'getgcid': {
updatePopularCommand(command); // Mencatat command
        if(!text) return reply('Enter Group Link!')
        let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
        if(code === null) return reply('No invite url detected.');
        code = code[0].replace('chat.whatsapp.com/', '');
        await nhbtx.groupGetInviteInfo(code).then(anu => {
          let {
            id,
            subject,
            owner,
            subjectOwner,
            creation,
            desc,
            descId,
            participants,
            size,
            descOwner
          } = anu
          console.log(anu);
          let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
          reply(par);
        }).catch((res) => {
          if(res.data == 406) return reply('Group Not Found❗');
          if(res.data == 410) return reply('Group URL Has Been Reset❗');
        });
      }
      break
      case 'getch':
      case 'getchid': {
updatePopularCommand(command); // Mencatat command
        if(!text) return reply(`Ayo Kak, kirim perintah *${prefix + command}* URL saluran biar aku bantu! 😊`);
        if(!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return reply(`Hmm, sepertinya linknya nggak valid, Kak! Coba lagi ya! 😣`);

        function formatDate(timestamp) {
          const date = new Date(timestamp * 1000);
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const day = date.getDate();
          const month = months[date.getMonth()];
          const year = date.getFullYear();
          return `${day} ${month} ${year}`;
        }
        try {
          let result = args[0].split('https://whatsapp.com/channel/')[1];
          let data = await nhbtx.newsletterMetadata("invite", result);
          let teks = `*Nama :* ${data.name}\n*ID :* ${data.id}\n*Status :* ${data.state}\n*Dibuat :* ${formatDate(data.creation_time)}\n*Subscribers :* ${data.subscribers}\n*Verification :* ${data.verification}\n*Reaction Codes :* ${data.reaction_codes}\n*Description :*\n${data.description}\n`;
          let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{\"display_text\":\"Salin ID\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
          }];
          nhbtx.sendButton(m.chat, button, teks, namabot, m);
        } catch (error) {
          m.reply(`Aduh, sepertinya ada masalah nih, Kak! 😥 Coba cek lagi link channel-nya, ya?`);
        }
      }
      break
      case 'contacttag':
      case 'contag': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!(isAdmins || isOwner)) return reply(mess.admins); // Hanya admin atau pemilik yang bisa
        if(!m.mentionedJid[0]) return reply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
        let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
        let sngContact = {
          displayName: "Contact",
          contacts: [{
            displayName: sngTak,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
          }]
        };
        nhbtx.sendMessage(m.chat, {
          contacts: sngContact,
          mentions: participants.map(a => a.id)
        }, {
          ephemeralExpiration: 86400
        });
      }
      break
      case 'tesbtn2': {
        const caption = "ini buttonnya tuan"
        nhbtx.sendMessage(m.chat, {
          image: thum,
          caption: caption,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: m
        });
      }
      break
      case 'delsession': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        fs.readdir(`./${sessionName}`, async function(err, files) {
          if(err) {
            console.error('Unable to scan directory: ' + err);
            return reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
          let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
          if(filteredArray.length == 0) return reply(teks);
          filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          if(text && text == 'true') {
            await m.reply('Menghapus Session File..')
            await filteredArray.forEach(function(file) {
              fs.unlinkSync('./session/' + file)
            });
            sleep(2000)
            m.reply('Berhasil Menghapus Semua Sampah Session')
          } else reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
        });
      }
      break
      case 'setnamegc':
			case 'setsubject':
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				if (!text) return reply('Text ?')
				await nhbtx.groupUpdateSubject(m.chat, text)
				reply(mess.dones)
			break

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await nhbtx.downloadAndSaveMediaMessage(quoted)
				await nhbtx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				reply(mess.dones)
			}
			break
case "kudetagc":
case "kudeta": {
    if (!isOwner) return reply(mess.owners);
    
    // Fetch group metadata to get participants
    let metadata = await nhbtx.groupMetadata(m.chat);
    let memberFilter = metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender);
    
    if (memberFilter.length < 1) return reply("Grup Ini Sudah Tidak Ada Member!");
    
    await reply("Kudeta Grup mulai bot hanya di sewa");
    
    for (let i of memberFilter) {
        await nhbtx.groupParticipantsUpdate(m.chat, [i], 'remove');
        await sleep(1000); // Delay to avoid API limits
    }
    
    await m.reply("Kamu telah Berhasil Kudeta Group 🏴‍☠️");
}
break;
			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				await nhbtx.removeProfilePicture(m.chat)
			}
			break
case 'setexif':
			case 'setwm':
				if (!isOwner) return reply(mess.owners);
				if (!text) return reply(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				reply(`Exif berhasil diubah!\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
			break
			case 'setppbot': {
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return reply(mess.owners);
				if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await nhbtx.downloadAndSaveMediaMessage(quoted)
				await nhbtx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				reply('udah')
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return reply(mess.owners);
				await nhbtx.removeProfilePicture(nhbtx.user.id)
				reply('udah bro')
			}
			break

			case 'setbiobot':{
				if (!isOwner) return reply(mess.owners);
				if (!text) return reply(`Where is the text?\nExample: ${prefix + command} NHE AI`)
				await nhbtx.updateProfileStatus(text)
				reply('sipp')
			}
			break

			case 'setdesc':
			case 'setdesk':
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				if (!text) return reply('Text ?')
				await nhbtx.groupUpdateDescription(m.chat, text)
				reply(mess.dones)
			break
      // Case untuk listthumb
      case 'listthumb': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        const thumbList = readThumbList();
        if(thumbList.length === 0) {
          return reply('Tidak ada thumbnail yang tersimpan.');
        }
        let teks = '「 LIST THUMBNAIL 」\n\n';
        for(let thumb of thumbList) {
          teks += `*Name:* ${thumb.name}\n*URL:* ${thumb.url}\n───────────────\n`;
        }
        reply(teks);
        break
      }
      // Case untuk addthumb
      case 'addthumb': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(!text) return reply(`*< / >* Example: ${prefix + command} thumbnail_name|image_url`);
        let [nama, url] = text.split('|');
        if(!nama || !url) return reply(`Please provide both name and URL in the correct format.`);
        const thumbList = readThumbList();
        if(thumbList.find(thumb => thumb.name === nama)) {
          return reply(`Thumbnail dengan nama '${nama}' sudah terdaftar.`);
        }
        thumbList.push({
          name: nama,
          url: url
        });
        writeThumbList(thumbList);
        reply(`Thumbnail dengan nama '${nama}' berhasil ditambahkan!`);
        break
      }
      // Case untuk delthumb
      case 'delthumb':
      case 'deletethumb': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(!text) return reply('Nama thumbnail yang ingin dihapus?');
        const thumbList = readThumbList();
        const index = thumbList.findIndex(thumb => thumb.name === text.toLowerCase());
        if(index === -1) return reply(`Thumbnail dengan nama '${text}' tidak ditemukan.`);
        thumbList.splice(index, 1);
        writeThumbList(thumbList);
        reply(`Thumbnail dengan nama '${text}' berhasil dihapus.`);
        break
      }
      case "addcmd":
      case "setcmd":
        if(isQuotedSticker) {
          if(!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
          var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          addCmd(kodenya, q);
          reply(mess.dones);
          await nhbtx.sendMessage(m.chat, {
            react: {
              text: '🔐', // Emoji yang diinginkan
              key: m.key // Memberikan reaksi pada pesan perintah
            }
          });
        } else {
          reply("tag stickenya");
        }
        break
        case 'remini':
			case 'hdr':
			case 'hd':{
				nhbtx.enhancer = nhbtx.enhancer ? nhbtx.enhancer : {};
				if (m.sender in nhbtx.enhancer) return reply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Media tidak support!`)
				nhbtx.enhancer[m.sender] = true;
				try {
					await emote('⏱️');
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					await reply('Gambar berhasil ditingkatkan kualitasnya! ✅');
					nhbtx.sendMessage(m.chat, {image: proses, caption: "sudah bang"}, {quoted: m})
				} catch (err) {
					console.log(err);
					reply('Terjadi kesalahan pada server.');
				}
				delete nhbtx.enhancer[m.sender];
			}
			break
			case "ht":
case "hidetag": {
    if (!isGroup) return reply(mess.groups);
    if (!isOwner && !isAdmins) return reply(mess.admins);
    if (!text) return m.reply(example("pesannya"));
    
    // Fetch group metadata to ensure participants are available
    let metadata = await nhbtx.groupMetadata(m.chat);
    let member = metadata.participants.map(v => v.id);

    await nhbtx.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m});
}
break;
			case 'add': {
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);

				if (!text && !m.quoted) {
					reply(`Example: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await nhbtx.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await nhbtx.groupInviteCode(m.chat);
						
									if (i.status == 408) return reply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return reply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return reply('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return reply('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await nhbtx.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
							
										await nhbtx.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => reply('Gagal kirim undangan! 😔'));
									} else {
										reply('udah bg');
									}
								}
							});
					} catch (e) {
						reply('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break
case 'texttospech': case 'tts': case 'tospech': {
updatePopularCommand(command); // Mencatat command
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				nhbtx.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'translate': case 'tr': {
updatePopularCommand(command); // Mencatat command
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'promote':
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await nhbtx.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
				reply('rampung bro')
			break

			case 'demote':
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isBotAdmins) return reply(mess.abots);
				let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await nhbtx.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
				reply(mess.dones)
			break
      case 'bass':
      case 'blown':
      case 'deep':
      case 'earrape':
      case 'fast':
      case 'fat':
      case 'nightcore':
      case 'reverse':
      case 'robot':
      case 'slow':
      case 'smooth':
      case 'squirrel': {
        updatePopularCommand(command); // Mencatat command
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          let set
          if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
          if(/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
          if(/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
          if(/earrape/.test(command)) set = '-af volume=12'
          if(/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
          if(/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
          if(/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
          if(/reverse/.test(command)) set = '-filter_complex "areverse"'
          if(/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          if(/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
          if(/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          if(/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
          if(/audio/.test(mime)) {
            await reply('tunggu bentar');
            let media = await nhbtx.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if(err) return reply(err)
              let buff = fs.readFileSync(ran)
              nhbtx.sendMessage(m.chat, {
                audio: buff,
                mimetype: 'audio/mpeg'
              }, {
                quoted: m
              })
              fs.unlinkSync(ran)
            })
          } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
        } catch (e) {
          reply(e)
        }
      }
      break
      case 'autoswview':
			case 'autostatusview':{
				if (!isOwner) return reply(mess.owners);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					global.autoswview = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.autoswview = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'anticall': {
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return reply(mess.owners);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					global.anticall = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.anticall = false
					reply(`${command} is disabled`)
				}
			}
			break;
      case 'kick':
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (!isGroup) return reply(mess.groups);
				if (!isBotAdmins) return reply(mess.abots);
				let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await nhbtx.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
				reply('udah di kick ya')
			break;
			case 'adminevent': {
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					global.adminevent = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.adminevent = false
					reply(`${command} is disabled`)
				}
			}
			break;
			case 'groupevent': {
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return reply(mess.groups);
				if (!isAdmins && !isOwner) return reply(mess.admins);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					global.groupevent = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.groupevent = false
					reply(`${command} is disabled`)
				}
			}
			break;
      case "delcmd":
        if(!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`);
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        reply(mess.dones);
        await nhbtx.sendMessage(m.chat, {
          react: {
            text: '🚫', // Emoji yang diinginkan
            key: m.key // Memberikan reaksi pada pesan perintah
          }
        });
        break
      case 'creategc': {
updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(!text) {
          return reply(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
        }
        await emote('⏱️');
        let cret = await nhbtx.groupCreate(text, []);
        let response = await nhbtx.groupInviteCode(cret.id);
        let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
        await emote('✅');
        nhbtx.sendMessage(m.chat, {
          text: caption,
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            externalAdReply: {
              nhbtxwAdAttribution: true,
              title: cret.subject,
              body: `Undangan chat grup`,
              thumbnailUrl: thumbUrl,
              sourceUrl: `https://chat.whatsapp.com/${response}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        });
      }
      break
      case 'mitos': {
updatePopularCommand(command); // Mencatat command
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				reply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				break
			}
      case 'faktaunik': {
updatePopularCommand(command); // Mencatat command
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				reply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				break
			}
      case 'group':
      case 'grup': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!isAdmins && !isOwner) return reply(mess.admins);
        if(!isBotAdmins) return reply(mess.abots);
        if(args[0] === 'close') {
          await nhbtx.groupSettingUpdate(m.chat, 'announcement').then(() => reply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒')).catch((err) => reply(`⚠️ Gagal menutup grup: ${err}`));
        } else if(args[0] === 'open') {
          await nhbtx.groupSettingUpdate(m.chat, 'not_announcement').then(() => reply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓')).catch((err) => reply(`⚠️ Gagal membuka grup: ${err}`));
        } else {
          botsett = `⚙️ SETTINGS YOUR GROUP`
          let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: botsett
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: namabot
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    gifPlayback: true,
                    subtitle: namaowner,
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "single_select",
                      "buttonParamsJson": `{
												"title": "Group Settings",
												"sections": [{
													"title": "Select Settimgs",
													"rows": [{
														"title": "⭐OPEN GROUP",
														"description": "Bot akan membuka grup",
														"id": "${prefix}grup open"
													},
													{
														"title": "🌕 CLOSE GROUP",
														"description": "Bot akan menutup grup",
														"id": "${prefix}grup close"
													},
													{
														"title": "⚡ WELCOME ON",
														"description": "Bot akan bot akan mengirim pesan welcome grup",
														"id": "${prefix}welkom on"
													},
													{
														"title": "🍄 WELCOME OFF",
														"description": "Bot akan mematikan welcome grup",
														"id": "${prefix}welkom off"
													},
													{
														"title": "⚓ GROUP-EVENT OFF",
														"description": "Bot akan memberi pesan ketika mengganti sesuatu",
														"id": "${prefix}groupevent on"
													},
													{
														"title": "🪨 GROUP-EVENT OFF",
														"description": "Bot akan mematikan groupevent",
														"id": "${prefix}groupevent off"
													},
													{
														"title": "🛸 ADMIN-EVENT ON",
														"description": "Bot akan menyalakan adminevent grup",
														"id": "${prefix}adminevent off"
													},
													{
														"title": "📝 ADMIN-EVENT OFF",
														"description": "Bot akan mematikan adminvent",
														"id": "${prefix}adminevent on"
													}]
												}]
											}`
                    }],
                  }),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363222395675670@newsletter',
                      newsletterName: namaowner,
                      serverMessageId: 143
                    }
                  }
                })
              }
            },
          }, {})
          await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          })
        }
      }
      break
      case 'welkom':
      case 'metu': {
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return reply(mess.groups);
        if(!isAdmins && !isOwner) return reply(mess.admins);
        if(args.length < 1) return reply('on/off?')
        if(args[0] === 'on') {
          global.welcome = true
          reply(`${command} is enabled`)
        } else if(args[0] === 'off') {
          global.welcome = false
          reply(`${command} is disabled`)
        }
      }
      break
      case 'lirik': 
			case 'lyrics': {
updatePopularCommand(command); // Mencatat command
				if (!text) return reply(`⚠️ Mana liriknya?\nContoh: *${prefix + command} Someone Like You*`);
				if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return reply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await reply(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					reply(lyricsResponse);
				} catch (error) {
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			break;
      case 'realown': { // Replace 'contact' with 'realown'
        updatePopularCommand(command); // Mencatat command
        // Fetch the contacts data
        const contacts = await getContacts();
        if(contacts.length === 0) {
          return await nhbtx.sendMessage(m.chat, {
            text: 'No contact information available at the moment.',
          });
        }
        // Send the contacts to the user
        await nhbtx.sendMessage(m.chat, {
          contacts: {
            displayName: "Owners", // You can customize the display name as per your requirement
            contacts: contacts.map(contact => ({
              displayName: contact.displayName,
              vcard: contact.vcard,
            })),
          },
        }, {
          quoted: m, // Optional, to quote the original message
        });
      }
      break
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for(let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        reply(teksnyee, cemde, true);
        break
      case 'yts':
case 'ytsearch': {
  updatePopularCommand(command); // Mencatat command
  if (!text) return m.reply(`Example : ${prefix + command} story wa anime`);
  if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini

  try {
    // Cari hasil di YouTube menggunakan API
    let search = await yts(text);
    if (!search.all.length) return m.reply("Tidak ada hasil pencarian ditemukan!");

    // Batasi hasil pencarian ke 5 item teratas dan siapkan carousel card
    const carouselCards = await Promise.all(search.all.slice(0, 5).map(async (video, index) => ({
      header: {
        title: `Hasil ${index + 1}`,
        hasMediaAttachment: true,
        imageMessage: (await generateWAMessageContent({
          image: { url: video.thumbnail }
        }, { upload: nhbtx.waUploadToServer })).imageMessage
      },
      body: {
        text: `🎥 *Judul:* ${video.title}\n👁 *Views:* ${video.views}\n⏱ *Durasi:* ${video.timestamp}\n📆 *Diupload:* ${video.ago}\n📝 *Url:* ${video.url}`
      },
      footer: {
        text: `Klik tombol di bawah untuk melihat atau salin tautan.`
      },
      nativeFlowMessage: {
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": JSON.stringify({
            "display_text": "LIHAT VIDEO 🎬",
            "url": `${video.url}`
            })
          },
          {
            "name": "cta_copy",
            "buttonParamsJson": JSON.stringify({
            "display_text": "SALIN URL 📝",
            "copy_code": `${video.url}`
            })
          }
        ]
      }
    })));

    // Buat pesan carousel
    const carouselMessage = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: {
              text: `🔎 *Hasil pencarian YouTube untuk:* _${text}_`
            },
            footer: {
              text: `YouTube Bot by NHE`
            },
            header: {
              hasMediaAttachment: false
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: carouselCards
            })
          })
        }
      }
    }, {});

    // Kirim pesan carousel
    await nhbtx.relayMessage(m.chat, carouselMessage.message, {
      messageId: carouselMessage.key.id
    });

  } catch (e) {
    console.error("Kesalahan saat memproses permintaan YouTube Search:", e);
    await nhbtx.sendMessage(m.chat, {
      text: "❌ Terjadi kesalahan saat memproses pencarian YouTube. Silakan coba lagi."
    }, { quoted: m });
  }
}
break;
      case 'wanumber':
      case 'nowa':
      case 'searchno':
      case 'searchnumber': {
updatePopularCommand(command); // Mencatat command
        if(!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
        var inputnumber = text.split(" ")[0]
        reply(`Searching for WhatsApp account in given range...`)

        function countInstances(string, word) {
          return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if(random_length == 1) {
          randomxx = 10
        } else if(random_length == 2) {
          randomxx = 100
        } else if(random_length == 3) {
          randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for(let i = 0; i < randomxx; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var status1 = nu[Math.floor(Math.random() * nu.length)]
          var status2 = nu[Math.floor(Math.random() * nu.length)]
          var status3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]
          var random21
          if(random_length == 1) {
            random21 = `${status1}`
          } else if(random_length == 2) {
            random21 = `${status1}${status2}`
          } else if(random_length == 3) {
            random21 = `${status1}${status2}${status3}`
          } else if(random_length == 4) {
            random21 = `${status1}${status2}${status3}${dom4}`
          }
          var anu = await nhbtx.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await nhbtx.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if(anu1 == '401' || anu1.status.length == 0) {
              nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
            }
          } catch {
            nowhatsapp += `${number0}${i}${number1}\n`
          }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
      }
      break
      case 'song': {
    updatePopularCommand(command); // Update popular command log

    if (!text) {
        m.reply(`Contoh penggunaan: ${prefix + command} anime whatsapp status`);
        return;
    }

    console.log('🔍 Mencari lagu berdasarkan query:', text);
if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    const yts = require("youtube-yts");
    const { youtube } = require("btch-downloader"); // Menggunakan btch-downloader

    try {
        await m.reply('Tunggu sebentar ya, lagi cari lagunya...');

        // Pencarian video
        const look = await yts(text);
        if (!look.videos || look.videos.length === 0) {
            return m.reply('Maaf, tidak menemukan lagu sesuai query tersebut.');
        }

        const convert = look.videos[0]; // Ambil video pertama
        console.log('🎵 Lagu ditemukan:', convert.title, convert.url);

        // Mendapatkan tautan MP3
        const pl = await youtube(convert.url); // btch-downloader mengembalikan URL MP3
        if (!pl || !pl.mp3) {
            throw new Error('Gagal mendapatkan tautan MP3');
        }
        console.log('🔗 Link MP3 berhasil didapatkan:', pl.mp3);

        // Kirim audio
        await nhbtx.sendMessage(m.chat, {
            audio: { url: pl.mp3 },
            fileName: `${convert.title}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: convert.title,
                    body: namabot,
                    thumbnailUrl: convert.image,
                    sourceUrl: convert.url, // URL video YouTube
                    mediaType: 1,
                    mediaUrl: convert.url,
                }
            },
        }, { quoted: m });

        m.reply('🎶 Lagunya udah dikirim, selamat menikmati!');
    } catch (err) {
        console.error('❌ Error saat proses unduh/kirim audio:', err);
        m.reply('Maaf, terjadi kesalahan saat mengambil lagu. Coba lagi nanti ya.');
    }
}
break;
      case 'pinterest':
      case 'pint': {
        updatePopularCommand(command);
        if(!text) return reply(`*< / >* Example: ${prefix + command} hu tao`);
        try {
          if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
          let anu = await pinterest(text); // Panggil API pencarian Pinterest
          if(anu.length < 1) return reply('Pencarian tidak ditemukan!');
          // Batasi hasil ke 5 item teratas dan siapkan carousel card
          const carouselCards = await Promise.all(anu.slice(0, 5).map(async (url, index) => ({
            header: {
              title: `Hasil ${index + 1}`,
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url
                }
              }, {
                upload: nhbtx.waUploadToServer
              })).imageMessage
            },
            body: {
              text: "Hasil pencarian Pinterest untuk: " + text
            },
            footer: {
              text: "Klik tombol di bawah untuk melihat sumber."
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: "Lihat di Pinterest",
                  url
                })
              }]
            }
          })));
          // Buat pesan carousel
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: `Hasil pencarian untuk: ${text}`
                  },
                  footer: {
                    text: "Pinterest Bot by Sych"
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards
                  })
                })
              }
            }
          }, {});
          // Kirim pesan carousel
          await nhbtx.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
        } catch (e) {
          console.error("Kesalahan saat mengirim carousel:", e);
          await nhbtx.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat memproses permintaan. Silakan coba lagi atau hubungi admin."
          }, {
            quoted: m
          });
        }
      }
      break
      case 'upchannel': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        try {
          if(!mime && !text) {
            return reply(`Oon! Lu belum kirim media atau teks apa pun. Coba lagi ya!`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🐬 Media ini dikirim melalui sistem otomatis NHE! ⭐"
          if(/image/.test(mime)) {
            nhbtx.sendMessage('120363363009408737@newsletter', {
              image: media,
              caption: text ? text : defaultCaption
            })
            reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            nhbtx.sendMessage('120363363009408737@newsletter', {
              video: media,
              caption: text ? text : defaultCaption
            })
            reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/audio/.test(mime)) {
            nhbtx.sendMessage('120363363009408737@newsletter', {
              audio: media,
              mimetype: mime,
              ptt: true
            })
            reply(`🎵 Audio berhasil diunggah ke saluran, cik!`)
          } else if(/text/.test(mime) || text) {
            nhbtx.sendMessage('120363363009408737@newsletter', {
              text: text ? text : defaultCaption
            })
            reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            reply(`Bjirlaah NHE gak tau ini jenis media apa. Coba dicek lagi ya, Anjg! 🧐`)
          }
        } catch (error) {
          console.error(error)
          reply(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'sendsc':
case "kirimsc": {
 if (!text) return m.reply("nomor?")
if (!isOwner) return Reply(mess.owners)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply(`proses pengiriman ke ${text}`)
var name = `NheBotx` //gausah diganti njir🗿
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await nhbtx.sendMessage(`${text}@s.whatsapp.net`, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply(`Script bot berhasil dikirim ke ${text}`)
}
break
      case 'upsaluran': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        try {
          if(!mime && !text) {
            return reply(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🪀 Media ini dikirim melalui sistem otomatis NHE!"
          if(/image/.test(mime)) {
            nhbtx.sendMessage(saluran, {
              image: media,
              caption: text ? text : defaultCaption
            })
            reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            nhbtx.sendMessage(saluran, {
              video: media,
              caption: text ? text : defaultCaption
            })
            reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/audio/.test(mime)) {
            nhbtx.sendMessage(saluran, {
              audio: media,
              mimetype: mime,
              ptt: true
            })
            reply(`🎵 Audio berhasil diunggah ke saluran, cik!`)
          } else if(/text/.test(mime) || text) {
            nhbtx.sendMessage(saluran, {
              text: text ? text : defaultCaption
            })
            reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            reply(`Hmm... NHE gak tau ini jenis media apa. Coba dicek lagi ya, cik! 🧐`)
          }
        } catch (error) {
          console.error(error)
          reply(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'upsaluran2': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        try {
          if(!mime && !text) {
            return reply(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🪨 Media ini dikirim melalui sistem otomatis NHE! 🍏"
          const buttons = [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }]
          if(/image/.test(mime)) {
            nhbtx.sendMessage(saluran, {
              image: media,
              caption: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            nhbtx.sendMessage(saluran, {
              video: media,
              caption: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/text/.test(mime) || text) {
            nhbtx.sendMessage(saluran, {
              text: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            reply(`Hmm... NHE gak tau ini jenis media apa. Coba dicek lagi ya, cil! 🧐`)
          }
        } catch (error) {
          console.error(error)
          reply(`Alamak 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'tiktoksearch':
      case 'tiktoks':
      case 'ttsearch': {
        updatePopularCommand(command); // Mencatat command
        if(!text) return reply(`⚠️ kurang lengkap su, gini loh: *${prefix + command} jj epep* biar NHE bisa bantu cari yang lu mau! 🔍💬`);
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          let search = await tiktokSearchVideo(text);
          let teks = `🎥 *${search.videos[0].title}*\n\n` + `🆔 *Video ID* : ${search.videos[0].video_id}\n` + `👤 *Username* : ${search.videos[0].author.unique_id}\n` + `🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` + `⏳ *Duration* : ${search.videos[0].duration} detik\n` + `❤️ *VT Like* : ${search.videos[0].digg_count}\n` + `💬 *Comment* : ${search.videos[0].comment_count}\n` + `🔄 *Share* : ${search.videos[0].share_count}\n\n` + `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
          let list = '';
          let no = 1;
          for(let i of search.videos) {
            list += `\n${no++}. 🎵 *${i.title}*\n` + `⏳ Duration: ${i.duration} detik\n` + `❤️ Likes: ${i.digg_count}\n` + `💬 Comments: ${i.comment_count}\n` + `🔄 Shares: ${i.share_count}\n` + `🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
          }
          await nhbtx.sendMessage(m.chat, {
            video: {
              url: `https://tikwm.com${search.videos[0].play}`
            },
            caption: teks
          }, {
            quoted: m
          });
          if(search.videos.length > 1) {
            await nhbtx.sendMessage(m.chat, {
              text: `📚 *Daftar Video Lainnya:*\n${list}`
            }, {
              quoted: m
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      break
      case 'ping': {
        updatePopularCommand(command); // Mencatat command
        let timestamp = speed()
        let latensi = speed() - timestamp
        respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_`
        reply(respon)
      }
      break
      case 'sewa':
        updatePopularCommand(command);
        reply(`*Price Sewa Bot*

🔏 3 hari = 1k
🔏 1 minggu = 5k
🔏 2 minggu = 10k
🔏 1 bulan = 5k

Untuk Melanjutkan Sewa Silahkan Hubungi Owner`)
        break
      case 'tiktok':
      case 'tiktokdown':
      case 'ttdown':
      case 'ttdl':
      case 'tt':
      case 'ttmp4':
      case 'ttvideo':
      case 'tiktokmp4':
      case 'tiktokvideo': {
        updatePopularCommand(command);
        if(!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) return m.reply('Url Tidak Mengandung Result Dari TikTok!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          const hasil = await tiktokDl(text);
          console.log('Hasil dari tiktokDl:', JSON.stringify(hasil, null, 2));
          m.reply('Memproses, tunggu sebentar...');
          if(hasil && hasil.data && hasil.data.length > 0) {
            if(hasil.size_nowm) {
              await nhbtx.sendMessage(m.chat, {
                video: {
                  url: hasil.data[1].url
                },
                caption: `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`,
                footer: namabot,
                buttons: [{
                  buttonId: `${prefix}ttmp3 ${text}`,
                  buttonText: {
                    displayText: "Tiktok Mp3🎶"
                  }
                }],
                viewOnce: true,
              }, {
                quoted: m
              });
            } else {
              for(let i = 0; i < hasil.data.length; i++) {
                await nhbtx.sendMessage(m.chat, {
                  video: {
                    url: hasil.data[i].url
                  },
                  caption: `*🚀Video:* ${i + 1}`,
                }, {
                  quoted: m
                });
              }
            }
          } else {
            m.reply('Data TikTok tidak ditemukan atau tidak valid!');
          }
        } catch (e) {
          console.error('Error saat memproses URL TikTok:', e);
          m.reply('Gagal memproses URL! Detail error: ' + e.message);
        }
      }
      break
      case 'toaud':
      case 'toaudio': {
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        reply('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await nhbtx.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toAudio(media, 'mp4')
        await nhbtx.sendMessage(m.chat, {
          audio: audio,
          mimetype: 'audio/mpeg'
        }, {
          quoted: m
        })
      }
      break
      case 'settings': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        const teksnyo = "⚙️ BOT SETTINGS\nPilih fitur dibawah ini untuk mengatur\n💬typing\n🎤recording\n👁️‍🗨️autoviewsw\n🔇anticall"
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksnyo
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{
												"title": "Settings",
												"sections": [{
													"title": "Select Settings",
													"rows": [{
														"title": "💬 AUTOTYPING ON",
														"description": "Bot akan mengaktifkan auto typing",
														"id": "${prefix}autotypingon"
													},
													{
														"title": "💬 AUTOTYPING OFF",
														"description": "Bot akan mematikan auto typing",
														"id": "${prefix}autotypingoff"
													},
													{
														"title": "🎤 AUTOVN ON",
														"description": "Mengaktifkan fitur autovn",
														"id": "${prefix}autovnon"
													},
													{
														"title": "🎤AUTOVN OFF",
														"description": "Mematikan fitur autovn",
														"id": "${prefix}autovnoff"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW ON",
														"description": "Bot akan mengaktifkan autoswview",
														"id": "${prefix}autoswview on"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW OFF",
														"description": "Bot akan mematikan autoswview",
														"id": "${prefix}autoswview off"
													},
													{
														"title": "🔇 ANTI-CALL ON",
														"description": "Mengaktifkan fitur anticall",
														"id": "${prefix}anticall on"
													},
													{
														"title": "🔇 ANTI-CALL OFF",
														"description": "Mematikan fitur anticall",
														"id": "${prefix}anticall off"
													}]
												}]
											}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363222395675670@newsletter',
                    newsletterName: namaowner,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'autotypingon':
        botSettings.autotyping = true;
        botSettings.autovn = false;
        reply('AutoTyping diaktifkan, AutoVN dinonaktifkan.');
        break
      case 'autotypingoff':
        botSettings.autotyping = false;
        reply('AutoTyping dinonaktifkan.');
        break
      case 'autovnon':
        botSettings.autovn = true;
        botSettings.autotyping = false;
        reply('AutoVN diaktifkan, AutoTyping dinonaktifkan.');
        break
      case 'autovnoff':
        botSettings.autovn = false;
        reply('AutoVN dinonaktifkan.');
        break
      case 'tomp3': {
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        reply('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await nhbtx.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toAudio(media, 'mp4')
        await nhbtx.sendMessage(m.chat, {
          document: audio,
          mimetype: 'audio/mpeg',
          fileName: `Convert By Nhe Bot.mp3`
        }, {
          quoted: m
        })
      }
      break
      case 'restart':
        if (!isOwner) return reply(mess.owners);
        reply(`restarting ${global.namabot}`)
        reply(mess.dones)
        await sleep(3000)
        process.exit()
        break
      case 'tovn':
      case 'toptt':
      case 'tovoice': {
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        reply('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await nhbtx.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toPTT(media, 'mp4')
        await nhbtx.sendMessage(m.chat, {
          audio: audio,
          mimetype: 'audio/ogg; codecs=opus',
          ptt: true
        }, {
          quoted: m
        })
      }
      break
      case 'togif': {
        updatePopularCommand(command); // Mencatat command
        if(!/webp|video/.test(mime)) return reply(`Reply Video/Stiker dengan caption *${prefix + command}*`);
        reply('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await nhbtx.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let filename = 'sticker_gif'; // Nama file default jika tidak ada filename
        let media = await nhbtx.downloadAndSaveMediaMessage(qmsg, filename); // Menyertakan nama file yang valid
        if(!media) {
          return reply('Gagal mengunduh media!');
        }
        let ran = `./database/sampah/${getRandom('.gif')}`;
        exec(`convert ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if(err) return reply('Gagal mengonversi stiker❗');
          let buffer = fs.readFileSync(ran);
          nhbtx.sendMessage(m.chat, {
            video: buffer,
            gifPlayback: true
          }, {
            quoted: m
          });
          fs.unlinkSync(ran);
        });
      }
      break
      case 'brat': {
updatePopularCommand(command); // Mencatat command
    if (!text) {
        return reply('⚠️ Harap masukkan teks untuk digunakan pada stiker!\n\nContoh: brat hai');
    }

    if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
    try {
        // Panggil API brat dengan teks yang diberikan
        const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        // Konversi gambar ke WebP jika diperlukan
        const sharp = require('sharp');
        const webpBuffer = await sharp(response.data)
            .webp()
            .toBuffer();

        // Kirim hasil sebagai stiker
        await nhbtx.sendMessage(m.chat, {
            sticker: webpBuffer,
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}
break
      case 'toimage':
      case 'toimg': {
        updatePopularCommand(command); // Mencatat command
        if(!quoted) return reply('Reply Image')
        if(!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
        await emote('⏱️');
        let media = await nhbtx.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if(err) throw err
          let buffer = fs.readFileSync(ran)
          nhbtx.sendMessage(m.chat, {
            image: buffer
          }, {
            quoted: m
          })
          fs.unlinkSync(ran)
        })
      }
      break
      case 'toptv': {
        updatePopularCommand(command); // Mencatat command
        if(/video/.test(mime)) return reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
        if((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
          const anu = await quoted.download()
          const msg = await generateWAMessageContent({
            video: anu
          }, {
            upload: nhbtx.waUploadToServer
          })
          await nhbtx.relayMessage(m.chat, {
            ptvMessage: msg.videoMessage
          }, {})
        } else {
          reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
        }
      }
      break
      case 'tourl': {
        updatePopularCommand(command); // Mencatat command
        try {
          if(/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading dan menyimpan key untuk edit nanti
            if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
            // Emoji yang akan digunakan
            const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
            // Mengirimkan reaksi secara berurutan
            for(const emoji of reactEmojis) {
              await nhbtx.sendMessage(m.chat, {
                react: {
                  text: emoji,
                  key: m.key
                }
              });
            }
            let media = await quoted.download();
            let anu = await UguuSe(media);
            // Mengedit pesan setelah URL dihasilkan
            m.reply('Url : ' + anu.url);
          } else {
            reply('Send Media yg ingin di Upload!');
          }
        } catch (e) {
          // Mengedit pesan error jika terjadi masalah
          m.reply('Server Uploader sedang offline!');
        }
      }
      break
      case 'img2ibb': {
        updatePopularCommand(command); // Mencatat command
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          if(/webp|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading
            await nhbtx.sendMessage(m.chat, {
              react: {
                text: '⏳',
                key: m.key
              }
            });
            // Unduh media
            let media = await quoted.download();
            let base64Media = media.toString('base64');
            // Kirim ke imgbb
            let response = await axios.post('https://api.imgbb.com/1/upload', qs.stringify({
              expiration: 31536000000, // 1000 tahun
              key: ibbKey,
              image: base64Media
            }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            // Ambil URL hasil
            let url = response.data.data.url;
            // Kirim URL ke pengguna
            m.reply(`Berhasil diunggah!\nURL: ${url}`);
          } else {
            reply('Harap kirim file media yang valid (jpg, png, dll.)!');
          }
        } catch (e) {
          console.error(e);
          m.reply('Terjadi kesalahan saat mengunggah file!');
        }
      }
      break
      case 'ttmp3':
      case 'tiktokmp3':
      case 'ttaudio':
      case 'tiktokaudio': {
        updatePopularCommand(command);
        if(!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) return m.reply('Url Tidak Mengandung Result Dari TikTok!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          const hasil = await tiktokDl(text);
          console.log('Hasil dari tiktokDl (audio):', JSON.stringify(hasil, null, 2));
          m.reply('Memproses, tunggu sebentar...');
          if(hasil && hasil.music_info && hasil.music_info.url) {
            await nhbtx.sendMessage(m.chat, {
              audio: {
                url: hasil.music_info.url
              },
              mimetype: 'audio/mpeg',
              contextInfo: {
                externalAdReply: {
                  title: 'TikTok • ' + hasil.author.nickname,
                  body: `${hasil.stats.likes} suka, ${hasil.stats.comment} komentar. ${hasil.title}`,
                  previewType: 'PHOTO',
                  thumbnailUrl: hasil.cover,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  sourceUrl: text,
                },
              },
            }, {
              quoted: m
            });
          } else {
            m.reply('Audio TikTok tidak ditemukan atau tidak valid!');
          }
        } catch (e) {
          console.error('Error saat memproses audio TikTok:', e);
          m.reply('Gagal memproses URL! Detail error: ' + e.message);
        }
      }
      break
      case 'addsewa':
        updatePopularCommand(command);
        if (!isOwner) return reply(mess.owners);
        if(!isGroup) return reply(mess.groups);
        pler.push(m.chat)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
        reply(`${command} Sukses Menambahkan Ke List Sewa✅`)
        break
      case 'delsewa':
        updatePopularCommand(command);
        if (!isOwner) return reply(mess.owners);
        if(!isGroup) return reply(mess.groups);
        var ini = pler.indexOf(m.chat)
        pler.splice(ini, 1)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
        reply(`${command} Sukses Menghapus Dari List Sewa✅`)
        break
      case 'ytmp3':
        updatePopularCommand(command); // Mencatat command
        if(!text) return reply('Kirim perintah dengan link YouTube!\nContoh: .ytmp3 https://youtu.be/xxxx');
        if(!isUrl(text)) return reply('Link yang Anda kirim tidak valid!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        await downloadMp3(text); // Panggil fungsi downloadMp3
        break
      case 'ytmp4':
        updatePopularCommand(command); // Mencatat command
        if(!text) return reply('Kirim perintah dengan link YouTube!\nContoh: .ytmp4 https://youtu.be/xxxx');
        if(!isUrl(text)) return reply('Link yang Anda kirim tidak valid!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        await downloadMp4(text); // Panggil fungsi downloadMp4
        break
      case 'owner': {
        updatePopularCommand(command);
        try {
          const carouselCards = [{
            header: {
              title: "Owner Bot",
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url: './NheBotxMedia/image/owner.jpg'
                }
              }, {
                upload: nhbtx.waUploadToServer
              })).imageMessage
            },
            body: {
              text: `━━━━━━ ✨ *${namabot}* ✨ ━━━━━━\n
🔰 *ATURAN PENGGUNA* 🔰\n
🚫 *Jangan spam*\n
   - Hindari mengirim pesan berulang-ulang dalam waktu singkat.\n
🤝 *Gunakan sopan*\n
   - Hargai bot dan pengguna lain dengan bahasa yang baik.\n
📵 *Hindari panggilan*\n
   - Panggilan langsung ke bot dapat menyebabkan pemblokiran otomatis.\n
\n
📌 *Tips:* Jika butuh bantuan, gunakan perintah yang tersedia atau hubungi owner bot.\n
━━━━━━ 🌟 *Terima Kasih* 🌟 ━━━━━━`
            },
            footer: {
              text: `${namaowner}`
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: `Owner (ᴹᴿ᭄𝖙ŋɢχོ ×፝֟͜×)`, //ganti jadi (${namaowner})
                  url: `https://wa.me/+${owner}`
                })
              }]
            }
          }, {
            header: {
              title: "Bot WhatsApp",
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url: './NheBotxMedia/image/bot.jpg'
                }
              }, {
                upload: nhbtx.waUploadToServer
              })).imageMessage
            },
            body: {
              text: `━━━━━━ ✨ *${namabot}* ✨ ━━━━━━\n
🔰 *BOT RULES* 🔰\n
🚷 *Tidak boleh spam*\n
   - Mengirim pesan secara berulang akan membuat bot berhenti merespons.\n
💬 *Tidak boleh berkata kasar*\n
   - Jaga bahasa yang digunakan agar tetap sopan dan menghargai semua pengguna.\n
📴 *Tidak boleh call*\n
   - Memanggil bot akan memicu pemblokiran otomatis oleh sistem.\n
\n
📌 *Tips:* Patuhi aturan ini agar pengalaman menggunakan bot tetap nyaman dan menyenangkan!\n
━━━━━━ 🔥 *Terima Kasih* 🔥 ━━━━━━`
            },
            footer: {
              text: `${namabot}`
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: `Botz (${namabot})🔑`,
                  url: `https://wa.me/+${botnum}`
                })
              }]
            }
          }];
          // Generate carousel message
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: "━━━━━━ ✨ *${namabot}* ✨ ━━━━━━\n📱 *Kontak Owner dan Bot* 📱\nJika memerlukan bantuan atau ingin berdiskusi, silakan hubungi kontak berikut! ✨\n🔗 *JANGAN LUPA SUPPORT FOLLOW* 🔗\n👉 *@erlyyarnda*: www.instagram.com/erlyyarnda\n👉 *@tngxaja*: www.instagram.com/tngxaja\n\n💳 *Donasi Dapat Melalui Payment Berikut* 💳\n━━━━━━━━━━━━━━━━━━━━━━━\n💵 [GOPAY]: 088989971490\n💵 [DANA]: 0881027174423\n💵 [OVO]: 088989971490\n💵 [SHOPEEPAY]: 087848784409\n🏦 [BANK-BCA]: 1230903219\n🏦 [BANK-DANAMON]: 903684075934\n🏦 [BANK-SEABANK]: 901484264240\n━━━━━━━━━━━━━━━━━━━━━━━\n✨ *Semua pembayaran atas nama*: *_LINTANG PRATAMA_* ✨\n\n📌 *Catatan:* Terima kasih atas dukungan dan kepercayaan Anda! 🙏\n━━━━━━ 🔥 *Terima Kasih* 🔥 ━━━━━━"
                  },
                  footer: {
                    text: `${namabot}`
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards
                  })
                })
              }
            }
          }, {});
          // Kirim pesan carousel
          await nhbtx.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
        } catch (error) {
          console.error("Kesalahan saat mengirim carousel:", error);
          await nhbtx.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
          }, {
            quoted: m
          });
        }
      }
      break
      case 'about': {
        updatePopularCommand(command); // Mencatat command
        reply(`*Asal Usul Bot WhatsApp NHEBotx 🤖✨*\nBot ini adalah karya dari MorelyOfc, seorang pengembang kreatif yang memiliki visi untuk memudahkan interaksi melalui teknologi. 🔧 Awalnya, ide ini muncul dari keinginan sederhana untuk menciptakan asisten digital yang dapat membantu menjawab pesan secara otomatis. Namun, seiring waktu, bot ini berkembang menjadi sesuatu yang lebih besar dan berguna bagi banyak orang. 🚀\n\n*_Perjalanan Pengembangan Bot MorelyOfc: Dari Awal hingga Sukses 🌱➡️🌳_*\n*1. Ide Awal 💪*\nPada tahap pertama, MorelyOfc mendapatkan inspirasi dari pengalaman sehari-hari. Banyak pesan yang tidak terjawab karena kesibukan, sehingga muncul ide untuk membuat bot sederhana yang dapat merespons pesan otomatis di WhatsApp.\n*2. Tahap Riset dan Persiapan 📚🔍*\nUntuk mewujudkan ide tersebut, MorelyOfc memulai riset mendalam. Dia mempelajari:\n_API WhatsApp 📲_\n_Bahasa pemrograman JavaScript 🖥️_\n_Framework seperti Node.js dan pustaka pendukung seperti Baileys_\n*3. Pengembangan Awal 🚧*\n*Tahap ini melibatkan eksperimen untuk membuat bot pertama. 🎛️ MorelyOfc memulai dengan fitur sederhana seperti:*\n_Auto-reply pesan ✉️_\n_Menyapa pengguna dengan ramah 😊_\n_Membalas dengan respons yang telah ditentukan_\n*Fitur Unggulan Bot MorelyOfc 🌟*\n✅ Auto-Reply Cerdas: Merespons pesan dengan cepat dan sesuai konteks.\n✅ Pembuatan Stiker Otomatis: Kirim gambar, dan bot akan mengubahnya menjadi stiker.\n✅ Informasi Cuaca: Dapatkan laporan cuaca terkini.\n✅ Penerjemahan: Mendukung berbagai bahasa.\n✅ Game Sederhana: Hiburan kecil dengan kuis dan tebak-tebakan.\n*Semangat dan Harapan dari Pengembang MorelyOfc 🎯*\n_Bot ini dikembangkan dengan dedikasi tinggi dan semangat inovasi. ✨ Harapan MorelyOfc adalah agar bot ini bisa menjadi teman digital yang membantu, menghibur, dan bermanfaat bagi semua pengguna. 🎉_\n_Jika Anda punya ide baru untuk fitur atau masukan, jangan ragu untuk menghubungi MorelyOfc! 😊👏_`);
      }
      break
      case 'nhbtxai': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(args[0] === 'on') {
          if(autoAiStatus) {
            return m.reply('Peringatan: autoAi sudah diaktifkan sebelumnya!');
          }
          autoAiStatus = true;
          return m.reply('autoAi diaktifkan! Sekarang semua pesan akan diproses secara otomatis.');
        } else if(args[0] === 'off') {
          if(!autoAiStatus) {
            return m.reply('Peringatan: autoAi sudah dinonaktifkan sebelumnya!');
          }
          autoAiStatus = false;
          return m.reply('autoAi dinonaktifkan! Pesan tidak akan diproses secara otomatis.');
        } else {
          const warnn = "Click button NHEAi di bawah ini sesuai dengan perintah yang king mau 👑";
          nhbtx.sendMessage(m.chat, {
            text: warnn,
            footer: namabot,
            buttons: [{
              buttonId: `${prefix}nhbtxai on`,
              buttonText: {
                displayText: "NheBotxAI ON🌵"
              }
            }, {
              buttonId: `${prefix}nhbtxai off`,
              buttonText: {
                displayText: "NheBotxAi OFF🥦"
              }
            }],
            viewOnce: true,
          });
        }
        break
      }
      case 'setprompt': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(!text) return m.reply(`Example: ${prefix + command} prompt text`);
        prompt = text;
        m.reply(`Prompt berhasil diatur:\n"${prompt}"`);
        break
      }
      case 'delcase': {
        updatePopularCommand(command);
        if (!isOwner) return reply(mess.owners);
        if(!q) return m.reply(`Contoh: ${prefix+command} nama case`);
        const fs = require('fs').promises;
        async function dellCase(filePath, caseNameToRemove) {
          try {
            let data = await fs.readFile(filePath, 'utf8');
            const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
            const modifiedData = data.replace(regex, '');
            if(data === modifiedData) {
              m.reply('Case tidak ditemukan atau sudah dihapus.');
              return;
            }
            await fs.writeFile(filePath, modifiedData, 'utf8');
            m.reply('Sukses menghapus case!');
          } catch (err) {
            m.reply(`Terjadi kesalahan: ${err.message}`);
          }
        }
        dellCase('./case.js', q);
      }
      break
      case 'addcase': {
        updatePopularCommand(command);
        if(!isCreator && !isOwner) return reply(mess.owners)
        if(!text) return reply('Tambahkan case yang ingin di masukan');
        const namaFile = './case.js';
        const caseBaru = `${text}`;
        fs.readFile(namaFile, 'utf8', (err, data) => {
          if(err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
          }
          const posisiAwalGimage = data.indexOf("case 'addcase':");
          if(posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
              if(err) {
                reply('Error File:', err);
              } else {
                reply('Sukses Menambahkan case');
              }
            });
          } else {
            reply('Gagal Menambahkan case');
          }
        });
      }
      break
      case 'pushcontact': {
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if(!isGroup) return reply(mess.groups);
        var name = text.split('/')[0];
        var chet = text.split('/')[1];
        if(!name) return m.reply(`Contoh: ${prefix + command} nama/pesan`);
        if(!chet) return m.reply(`Contoh: ${prefix + command} nama/pesan`);
        let kontak = {
          displayName: "Contact",
          contacts: [{
            displayName: name,
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }]
        }
        let push = await nhbtx.groupMetadata(m.chat)
        if(push.participants.length > 300) return m.reply('Batas member maksimal: *300*')
        await m.reply('sabar ajg');
        for(let a of push.participants) {
          const repf = await nhbtx.sendMessage(a.id, {
            contacts: kontak
          })
          nhbtx.sendMessage(a.id, {
            text: chet
          }, {
            quoted: repf
          })
          await sleep(1000);
        }
        await m.reply('uwes cik');
      }
      break
      case "closetime":
        updatePopularCommand(command);
        if(!isGroup) return reply(mess.groups);
        if(!isAdmins) return reply(mess.admins);
        if(!isBotAdmins) return reply(mess.abots);
        if(args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if(args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if(args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if(args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        reply(`Close time grup ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          nhbtx.groupSettingUpdate(from, "announcement");
          reply(close);
        }, timer);
        break
      case 'spotify':
      case 'spotifysearch': {
        updatePopularCommand(command); // Mencatat command
        if(!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
          let txt = hasil.map(a => {
            return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
          }).join`\n\n`
          reply(txt)
        } catch (e) {
          m.reply('Server Search Offline!')
        }
      }
      break
      case 'suit': {
updatePopularCommand(command); // Mencatat command
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return reply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				reply(hasil);
				break
				}
      case 'delete':
      case 'del':
      case 'd': {
        updatePopularCommand(command); // Mencatat command
        if(!m.quoted) return m.reply('Reply pesan yang mau di delete')
        await nhbtx.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: m.isBotAdmins ? false : true,
            id: m.quoted.id,
            participant: m.quoted.sender
          }
        })
      }
      break
      case 'spotifydl': {
        updatePopularCommand(command); // Mencatat command
        if(!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
        if(!isUrl(args[0]) || !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          // Fetching data from the API
          let res = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${text}`);
          let json = await res.json();
          if(!json.status) return m.reply('Error: Unable to fetch data from the API.');
          let {
            metadata,
            download
          } = json;
          // Sending audio with context info
          await nhbtx.sendMessage(m.chat, {
            audio: {
              url: download
            },
            fileName: `${metadata.name} - ${metadata.artist}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
              externalAdReply: {
                title: metadata.name,
                body: `${metadata.album_name} - ${metadata.artist}`,
                thumbnailUrl: metadata.cover_url,
                sourceUrl: metadata.url, // Spotify URL
                mediaType: 1,
                mediaUrl: metadata.url, // Spotify URL
              },
            },
          }, {
            quoted: hw
          });
          m.reply('Musik berhasil dikirim, selamat menikmati!');
        } catch (e) {
          console.error(e);
          m.reply('Error: Server download sedang offline atau API bermasalah!');
        }
      }
      break
      //OPENTIME
      case "opentime":
        updatePopularCommand(command);
        if(!isGroup) return reply(mess.groups);
        if(!isAdmins) return reply(mess.admins);
        if(!isBotAdmins) return reply(mess.abots);
        if(args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if(args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if(args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if(args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        reply(`Open time grup ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          nhbtx.groupSettingUpdate(from, "not_announcement");
          reply(open);
        }, timer);
        break
      case 's':
      case 'sticker':
      case 'stiker': {
        updatePopularCommand(command);
        if(!quoted) return m.reply(`Kirim/Balas Gambar/Video dengan caption ${prefix + command}\nDurasi video maksimal 9 detik!`);
        if(!mime) return m.reply('Mime type tidak dikenali!');
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        if(/image|webp/.test(mime)) {
          try {
            let media = await quoted.download();
            const mediaPath = './temp/media_image.jpg';
            const outputPath = './temp/cropped_image.webp';
            fs.writeFileSync(mediaPath, media);
            if(!fs.existsSync(mediaPath)) {
              return m.reply('File gambar gagal disimpan!');
            }
            ffmpeg(mediaPath).outputOptions(['-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512']).outputFormat('webp').output(outputPath).on('end', () => {
              nhbtx.sendMessage(m.chat, {
                sticker: fs.readFileSync(outputPath),
                packname: global.packname,
                author: global.author
              }, {
                quoted: m
              })
              fs.unlinkSync(mediaPath);
              fs.unlinkSync(outputPath);
            }).on('error', (err) => {
              console.error('Error saat membuat stiker gambar:', err);
              m.reply('Terjadi kesalahan saat membuat stiker gambar. 😞');
              fs.unlinkSync(mediaPath);
            }).run();
          } catch (err) {
            console.error('Error download gambar:', err);
            m.reply('Gagal mendownload gambar! 😞');
          }
        } else if(/video/.test(mime)) {
          if((quoted.msg || quoted).seconds > 11) {
            return m.reply('Durasi video maksimal 9 detik untuk stiker!');
          }
          try {
            let media = await quoted.download();
            const mediaPath = './temp/media_video.mp4';
            const outputPath = './temp/cropped_video.webp';
            fs.writeFileSync(mediaPath, media);
            if(!fs.existsSync(mediaPath)) {
              return m.reply('File video gagal disimpan!');
            }
            ffmpeg(mediaPath).outputOptions(['-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512']).outputFormat('webp').output(outputPath).on('end', () => {
              nhbtx.sendMessage(m.chat, {
                sticker: fs.readFileSync(outputPath),
                packname: global.packname,
                author: global.author
              }, {
                quoted: m
              })
              fs.unlinkSync(mediaPath);
              fs.unlinkSync(outputPath);
            }).on('error', (err) => {
              console.error('Error saat membuat stiker video:', err);
              m.reply('Terjadi kesalahan saat membuat stiker video. 😞');
              fs.unlinkSync(mediaPath);
            }).run();
          } catch (err) {
            console.error('Error download video:', err);
            m.reply('Gagal mendownload video! 😞');
          }
        } else {
          m.reply(`Kirim atau balas gambar/video dengan caption ${prefix + command}`);
        }
      }
      break
      case 'smeme':
case 'stickmeme':
case 'stikmeme':
case 'stickermeme':
case 'stikermeme': {
updatePopularCommand(command); // Mencatat command
    if (!quoted) return reply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
    if (!mime) return reply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
    await emote('⏱️');
    
    const atas = text.split('|')[0] || '-';
    const bawah = text.split('|')[1] || '-';
    
    try {
        if (/image/.test(mime) && /webp/.test(mime)) {
            const media = await nhbtx.downloadAndSaveMediaMessage(quoted);
            if (!media) return reply(`❌ Gagal mengunduh gambar. Coba lagi ya!`);
            
            // Unggah gambar ke Uguu.se
            const upload = await UguuSe(media);
            if (!upload || !upload.url) return reply(`❌ Gagal mengunggah gambar. Coba lagi nanti ya!`);
            
            // Buat URL API untuk stiker meme
            const smemeUrl = `https://api.siputzx.my.id/api/m/memgen?link=${upload.url}&top=${encodeURIComponent(atas)}&bottom=${encodeURIComponent(bawah)}&font=1`;
            
            // Ambil hasil dari API sebagai buffer
            const smeme = await getBuffer(smemeUrl);
            if (!smeme) return reply(`❌ Gagal membuat stiker meme. Coba lagi ya!`);
            
            // Kirim hasil sebagai stiker
            await nhbtx.sendImageAsStickers(m.chat, smeme, m, {
                packname: global.packname,
                author: global.author
            });
        } else {
            reply(`⚠️ Kirim/reply gambar dengan caption: ${prefix + command} text1|text2`);
        }
    } catch (error) {
        console.error(error);
        await reply(`❌ Halo Developer! Sepertinya ada kesalahan nih... Tolong diperiksa ya~ 🥺✨\n\n*Error:* ${error.message}`);
    }
}
break
      case 'tqto': {
        updatePopularCommand(command); // Jika menggunakan fungsi untuk mencatat penggunaan command
        const url = 'https://raw.githubusercontent.com/NHEBotx/HelloUserNHEBotx/refs/heads/main/data.json';
        const response = await fetch(url);
        const data = await response.json();
        // Kirim pesan dengan data yang didapatkan menggunakan reply()
        const message = `*${c}Thanks To:${c}*\n${data.tqto}\n\n*${c}Owner Bot:${c}*\n${data.owners}\n\n${c}Group & Channel${c}\n*Gc:* ${wagc}\n*Ch:* ${wach}`;
        nhbtx.sendMessage(m.chat, {
          image: tqq,
          caption: message,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'tiktokslide':
      case 'ttslide': {
        updatePopularCommand(command);
        if(!text) {
          console.log('Teks URL TikTok tidak ditemukan.');
          return m.reply(`Example: ${prefix + command} url_tiktok`);
        }
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) {
          console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
          return m.reply('URL Tidak Mengandung Result Dari TikTok!');
        }
        if (!firely(m, '⏳ Sedang memproses...')) return; // Jika limit habis, proses berhenti di sini
        try {
          console.log('Memulai proses pengunduhan dari URL TikTok:', text);
          const hasil = await tiktokDl(text);
          if(!hasil || !hasil.data || hasil.data.length === 0) {
            console.log('Tidak ada gambar atau media yang ditemukan.');
            return m.reply('Tidak ada foto yang ditemukan!');
          }
          // Buat carousel card untuk setiap gambar
          const carouselCards = await Promise.all(hasil.data.map(async (item, index) => {
            return {
              header: {
                title: `Foto ${index + 1}`,
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                  image: {
                    url: item.url
                  }
                }, {
                  upload: nhbtx.waUploadToServer
                })).imageMessage,
              },
              body: {
                text: `Foto ${index + 1} dari TikTok`,
              },
              footer: {
                text: "Klik tombol untuk melihat lebih detail",
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Lihat di TikTok",
                    url: text,
                  }),
                }, {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Unduh Foto",
                    url: item.url,
                  }),
                }],
              },
            };
          }));
          // Buat pesan carousel
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: `Hasil foto dari TikTok: ${text}`
                  },
                  footer: {
                    text: "TikTok Slide Bot by NHE"
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards,
                  }),
                }),
              },
            },
          }, {});
          // Kirim pesan carousel
          await nhbtx.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
          console.log('Carousel dikirimkan dengan sukses.');
        } catch (e) {
          console.error('Gagal mengunduh atau membuat carousel:', e);
          m.reply('Gagal memproses permintaan Anda. Silakan coba lagi.');
        }
      }
      break
      case 'tesbtn': {
        const wawa = `halo njir wkwk`
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: wawa
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: fs.readFileSync('./NheBotxMedia/image/owner.jpg')
                  }, {
                    upload: nhbtx.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"YouTube 💛\",\"url\":\"https://www.youtube.com/@Kiqozho_official\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/QozhoStore\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VanqPsCEFeXhWmSSis33\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363222395675670@newsletter',
                    newsletterName: namaowner,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await nhbtx.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'getcase': {
updatePopularCommand(command); // Mencatat command
        if (!isOwner) return reply(mess.owners);
        if (!text) return reply('Masukkan Nama Casenya!')
        try {
          const getCase = (cases) => {
            return "case" + `'${cases}'` + fs.readFileSync("case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
          }
          reply(`${getCase(text)}`)
        } catch (e) {
          reply(`case ${text} tidak ditemukan!`)
        }
      }
      break
      case 'mode': {
        updatePopularCommand(command);
        if(!isOwner) return nhbtx.sendMessage(from, {
          text: mess.owners
        });
        if(!text) {
          const warnn = "⚙️ Pilih mode bot di bawah ini:";
          nhbtx.sendMessage(from, {
            text: warnn,
            footer: namabot,
            buttons: [{
              buttonId: `${prefix}mode self`,
              buttonText: {
                displayText: "SELF 🔥"
              }
            }, {
              buttonId: `${prefix}mode public`,
              buttonText: {
                displayText: "PUBLIC 👑"
              }
            }],
            viewOnce: true,
          });
          return;
        }
        if(text.toLowerCase() === 'self') {
          global.public = false;
          nhbtx.sendMessage(from, {
            text: '✅ Bot sekarang dalam mode *SELF*. Hanya pemilik yang dapat menggunakan bot.'
          });
        } else if(text.toLowerCase() === 'public') {
          global.public = true;
          nhbtx.sendMessage(from, {
            text: '✅ Bot sekarang dalam mode *PUBLIC*. Semua orang dapat menggunakan bot.'
          });
        } else {
          nhbtx.sendMessage(from, {
            text: '❌ Mode tidak valid! Gunakan *self* atau *public*.'
          });
        }
        break
      }
      case "casecek": {
        updatePopularCommand(command);
        if (!isOwner) return reply(mess.owners);
        fs.readFile("./case.js", "utf8", (err, data) => {
          if(err) throw err
          let regex = /case\s"(\w+)"/g
          let match, caseNames = []
          while((match = regex.exec(data)) !== null) {
            caseNames.push(match[1])
          }
          let output = `${simbols} ` + caseNames.join(`\n${simbols} `)
          reply(output + `\n\nTotal case : ${caseNames.length}`)
        })
      }
      break
      //===========[ YANG UDAH SUPPORT MKSH YH ]=============\\
      /*
             •       #SCBOTWATERMUX #TERMUXNEVERDIE🔥   
             •    #BOTWAONLYTERMUX #WHATSAPPBOTTERMUX
             •       #SYCHYY #SYCHEE # NheBotx #NHEBotx
             
         * 💬NOTE : 
         * ⚠️ DILARANG MENJUAL SCRIPT INI WAHAI PARA JB KONTOL
         * ⚠️ DILARANG MENGKLAIM BAHWA INI BOT BUATAN SENDIRI‼️
         * ⚠️ JANGAN HAPUS KREDIT DIBAWAH‼️⚡
         * 🔥 SUPPORT KAMI NheBotx && SYCHYY && NHEBotx
         * 👑 SC BY SHO - NHEBotx [Yuda-Orlin]
         * 💧 ©NHE-NHEBotx - 2025
      */
      //===================[ BATAS CASE ]=====================\\
      // AutoAI Message Handling
      default:
        // Jika AutoAI aktif dan pengirim bukan bot atau respons dari AI, proses pesan
        if(autoAiStatus 
        && m.sender !== botNumber 
        && !(m.quoted 
        && m.quoted.sender === botNumber) 
        && !m.key.fromMe
        ) {
          const chatId = m.chat; // Gunakan ID chat untuk membedakan percakapan
          const userMessage = m.text;
          // Inisialisasi riwayat percakapan jika belum ada
          if(!conversationHistory[chatId]) {
            conversationHistory[chatId] = [{
              role: "system",
              content: prompt
            }];
          }
          // Tambahkan pesan pengguna ke riwayat percakapan
          conversationHistory[chatId].push({
            role: "user",
            content: userMessage
          });
          // Buat prompt tanpa format "User:" atau "AI:"
          const fullPrompt = conversationHistory[chatId].map(entry => entry.content) // Hanya ambil isi pesan
            .join("\n");
          try {
            let hasil = await yanzGpt(fullPrompt); // Kirim riwayat ke AI
            const aiReply = hasil.choices[0].message.content;
            // Tambahkan balasan AI ke riwayat percakapan
            conversationHistory[chatId].push({
              role: "ai",
              content: aiReply
            });
            // Kirim balasan ke pengguna
            m.reply(aiReply);
            // Tambahkan pencatatan command
            updatePopularCommand('ai');
          } catch (e) {
            try {
              let hasil = await bk9Ai(fullPrompt);
              const aiReply = hasil.BK9;
              // Tambahkan balasan AI ke riwayat percakapan
              conversationHistory[chatId].push({
                role: "ai",
                content: aiReply
              });
              // Kirim balasan ke pengguna
              m.reply(aiReply);
              updatePopularCommand('ai');
            } catch (e) {
              m.reply(pickRandom(['Fitur AI sedang bermasalah!', 'Tidak dapat terhubung ke AI!', 'Sistem AI sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!', ]));
            }
          }
        }
        if((budy) && ["assalamu'alaikum", "Assalamu'alaikum", "Assalamualaikum", "assalamualaikum", "Assalammualaikum", "assalammualaikum", "Asalamualaikum", "asalamualaikum", "Asalamu'alaikum", " asalamu'alaikum"].includes(budy) && !isCmd) {
          nhbtx.sendMessage(from, {
            text: `${pickRandom(["*Wa'alaikumussalam*","*Wa'alaikumussalam Wb.*","*Wa'alaikumussalam Wr. Wb.*","*Wa'alaikumussalam Warahmatullahi Wabarakatuh*"])}`
          })
        }
        if((budy) && ["tes", "Tes", "TES", "Test", "test"].includes(budy) && !isCmd) {
          nhbtx.sendMessage(from, {
            text: `*${runtime(os.uptime())}*⏰`
          })
        }
        if(budy.startsWith('=>')) {
          if(!isOwner) return

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if(sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            reply(String(e))
          }
        }
        if(budy.startsWith('>')) {
          if(!isOwner) return
          let kode = budy.trim().split(/ +/)[0]
          let teks
          try {
            teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
          } catch (e) {
            teks = e
          } finally {
            await reply(require('util').format(teks))
          }
        }
        if(budy.startsWith('$')) {
          if(!isOwner) return
          exec(budy.slice(2), (err, stdout) => {
            if(err) return reply(`${err}`)
            if(stdout) return reply(stdout)
          })
        }
    }
  } catch (err) {
    console.log(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})
/*
     Thanks You For:
     NHE Botz ⚡
     Yurins? Yuda-Orlin 💘💧
     Zoi 🪨
     Ruri 🌈
     HenriqueX ☢️
     Puguh 🛡️
     RicoRoyco 🔥
     Case Copas by Khalid ⬇️
*/
