## npm 

pi@raspberrypi:/usr/bin $ npm --version
/usr/local/lib/node_modules/npm/bin/npm-cli.js:84
      let notifier = require('update-notifier')({pkg})
      ^^^

SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:414:25)
    at Object.Module._extensions..js (module.js:442:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:311:12)
    at Function.Module.runMain (module.js:467:10)
    at startup (node.js:134:18)
    at node.js:961:3

----------
## [라즈베리파이 NodeJs 설치](https://blog.xcoda.net/99)
node --version
v4.2.1

## [Why is Node always 4.2.1 with apt-get install?](https://www.raspberrypi.org/forums/viewtopic.php?t=205323)

Ref.

https://github.com/audstanley/NodeJs-Raspberry-Pi

https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp



--------
2019.05.07
<Automatic Installation>
Execute the following command on your Raspberry Pi to install MagicMirror²:
      
`bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"`

* https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror
  * Syntax Error: Block-scoped    
 
<Manual Installation>

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt install -y nodejs`

`git clone https://github.com/MichMich/MagicMirror`

`cd MagicMirror/`

`Install and run the app with: npm install && npm start`

> Syntax Block Error

> Try New Formatting -> Magic Mirror
---------
2019.05.17

# Unable to install dependencies!

## Reason of Errors

Trace
1. npm problem: `apt-get install nodejs` (as root) to install Node.js v6.x and npm
     
     edit: 05.22.2019
     
     `npm -v` 6.4.1
     
     `nodejs -v` 10.15.3

2. MagicMirror overlap

navigated into the folder MagicMirror:
npm start -> electron not installed fail.
npm install -> npm start
Bingo, we are running. No need to download any packages seperately.

* Refer
  * (1.2)[https://forum.magicmirror.builders/topic/1070/unable-to-install-dependencies/8]
## `cd ~/MagicMirror`

`ls`

```
CHANGELOG.md config installers node_modules splashschreen
 
Gruntfile.js css js package-lock.json tests
 
LICESNSE.md dangerfile.js jsconfig.json package.json translations
 
README.md fonts module-types.ts run-start.sh vendor

clientonly index.html modules serveronly
```

`npm install`

```
pi@raspberrypi:~/MagicMirror $ npm install
npm WARN deprecated time-grunt@2.0.0: Deprecated because Grunt is practically unmaintained. 
Move on to something better. 
This package will continue to work with Grunt v1, but it will not receive any updates. 
> electron@3.0.13 postinstall /home/pi/MagicMirror/node_modules/electron 
> node install.js Downloading tmp-943-0-electron-v3.0.13-linux-armv7l.zip 
Error: read ECONNRESET /home/pi/MagicMirror/node_modules/electron/install.js:49 throw 
err ^ Error: read ECONNRESET at TLSWrap.onStreamRead (internal/stream_base_commons.js:111:27) 
npm WARN acorn-jsx@5.0.1 requires a peer of acorn@^6.0.0 but none is installed. 
You must install peer dependencies yourself. 
npm WARN grunt-stylelint@0.11.0 requires a peer of stylelint@^10.0.0 but none is installed. 
You must install peer dependencies yourself. 
npm ERR! code ELIFECYCLE 
npm ERR! errno 1 
npm ERR! electron@3.0.13 postinstall: `node install.js` 
npm ERR! Exit status 1 
npm ERR! 
npm ERR! Failed at the electron@3.0.13 postinstall script. 
npm ERR! This is probably not a problem with npm. There is likely additional logging output above. 
npm ERR! A complete log of this run can be found in: npm ERR! /home/pi/.npm/_logs/2019-05-23T06_07_12_153Z-debug.log
```

---

[Reference](https://forum.magicmirror.builders/topic/1046/problem-npm-install-npm-start/8)

```
update/install node via apt? Try apt-get update && apt-get upgrade or apt-get install nodejs and see, if it helps.

If it doesn’t work, follow the instructions here, to install a recent version of node: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

 

```

---
3. SD card -> Purchasing new SD card
