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

> Try New Format
