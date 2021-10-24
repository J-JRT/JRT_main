//const chrome = require('chrome-cookies-secure');
//var fs = require('fs');

//chrome.getCookies('https://www.facebook.com/', 'puppeteer', function(err, cookies) {
  //  let cooky = cookies.map(mapper => ({
    //    key: mapper.name,
      //  value: mapper.value,
        //domain: "facebook.com",
        //path: mapper.path,
        //hostOnly: mapper.hostOnly,
        //creation: new Date().toISOString(),
    //    lastAccessed: new Date().toISOString()
    //}));
    //let appstate = JSON.stringify(cooky, null, 4);
    //fs.writeFile('appstate.json', appstate, 'utf8', function(err) {
      //  if (err) throw err;
       // console.log('complete');
    //});
//});
const fs = require("fs");
const login = require("facebook-chat-api");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const obj = {email: "FB_EMAIL", password: "FB_PASSWORD"};
login(obj, (err, api) => {
    if(err) {
        switch (err.error) {
            case 'login-approval':
                console.log('Enter code > ');
                rl.on('line', (line) => {
                    err.continue(line);
                    rl.close();
                });
                break;
            default:
                console.error(err);
        }
        return;
    }

    // Logged in!
});

