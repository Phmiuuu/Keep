require("./module")

global.owner = "6289687537657"
global.namabot = "KyuuAlways"
global.namaCreator = "PhmiMods"
global.autoJoin = false
global.antilink = false
global.autoTyping = false 
global.autoRecord = true
global.versisc = '3.0.0'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://sambotz.panellstore.xyz' // Isi Domain Lu
global.apikey = 'ptla_LWzSezWRu7OqPZ5iPitAGkXZs7zf5pqcz6fZ7GaeJmX' // Isi Apikey Plta Lu
global.capikey = 'ptlc_AO86AVaWygLJoMkdBD4IO5GGLdNRHE1BMeJq2dSF7dK' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By PhmiMods"
global.jumlah = "5"
global.menu = fs.readFileSync("./Keepmods/logo.png")
global.bugmenu = fs.readFileSync("./Keepmods/bugmenu.png")

global.bug = fs.readFileSync("./Keepmods/bug.png")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})