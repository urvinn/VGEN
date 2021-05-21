exports.wait = () => {
	return`*Please Wait....*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*Lu Blom Daftar Broh*\n*Daftar Dulu Dengan Cara*\n\nketik : @gen`
}

exports.baned = () => {
	return`*「❗」You have been banned !*`
}

exports.premium = (prefix) => {
	return`Fitur ini khusus user premium!
Upgrade ke premium cuman 2k
Jika minat hubungi owner ku
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Udah Daftar,Ngapain Daftar Lagi Bjir*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」FITUR INI KHUSUS GRUB*`
}

exports.ownerb = () => {
	return`*「❗」FITUR INI KHUSUS OWNER*`
}

exports.ownerg = () => {
	return`*「❗」FITUR INI KHUSUS  OWNER*`
}

exports.admin = () => {
	return`*「❗」FITUR INI KHUSUS ADMIN GROUP*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS MENJADI ADMIN!*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana syg?*`
}

exports.clears = () => {
	return`*Sukses Pak*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
❏「 *LEVEL UP !* 」
│
├ ❏ *Nama* : ${pushname}
├ ❏ *Nomor* : ${sender.split("@")[0]}
├ ❏ *Xp* : ${getLevelingXp(sender)}
├ ❏ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
╰──────────
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 2K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '*UNLIMITED*' : `${limitCounts}`}

Upgrade premium bosku,biar bebas gunain bot & Bisa memakai fitur khusus premium `
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 083806054217
Gopay/Ovo/Dana : Chat Owner,Ketik *#owner*

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`       [ 「 *IKLAN ${botName}* 」 ]
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 10K/GRUP (BULAN)*
◯ *BUAT : 80K (BISA JADI OWNER)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *GOPAY, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
       [「 *POWERED BY ${ownerName}* 」]`
}