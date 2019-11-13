var tmi = require('tmi.js');
var fs = require('fs');
var token;
token = fs.readFileSync("token.txt");
token = token.toString().trim();
var options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: "communitycontrollerplus",
    password: token
  },
  channels: ["CommunityController"]
};

var client = new tmi.client(options);

client.connect();

// Code:

  var si = 0
  
  var dabs = 0
  var i = 0
  var detect
  var msg = ["BLANK"]
function cmconf(x) {
	si+=(x+2)
	detect=1
}

client.on("chat", (channel, user, message, self) => {
si=0
var msg = ["BLANK"]
for (i = 0; i < 9; i++) {
	detect=0

//CORE

// NON CONTROL
// Fetch instructions
/*

  if (message === "$help")
    msg.push("tinyurl.com/ComConPlus");

*/


// DISCORD LINK:

// CONTROL
// Normal


// Other cases

  if (message.substring(si,si+2) === "$j") {
    msg.push("jump"),
	cmconf(2);
  }
// Hold

  if (message.substring(si,si+3) === "$hl") {
    msg.push("hold left"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$hr") {
    msg.push("hold right"),
	cmconf(3);
  }
  if (message.substring(si,si+4) === "$hlb") {
    msg.push("hold lb"),
	cmconf(4);
  }
  if (message.substring(si,si+4) === "$hrb") {
    msg.push("hold rb"),
	cmconf(4);
  }
  if (message.substring(si,si+3) === "$hu") {
    msg.push("hold up"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$hd") {
    msg.push("hold down"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$ha") {
    msg.push("hold a"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$hb") {
    msg.push("hold b"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$hx") {
    msg.push("hold x"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$hy") {
    msg.push("hold y"),
	cmconf(3);
  }
	
// Adjust
  if (message.substring(si,si+3) === "$al") {
    msg.push("adjust left"),
  cmconf(3);} else {
  if (message.substring(si,si+3) === "$ar") {
    msg.push("adjust right"),
  cmconf(3);} else {
  if (message.substring(si,si+3) === "$au") {
    msg.push("adjust up"),
  cmconf(3);} else {
  if (message.substring(si,si+3) === "$ad") {
    msg.push("adjust down"),
  cmconf(3);}
   else { 
  if (message.substring(si,si+2) === "$a") {
    msg.push("a"),
	cmconf(2);
  }
}}}}
  if (message.substring(si,si+2) === "$r") {
    msg.push("right"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$lb") {
    msg.push("lb"),
	cmconf(3);
  }
  if (message.substring(si,si+3) === "$rb") {
    msg.push("rb"),
	cmconf(3);
  }
  if (message.substring(si,si+2) === "$u") {
    msg.push("up"),
	cmconf(2);
  }
  if (message.substring(si,si+2) === "$d") {
	msg.push("down"),
	cmconf(2);
  }
  if (message.substring(si,si+2) === "$b") {
    msg.push("b"),
	cmconf(2);
  }
  if (message.substring(si,si+2) === "$x") {
    msg.push("x"),
	cmconf(2);
  }
  if (message.substring(si,si+2) === "$y") {
    msg.push("y"),
	cmconf(2);
  }
  if (message.substring(si,si+2) === "$s") {
    msg.push("start"),
	cmconf(2);
  }
// Move
  if (message.substring(si,si+3) === "$ml") {
    msg.push("move left"),
	cmconf(3);} else {
  if (message.substring(si,si+3) === "$mr") {
    msg.push("move right"),
	cmconf(3);} else { 
  if (message.substring(si,si+3) === "$mu") {
    msg.push("move up"),
	cmconf(3);} else {
  if (message.substring(si,si+3) === "$md") {
    msg.push("move down"),
	cmconf(3);}
	else {
	if (message.substring(si,si+2) === "$m") {
    msg.push("menu"),
	cmconf(2);
	}}}}
	
// Look

  if (message.substring(si,si+3) === "$ll") {
    msg.push("look left"),
	cmconf(3);} else {
  if (message.substring(si,si+3) === "$lr") {
    msg.push("look right"),
	cmconf(3);} else {
  if (message.substring(si,si+3) === "$lu") {
    msg.push("look up"),
	cmconf(3);} else {
  if (message.substring(si,si+3) === "$ld") {
    msg.push("look down"),
	cmconf(3); }
	else {
	if (message.substring(si,si+2) === "$l") {
    msg.push("left"),
	cmconf(2);
        }}
	}}}}

if (msg[i]===undefined) {
	msg.push("")
}
// Cstick click

}
// Dabs
  if (message === "$dab") {
    client.say("CommunityController", `${user["username"]} dabbed. to check the dab count, use $dabcount.`);
    dabs+=1;
  }
  if (message === "$dabcount") {
    client.say("CommunityController", `${dabs} people have dabbed.`);
  }
	
  if (message === "$test") {
    client.say("CommunityController", "test");
  }
// Passive
// gg
/*
  if (message === "gg")
    client.say("CommunityController", "GG KappaPride");
  if (message === "GG")
    client.say("CommunityController", "GG KappaPride");
  if (message === "Gg")
    msg.push("GG KappaPride");

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
*/
//EMOTES:

  if (message === "$illipinati") {
    client.say("CommunityController", "TheIlluminati 👄 TheIlluminati");
  }
  if (message === "$isaacwings") {
    client.say("CommunityController", "MercyWing1 BibleThump MercyWing2");
  }
  if (message === "$purplepower") {
    client.say("CommunityController", "PowerUpL EntropyWins PowerUpR");
  }
  if (message === "$copypasta") {
    client.say("CommunityController", "copyThis pastaThat");
  }
  if (message === "$robosquid") {
    client.say("CommunityController", "Squid1 Squid2 Squid3 Squid4");
  }
  if (message === "$srobosquid") {
    client.say("CommunityController", "Squid1 Squid3 Squid4");
  }
  if (message === "$tentadab") {
    client.say("CommunityController", "Squid1 HotPokket Squid4");
  }
  if (message === "$lenny") {
    client.say("CommunityController", "( ͡° ͜ʖ ͡°)");
  }
if (msg[1] !== "") {
client.say("CommunityController", `${msg[1]+", "+msg[2]+", "+msg[3]+", "+msg[4]+", "+msg[5]+", "+msg[6]+", "+msg[7]+", "+msg[8]}`)
}
});
