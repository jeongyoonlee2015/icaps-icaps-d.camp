# MissResult

pi@raspberrypi:~/MagicMirror $ sudo npm install -g pm2

/usr/local/bin/pm2 -> /usr/local/lib/node_modules/pm2/bin/pm2
/usr/local/bin/pm2-dev -> /usr/local/lib/node_modules/pm2/bin/pm2-dev
/usr/local/bin/pm2-docker -> /usr/local/lib/node_modules/pm2/bin/pm2-docker
/usr/local/bin/pm2-runtime -> /usr/local/lib/node_modules/pm2/bin/pm2-runtime
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/pm2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})

+ pm2@3.5.1
updated 1 package in 23.5s
pi@raspberrypi:~/MagicMirror $ pm2 startup
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pi@raspberrypi:~/MagicMirror $ sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
env: `/usr/lib/node_modules/pm2/bin/pm2': 그런 파일이나 디렉터리가 없습니다
pi@raspberrypi:~/MagicMirror $ pm2 start ~/MagicMirror/installers/pm2_MagicMirror.json
[PM2] Spawning PM2 daemon with pm2_home=/home/pi/.pm2
[PM2] PM2 Successfully daemonized
[PM2][WARN] Applications MagicMirror not running, starting...
[PM2] App [MagicMirror] launched (1 instances)
┌─────────────┬────┬──────┬────────┬───┬─────┬──────────┐
│ Name        │ id │ mode │ status │ ↺ │ cpu │ memory   │
├─────────────┼────┼──────┼────────┼───┼─────┼──────────┤
│ MagicMirror │ 0  │ fork │ online │ 0 │ 0%  │ 2.4 MB   │
└─────────────┴────┴──────┴────────┴───┴─────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
pi@raspberrypi:~/MagicMirror $ pm2 save
[PM2] Saving current process list...
[PM2] Successfully saved in /home/pi/.pm2/dump.pm2
