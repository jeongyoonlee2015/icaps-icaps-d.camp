
```
    pi@raspberrypi:~ $ cd MagicMirror
    pi@raspberrypi:~/MagicMirror $ npm start

    > magicmirror@2.8.0 start /home/pi/MagicMirror
    > sh run-start.sh

    Starting MagicMirror: v2.8.0
    Loading config ...
    Loading module helpers ...
    No helper found for module: alert.
    Initializing new module helper ...
    Module helper loaded: updatenotification
    No helper found for module: clock.
    Initializing new module helper ...
    Module helper loaded: calendar
    No helper found for module: currentweather.
    No helper found for module: weatherforecast.
    No helper found for module: compliments.
    WARNING! Could not load config file. Starting with default configuration. Error found: Error: Failed to load gRPC binary module because it was not installed for the current system
    Expected directory: electron-v3.1-linux-arm-glibc
    Found: [node-v64-linux-arm-glibc]
    This problem can often be fixed by running "npm rebuild" on the current system
    Original error: Cannot find module '/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/node/extension_binary/electron-v3.1-linux-arm-glibc/grpc_node.node'
    Loading module helpers ...
    No helper found for module: alert.
    Initializing new module helper ...
    Module helper loaded: updatenotification
    No helper found for module: clock.
    Initializing new module helper ...
    Module helper loaded: calendar
    No helper found for module: currentweather.
    No helper found for module: weatherforecast.
    No helper found for module: compliments.
    App threw an error during load
    Error: Failed to load gRPC binary module because it was not installed for the current system
    Expected directory: electron-v3.1-linux-arm-glibc
    Found: [node-v64-linux-arm-glibc]
    This problem can often be fixed by running "npm rebuild" on the current system
    Original error: Cannot find module '/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/node/extension_binary/electron-v3.1-linux-arm-glibc/grpc_node.node'
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:53:17)
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:64:3)
        at Module._compile (internal/modules/cjs/loader.js:711:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:722:10)
        at Module.load (internal/modules/cjs/loader.js:620:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:559:12)
        at Function.Module._load (internal/modules/cjs/loader.js:551:3)
        at Module.require (internal/modules/cjs/loader.js:658:17)
        at require (internal/modules/cjs/helpers.js:20:18)
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/client_interceptors.js:144:12)
    Whoops! There was an uncaught exception...
    { Error: Failed to load gRPC binary module because it was not installed for the current system
    Expected directory: electron-v3.1-linux-arm-glibc
    Found: [node-v64-linux-arm-glibc]
    This problem can often be fixed by running "npm rebuild" on the current system
    Original error: Cannot find module '/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/node/extension_binary/electron-v3.1-linux-arm-glibc/grpc_node.node'
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:53:17)
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:64:3)
        at Module._compile (internal/modules/cjs/loader.js:711:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:722:10)
        at Module.load (internal/modules/cjs/loader.js:620:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:559:12)
        at Function.Module._load (internal/modules/cjs/loader.js:551:3)
        at Module.require (internal/modules/cjs/loader.js:658:17)
        at require (internal/modules/cjs/helpers.js:20:18)
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/client_interceptors.js:144:12) code: 'MODULE_NOT_FOUND' }
    MagicMirror will not quit, but it might be a good idea to check why this happened. Maybe no internet connection?
    If you think this really is an issue, please open an issue on GitHub: https://github.com/MichMich/MagicMirror/issues
    Launching application.
    Shutting down server...
    Stopping module helper: updatenotification
    Stopping module helper: calendar
    Stopping module helper: updatenotification
    Stopping module helper: calendar
    pi@raspberrypi:~/MagicMirror $ 
```

-----
`npm start dev`로 디벨로퍼 모드로 실행시켜봅시다. 

`cd ~/MagicMirror & npm start dev` 그러면 Chrome에서 F12 디벨로퍼모드 실행시킨 것과 비슷하게 매직미러와 함께 콘솔윈도우가 뜹니다. 

보통은 프론트단의 문제가 있는 경우 여기에 에러메시지가 보입니다.

아까 `npm start dev`를 실행시켰던 터미널창에서는 서버단의 에러메시지가 보입니다. 

두 군데를 모두 보셔서 의심스러운 메시지가 있는지 확인하세요.

----
https://github.com/dr4ke616/MMM-Voice-Control#configuration-options
https://github.com/MichMich/MagicMirror/wiki/Voice-Related-Modules

----
1. Mich config Example은 작동
2. Simpteam config는 화면 안 뜸
3. Mich에 simpteam config 합치면 화면 안 뜸(version problem)
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:53:17)정상
        at Object.<anonymous> (/home/pi/MagicMirror/modules/MMM-AssistantMk2/node_modules/grpc/src/grpc_extension.js:53:17)
