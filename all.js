'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] SUKA BOT V1",
        "[2] SUKA BOT V2",
        "[3] HAPUS SEMUA MEDIA",
        "[4] BATAL MENGIKUTI SEMUA MENGIKUTI",
        "[5] BATAL MENGIKUTI SEMUA TIDAK MENGIKUTI BALIK",
        "[6] MENGIKUTI DENGAN TARGET ",
        "[7] MENGIKUTI VIA ID ",
        "[8] MENGIKUTI VIA Hastag",
        "[9] MENGIKUTI VIA LOKASI",
        "[10] MENGIKUTI TANPA LIKE",
	"[11] MRNGIKUTI TANPA SUKA DAN KOMEN",
        "[12] LIKE POST NOT WORK",
	"[12] BOM KOMEN Target",
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] SUKA BOT v1":
        const botlike = require('./botlike.js');
        await botlike();
        break;

      case "[2] SUKA BOT  v2":
        const botlike2 = require('./botlike2.js');
        await botlike2();
        break;

      case "[3] HAPUS SEMUA MEDIA":
        const dellallphoto = require('./dellallphoto.js');
        await dellallphoto();
        break;

      case "[4] BATAL MENGIKUTI SEMUA MENGIKUTI":
        const unfollall = require('./unfollall.js');
        await unfollall();
        break;

      case "[5] BATAL MENGIKUTI SEMUA TIDAK MENGIKUTI BALIK":
        const unfollnotfollback = require('./unfollnotfollback.js');
        await unfollnotfollback();
        break;

      case "[6] MENGIKUTI DENGAN TARGET ":
        const fftauto = require('./fftauto.js');
        await fftauto();
        break;

      case "[7] Follow Account By Media":
        const flmauto = require('./flmauto.js');
        await flmauto();
        break;

      case "[8] Follow Account By Hastag":
        const fah = require('./fah.js');
        await fah();
        break;

      case "[9] Follow Account By Location":
        const flaauto = require('./flaauto.js');
        await flaauto();
        break;
		
	   case "[10] Follow Followers Target No Like":
        const fft = require('./fft.js');
        await fft();
        break;

	   case "[11] MRNGIKUTI TANPA SUKA DAN KOMEN":
        const fftold = require('./fftold.js');
        await fftold();
        break;
	   case "[12] Bom Like Post Target":
        const bomlike = require('./bomlike.js');
        await bomlike();
        break;
	 case "[13] Bom Komen Post Target":
        const bomkomen = require('./bomkomen.js');
        await bomkomen();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  
  

 RIO O 

    \
     \
                                   .::!!!!!!!:.
  .!!!!!:.                        .:!!!!!!!!!!!!
  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW$$$
      :$$NWX!!:           .:!!!!!!XUWW$$$$$$$$$P
      $$$$$##WX!:      .<!!!!UW$$$$"  $$$$$$$$#
      $$$$$  $$$UX   :!!UW$$$$$$$$$   4$$$$$*
      ^$$$B  $$$$\     $$$$$$$$$$$$   d$$R"
        "*$bd$$$$      '*$$$$$$$$$$$o+#"
             """"          """""""
 ___   _     _____     _______   _   _
|_ _| | |   / _ \ \   / / ____| | | | |
 | |  | |  | | | \ \ / /|  _|   | | | |
 | |  | |__| |_| |\ V / | |___  | |_| |
|___| |_____\___/  \_/  |_____|  \___/


  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2019-2020
   ║ │ ││ ││  └─┐   RIOO
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()
