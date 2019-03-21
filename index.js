var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: "communitycontrollerplus",
    password: "OAUTH KEY GOES HERE"
  },
  channels: ["CommunityController"]
};

var client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  //client.action("CommunityController", "is connected. for information on how to use, use $help ");
  client.action("CommunityController", "reconnected. ");
});

// Code:


  var R = 0

client.on("chat", (channel, user, message, self) => {
  // Prayer

  if (message === "$resp")
    client.say("CommunityController", `${user["username"]} payed respects. to check respect count, use $respcount.`),
	R+=1;
  if (message === "$respcount")
    client.say("CommunityController", `${R} people have payed respect since last reconnect.`);

// Smash
  if (message === "$sml")
    client.say("CommunityController", "smash left ");
  if (message === "$smr")
    client.say("CommunityController", "smash right ");
  if (message === "$smu")
    client.say("CommunityController", "smash up ");
  if (message === "$smd")
    client.say("CommunityController", "smash down ");

  if (message === "$pbsml") 
    client.say("CommunityController", "a, smash left, hold zr, start ");
  if (message === "$pbsmr") 
    client.say("CommunityController", "a, smash right, hold zr, start ");
  if (message === "$pbsmu")
    client.say("CommunityController", "a, smash up, hold zr, start ");
  if (message === "$pbsmd") 
    client.say("CommunityController", "a, smash down, hold zr, start ");
// Special

  if (message === "$spl")
    client.say("CommunityController", "special left ");
  if (message === "$spr")
    client.say("CommunityController", "special right ");
  if (message === "$spu")
    client.say("CommunityController", "special up ");
  if (message === "$spd")
    client.say("CommunityController", "special down ");

  if (message === "$pbspl") 
    client.say("CommunityController", "a, special left, hold zr, start ");
  if (message === "$pbspr") 
    client.say("CommunityController", "a, special right, hold zr, start ");
  if (message === "$pbspu")
    client.say("CommunityController", "a, special up, hold zr, start ");
  if (message === "$pbspd") 
    client.say("CommunityController", "a, special down, hold zr, start ");

// COMBOS:

  if (message === "$tomol")
    client.say("CommunityController", "a, hold zr, hold zr, hold smash left, menu ");
  if (message === "$tomor")
    client.say("CommunityController", "a, hold zr, hold zr, hold smash right, menu ");

  if (message === "$recoverl")
    client.say("CommunityController", "a, hop, special up, hold left, menu, ");
  if (message === "$recoverr")
    client.say("CommunityController", "a, hop, special up, hold right, menu ");
  if (message === "$recover")
    client.say("CommunityController", "a, hop, special up, menu "); 


// OTHER FUNCTIONS
  if (message === "$pic")
    client.say("CommunityController", "down, a, hold a, hold a, hold b, up");
//CORE

// NON CONTROL
// Fetch instructions
/*

  if (message === "$help")
    client.say("CommunityController", "tinyurl.com/ComConPlus ");

*/

  if (message === "$test")
    client.say("CommunityController", "test ");
  if (message === "$owner")
    client.action("CommunityController", "was made by Daniel Bradbury ");
  if (message === "$creator")
    client.action("CommunityController", "was made by Daniel Bradbury ");
// Passive
// gg

  if (message === "gg")
    client.say("CommunityController", "GG KappaPride");
  if (message === "GG")
    client.say("CommunityController", "GG KappaPride");
  if (message === "Gg")
    client.say("CommunityController", "GG KappaPride");
//f / rip

  if (message === "f")
    client.say("CommunityController", "rip :/");
  if (message === "F")
    client.say("CommunityController", "rip :/");
  if (message === "rip")
    client.say("CommunityController", "F :/");
  if (message === "RIP")
    client.say("CommunityController", "F :/");
  if (message === "Rip")
    client.say("CommunityController", "F :/");
// lol

  if (message === "lol")
    client.say("CommunityController", "LUL");
  if (message === "LOL")
    client.say("CommunityController", "LUL");
//oof

  if (message === "oof")
    client.say("CommunityController", "OOF!");
  if (message === "OOF")
    client.say("CommunityController", "OOF!");
  if (message === "Oof")
    client.say("CommunityController", "OOF!");
// kek

  if (message === "kek")
    client.say("CommunityController", "KappaPride");
  if (message === "KEK")
    client.say("CommunityController", "KappaPride");
  if (message === "Kek")
    client.say("CommunityController", "KappaPride");
//BotTalk

  if (message === "$encourage")
    client.say("CommunityController", "You can do it! CoolCat");
//EMOTES:

  if (message === "$illipinati")
    client.say("CommunityController", "TheIlluminati 👄 TheIlluminati");
  if (message === "$isaacwings")
    client.say("CommunityController", "MercyWing1 BibleThump MercyWing2");
  if (message === "$purplepower")
    client.say("CommunityController", "PowerUpL EntropyWins PowerUpR");
  if (message === "$copypasta")
    client.say("CommunityController", "copyThis pastaThat");
  if (message === "$robosquid")
    client.say("CommunityController", "Squid1 Squid2 Squid3 Squid4");
  if (message === "$squiddab")
    client.say("CommunityController", "Squid1 HotPokket Squid4");
  if (message === "$lenny")
    client.say("CommunityController", "( ͡° ͜ʖ ͡°)");
  
// DISCORD LINK:

// CONTROL
// Normal

  if (message === "$l")
    client.say("CommunityController", "left ");
  if (message === "$r")
    client.say("CommunityController", "right ");
  if (message === "$lb")
    client.say("CommunityController", "lb ");
  if (message === "$rb")
    client.say("CommunityController", "rb ");
  if (message === "$u")
    client.say("CommunityController", "up ");
  if (message === "$d")
	client.say("CommunityController", "down ");
  if (message === "$a")
    client.say("CommunityController", "a ");
  if (message === "$b")
    client.say("CommunityController", "b ");
  if (message === "$x")
    client.say("CommunityController", "x ");
  if (message === "$y")
    client.say("CommunityController", "y ");
  if (message === "$s")
    client.say("CommunityController", "start ");
// Other cases

  if (message === "$j")
    client.say("CommunityController", "jump ");
  if (message === "$m")
    client.say("CommunityController", "menu ");

// Hold

  if (message === "$hl")
    client.say("CommunityController", "hold left ");
  if (message === "$hr")
    client.say("CommunityController", "hold right ");
  if (message === "$hlb")
    client.say("CommunityController", "hold lb ");
  if (message === "$hrb")
    client.say("CommunityController", "hold rb ");
  if (message === "$hu")
    client.say("CommunityController", "hold up ");
  if (message === "$hd")
    client.say("CommunityController", "hold down ");
  if (message === "$ha")
    client.say("CommunityController", "hold a ");
  if (message === "$hb")
    client.say("CommunityController", "hold b ");
  if (message === "$hx")
    client.say("CommunityController", "hold x ");
  if (message === "$hy")
    client.say("CommunityController", "hold y ");

  if (message === "$hsmu")
    client.say("CommunityController", "hold smash up ");
  if (message === "$hsmd")
    client.say("CommunityController", "hold smash down ");
  if (message === "$hsml")
    client.say("CommunityController", "hold smash left ");
  if (message === "$hsmr")
    client.say("CommunityController", "hold smash right ");
// Adjust

  if (message === "$al")
    client.say("CommunityController", "adjust left ");
  if (message === "$ar")
    client.say("CommunityController", "adjust right ");
  if (message === "$au")
    client.say("CommunityController", "adjust up ");
  if (message === "$ad")
    client.say("CommunityController", "adjust down ");

// Move

  if (message === "$ml")
    client.say("CommunityController", "move left ");
  if (message === "$mr")
    client.say("CommunityController", "move right ");
  if (message === "$mu")
    client.say("CommunityController", "move up ");
  if (message === "$md")
    client.say("CommunityController", "move down ");
// Look

  if (message === "$ll")
    client.say("CommunityController", "look left ");
  if (message === "$lr")
    client.say("CommunityController", "look right ");
  if (message === "$lu")
    client.say("CommunityController", "look up ");
  if (message === "$ld")
    client.say("CommunityController", "look down ");

// Cstick click

});

