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

const { spawn } = require('child_process')
const path = require('path')

function startnhbtx() {
	let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
	console.log([process.argv[0], ...args].join('\n'))
	let p = spawn(process.argv[0], args, {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting Bot...')
			p.kill()
			startnhbtx()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == '.' || code == 1 || code == 0) startnhbtx()
	})
}
startnhbtx()
/*
     Thanks You For:
     nhbtx Botz ⚡
     Yurins? Yuda-Orlin 💘💧
     Zoi 🪨
     Ruri 🌈
     HenriqueX ☢️
     Puguh 🛡️
     RicoRoyco 🔥
  Mau ganti owner? di file ./owner.json
  Note: Jangan hapus tqto diatas, tanpa dia kalian ga bakal bisa dapet sc ini‼️
*/