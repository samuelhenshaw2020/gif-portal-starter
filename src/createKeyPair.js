
const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()
// console.log(account)
fs.writeFileSync('./keypair.json', JSON.stringify(account))