// Comma clone
client.on("chat", (channel, user, message, self) => {
// Code:

// Smash

  if (message === "$sml,") 
    client.say("CommunityController", "smash left, ");
  if (message === "$smr,") 
    client.say("CommunityController", "smash right, ");
  if (message === "$smu,")
    client.say("CommunityController", "smash up, ");
  if (message === "$smd,") 
    client.say("CommunityController", "smash down, ");

  if (message === "$pbsml,") 
    client.say("CommunityController", "a, smash left, hold zr, start, ");
  if (message === "$pbsmr,") 
    client.say("CommunityController", "a, smash right, hold zr, start, ");
  if (message === "$pbsmu,")
    client.say("CommunityController", "a, smash up, hold zr, start, ");
  if (message === "$pbsmd,") 
    client.say("CommunityController", "a, smash down, hold zr, start, ");


// Special

  if (message === "$spl,") 
    client.say("CommunityController", "special left, ");
  if (message === "$spr,") 
    client.say("CommunityController", "special right, ");
  if (message === "$spu,") 
    client.say("CommunityController", "special up, ");
  if (message === "$spd,") 
    client.say("CommunityController", "special down, ");

  if (message === "$pbspl,") 
    client.say("CommunityController", "a, special left, hold zr, start, ");
  if (message === "$pbspr,") 
    client.say("CommunityController", "a, special right, hold zr, start, ");
  if (message === "$pbspu,")
    client.say("CommunityController", "a, special up, hold zr, start, ");
  if (message === "$pbspd,") 
    client.say("CommunityController", "a, special down, hold zr, start, ");
// COMBOS:

  if (message === "$tomor,") 
    client.say("CommunityController", "a, hold zr, hold zr, hold smash right, menu, ");
  if (message === "$tomol,") 
    client.say("CommunityController", "a, hold zr, hold zr, hold smash left, menu, ");

  if (message === "$recoverl,")
    client.say("CommunityController", "a, hop, special up, hold left, menu, ");
  if (message === "$recoverr,")
    client.say("CommunityController", "a, hop, special up, hold right, menu, ");
  if (message === "$recover,")
    client.say("CommunityController", "a, hop, special up, menu, "); 

  if (message === "$pic,")
    client.say("CommunityController", "down, a, hold a, hold a, hold b, up,");
//CORE

// NON CONTROL
// Fetch instructions
/*

  if (message === "$help")
    client.say("CommunityController", "tinyurl.com/ComConPlus, ");

*/

  if (message === "$test,") 
    client.say("CommunityController", "test, ");
  if (message === "$owner,") 
    client.action("CommunityController", "was made by Daniel Bradbury, ");
  if (message === "$creator,") 
    client.action("CommunityController", "was made by Daniel Bradbury, ");
// DISCORD LINK:
  if (message === "$creator,") 
    client.say("CommunityController", "Invite code: 2CsYxcy");
// CONTROL
// Normal

  if (message === "$l,") 
    client.say("CommunityController", "left, ");
  if (message === "$r,") 
    client.say("CommunityController", "right, ");
  if (message === "$lb,") 
    client.say("CommunityController", "lb, ");
  if (message === "$rb,") 
    client.say("CommunityController", "rb, ");
  if (message === "$u,") 
    client.say("CommunityController", "up, ");
  if (message === "$d,") 
	client.say("CommunityController", "down, ");
  if (message === "$a,") 
    client.say("CommunityController", "a, ");
  if (message === "$b,") 
    client.say("CommunityController", "b, ");
  if (message === "$x,") 
    client.say("CommunityController", "x, ");
  if (message === "$y,") 
    client.say("CommunityController", "y, ");
  if (message === "$s,") 
    client.say("CommunityController", "start, ");
// Other cases

  if (message === "$j,") 
    client.say("CommunityController", "jump, ");
  if (message === "$m,") 
    client.say("CommunityController", "menu, ");

// Hold

  if (message === "$hl,") 
    client.say("CommunityController", "hold left, ");
  if (message === "$hr,") 
    client.say("CommunityController", "hold right, ");
  if (message === "$hlb,") 
    client.say("CommunityController", "hold lb, ");
  if (message === "$hrb,") 
    client.say("CommunityController", "hold rb, ");
  if (message === "$hu,") 
    client.say("CommunityController", "hold up, ");
  if (message === "$hd,") 
    client.say("CommunityController", "hold down, ");

  if (message === "$hsmu")
    client.say("CommunityController", "hold smash up, ");
  if (message === "$hsmd")
    client.say("CommunityController", "hold smash down, ");
  if (message === "$hsml")
    client.say("CommunityController", "hold smash left, ");
  if (message === "$hsmr")
    client.say("CommunityController", "hold smash right, ");
// Adjust

  if (message === "$al,") 
    client.say("CommunityController", "adjust left, ");
  if (message === "$ar,") 
    client.say("CommunityController", "adjust right, ");
  if (message === "$au,") 
    client.say("CommunityController", "adjust up, ");
  if (message === "$ad,") 
    client.say("CommunityController", "adjust down, ");

// Move

  if (message === "$ml,") 
    client.say("CommunityController", "move left, ");
  if (message === "$mr,") 
    client.say("CommunityController", "move right, ");
  if (message === "$mu,") 
    client.say("CommunityController", "move up, ");
  if (message === "$md,") 
    client.say("CommunityController", "move down, ");
// Look

  if (message === "$ll,") 
    client.say("CommunityController", "look left, ");
  if (message === "$lr,") 
    client.say("CommunityController", "look right, ");
  if (message === "$lu,") 
    client.say("CommunityController", "look up, ");
  if (message === "$ld,") 
    client.say("CommunityController", "look down, ");

// Cstick click
});
