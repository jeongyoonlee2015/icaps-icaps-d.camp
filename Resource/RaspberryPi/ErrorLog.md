# Error Log

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose run-script [ 'prestart', 'start', 'poststart' ]
5 info lifecycle magicmirror@2.8.0~prestart: magicmirror@2.8.0
6 info lifecycle magicmirror@2.8.0~start: magicmirror@2.8.0
7 verbose lifecycle magicmirror@2.8.0~start: unsafe-perm in lifecycle true
8 verbose lifecycle magicmirror@2.8.0~start: PATH: /usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/home/pi/MagicMirror/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
9 verbose lifecycle magicmirror@2.8.0~start: CWD: /home/pi/MagicMirror
10 silly lifecycle magicmirror@2.8.0~start: Args: [ '-c', 'sh run-start.sh' ]
11 info lifecycle magicmirror@2.8.0~start: Failed to exec start script
12 verbose stack Error: magicmirror@2.8.0 start: `sh run-start.sh`
12 verbose stack spawn ENOENT
12 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:48:18)
12 verbose stack     at ChildProcess.emit (events.js:198:13)
12 verbose stack     at maybeClose (internal/child_process.js:982:16)
12 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)
13 verbose pkgid magicmirror@2.8.0
14 verbose cwd /home/pi/MagicMirror
15 verbose Linux 4.14.98-v7+
16 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
17 verbose node v10.16.0
18 verbose npm  v6.10.2
19 error file sh
20 error code ELIFECYCLE
21 error errno ENOENT
22 error syscall spawn
23 error magicmirror@2.8.0 start: `sh run-start.sh`
23 error spawn ENOENT
24 error Failed at the magicmirror@2.8.0 start script.
24 error This is probably not a problem with npm. There is likely additional logging output above.
25 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'install',
1 verbose cli   '-g',
1 verbose cli   '@',
1 verbose cli   'angular',
1 verbose cli   '/',
1 verbose cli   'angular-cli' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session e4ee61b5c77ce157
5 silly install loadCurrentTree
6 silly install readGlobalPackageData
7 silly fetchPackageMetaData error for file:/ Could not install from "../.." as it does not contain a package.json file.
8 silly fetchPackageMetaData error for angular@latest request to https://registry.npmjs.org/angular failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
9 silly fetchPackageMetaData error for angular-cli@latest request to https://registry.npmjs.org/angular-cli failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
10 timing stage:rollbackFailedOptional Completed in 4ms
11 timing stage:runTopLevelLifecycles Completed in 5358ms
12 verbose stack Error: Invalid tag name "@": Tags may not have any characters that encodeURIComponent encodes.
12 verbose stack     at invalidTagName (/usr/local/lib/node_modules/npm/node_modules/npm-package-arg/npa.js:87:15)
12 verbose stack     at fromRegistry (/usr/local/lib/node_modules/npm/node_modules/npm-package-arg/npa.js:290:13)
12 verbose stack     at resolve (/usr/local/lib/node_modules/npm/node_modules/npm-package-arg/npa.js:77:12)
12 verbose stack     at npa (/usr/local/lib/node_modules/npm/node_modules/npm-package-arg/npa.js:48:10)
12 verbose stack     at /usr/local/lib/node_modules/npm/lib/install/deps.js:222:14
12 verbose stack     at /usr/local/lib/node_modules/npm/node_modules/slide/lib/async-map.js:52:35
12 verbose stack     at Array.forEach (<anonymous>)
12 verbose stack     at /usr/local/lib/node_modules/npm/node_modules/slide/lib/async-map.js:52:11
12 verbose stack     at Array.forEach (<anonymous>)
12 verbose stack     at asyncMap (/usr/local/lib/node_modules/npm/node_modules/slide/lib/async-map.js:51:8)
12 verbose stack     at exports.getAllMetadata (/usr/local/lib/node_modules/npm/lib/install/deps.js:219:3)
12 verbose stack     at Installer.loadArgMetadata (/usr/local/lib/node_modules/npm/lib/install.js:360:3)
12 verbose stack     at Installer.readGlobalPackageData (/usr/local/lib/node_modules/npm/lib/install.js:658:8)
12 verbose stack     at Array.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/slide/lib/bind-actor.js:15:8)
12 verbose stack     at LOOP (/usr/local/lib/node_modules/npm/node_modules/slide/lib/chain.js:15:14)
12 verbose stack     at chain (/usr/local/lib/node_modules/npm/node_modules/slide/lib/chain.js:20:5)
13 verbose cwd /home/pi
14 verbose Linux 4.14.98-v7+
15 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-g" "@" "angular" "/" "angular-cli"
16 verbose node v10.16.0
17 verbose npm  v6.10.2
18 error code EINVALIDTAGNAME
19 error Invalid tag name "@": Tags may not have any characters that encodeURIComponent encodes.
20 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose run-script [ 'prestart', 'start', 'poststart' ]
5 info lifecycle magicmirror@2.8.0~prestart: magicmirror@2.8.0
6 info lifecycle magicmirror@2.8.0~start: magicmirror@2.8.0
7 verbose lifecycle magicmirror@2.8.0~start: unsafe-perm in lifecycle true
8 verbose lifecycle magicmirror@2.8.0~start: PATH: /usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/home/pi/MagicMirror/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
9 verbose lifecycle magicmirror@2.8.0~start: CWD: /home/pi/MagicMirror
10 silly lifecycle magicmirror@2.8.0~start: Args: [ '-c', 'sh run-start.sh' ]
11 info lifecycle magicmirror@2.8.0~start: Failed to exec start script
12 verbose stack Error: magicmirror@2.8.0 start: `sh run-start.sh`
12 verbose stack spawn ENOENT
12 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:48:18)
12 verbose stack     at ChildProcess.emit (events.js:198:13)
12 verbose stack     at maybeClose (internal/child_process.js:982:16)
12 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)
13 verbose pkgid magicmirror@2.8.0
14 verbose cwd /home/pi/MagicMirror
15 verbose Linux 4.14.98-v7+
16 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
17 verbose node v10.16.0
18 verbose npm  v6.10.2
19 error file sh
20 error code ELIFECYCLE
21 error errno ENOENT
22 error syscall spawn
23 error magicmirror@2.8.0 start: `sh run-start.sh`
23 error spawn ENOENT
24 error Failed at the magicmirror@2.8.0 start script.
24 error This is probably not a problem with npm. There is likely additional logging output above.
25 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'install',
1 verbose cli   'electron-prebuilt' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session 18b8efbb9514c27f
5 silly install loadCurrentTree
6 silly install readLocalPackageData
7 silly fetchPackageMetaData error for electron-prebuilt@latest request to https://registry.npmjs.org/electron-prebuilt failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
8 timing stage:rollbackFailedOptional Completed in 4ms
9 timing stage:runTopLevelLifecycles Completed in 5397ms
10 verbose type system
11 verbose stack FetchError: request to https://registry.npmjs.org/electron-prebuilt failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
11 verbose stack     at ClientRequest.req.on.err (/usr/local/lib/node_modules/npm/node_modules/node-fetch-npm/src/index.js:68:14)
11 verbose stack     at ClientRequest.emit (events.js:198:13)
11 verbose stack     at TLSSocket.socketErrorListener (_http_client.js:392:9)
11 verbose stack     at TLSSocket.emit (events.js:198:13)
11 verbose stack     at emitErrorNT (internal/streams/destroy.js:91:8)
11 verbose stack     at emitErrorAndCloseNT (internal/streams/destroy.js:59:3)
11 verbose stack     at process._tickCallback (internal/process/next_tick.js:63:19)
12 verbose cwd /home/pi/MagicMirror
13 verbose Linux 4.14.98-v7+
14 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "electron-prebuilt"
15 verbose node v10.16.0
16 verbose npm  v6.10.2
17 error code EAI_AGAIN
18 error errno EAI_AGAIN
19 error request to https://registry.npmjs.org/electron-prebuilt failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
20 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'install',
1 verbose cli   '-y',
1 verbose cli   'nan',
1 verbose cli   'node-pre-gyp' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session c91c5efff0d9ea2b
5 silly install loadCurrentTree
6 silly install readLocalPackageData
7 silly fetchPackageMetaData error for nan@^2.4.0 request to https://registry.npmjs.org/nan failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
8 silly fetchPackageMetaData error for node-pre-gyp@^0.6.30 request to https://registry.npmjs.org/node-pre-gyp failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
9 timing stage:rollbackFailedOptional Completed in 6ms
10 timing stage:runTopLevelLifecycles Completed in 5423ms
11 verbose type system
12 verbose stack FetchError: request to https://registry.npmjs.org/nan failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
12 verbose stack     at ClientRequest.req.on.err (/usr/local/lib/node_modules/npm/node_modules/node-fetch-npm/src/index.js:68:14)
12 verbose stack     at ClientRequest.emit (events.js:198:13)
12 verbose stack     at TLSSocket.socketErrorListener (_http_client.js:392:9)
12 verbose stack     at TLSSocket.emit (events.js:198:13)
12 verbose stack     at emitErrorNT (internal/streams/destroy.js:91:8)
12 verbose stack     at emitErrorAndCloseNT (internal/streams/destroy.js:59:3)
12 verbose stack     at process._tickCallback (internal/process/next_tick.js:63:19)
13 verbose cwd /home/pi/MagicMirror/modules/MMM-Hotword/snowboy
14 verbose Linux 4.19.57-v7+
15 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-y" "nan" "node-pre-gyp"
16 verbose node v10.16.0
17 verbose npm  v6.10.2
18 error code EAI_AGAIN
19 error errno EAI_AGAIN
20 error request to https://registry.npmjs.org/nan failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
21 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'install', '-y' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session bb4f726691ac0231
5 silly install runPreinstallTopLevelLifecycles
6 silly preinstall snowboy@1.3.1
7 info lifecycle snowboy@1.3.1~preinstall: snowboy@1.3.1
8 silly install loadCurrentTree
9 silly install readLocalPackageData
10 timing stage:loadCurrentTree Completed in 44ms
11 silly install loadIdealTree
12 silly install cloneCurrentTreeToIdealTree
13 timing stage:loadIdealTree:cloneCurrentTree Completed in 1ms
14 silly install loadShrinkwrap
15 timing stage:loadIdealTree:loadShrinkwrap Completed in 18ms
16 silly install loadAllDepsIntoIdealTree
17 silly fetchPackageMetaData error for nan@^2.4.0 request to https://registry.npmjs.org/nan failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
18 silly fetchPackageMetaData error for node-pre-gyp@^0.6.30 request to https://registry.npmjs.org/node-pre-gyp failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
19 silly fetchPackageMetaData error for @types/node@^6.0.38 request to https://registry.npmjs.org/@types%2fnode failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
20 silly fetchPackageMetaData error for typescript@^2.0.2 request to https://registry.npmjs.org/typescript failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
21 silly fetchPackageMetaData error for aws-sdk@2.x request to https://registry.npmjs.org/aws-sdk failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
22 silly fetchPackageMetaData error for node-pre-gyp@^0.6.30 request to https://registry.npmjs.org/node-pre-gyp failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
23 timing stage:rollbackFailedOptional Completed in 2ms
24 timing stage:runTopLevelLifecycles Completed in 594ms
25 silly saveTree snowboy@1.3.1
26 verbose type system
27 verbose stack FetchError: request to https://registry.npmjs.org/node-pre-gyp failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
27 verbose stack     at ClientRequest.req.on.err (/usr/local/lib/node_modules/npm/node_modules/node-fetch-npm/src/index.js:68:14)
27 verbose stack     at ClientRequest.emit (events.js:198:13)
27 verbose stack     at TLSSocket.socketErrorListener (_http_client.js:392:9)
27 verbose stack     at TLSSocket.emit (events.js:198:13)
27 verbose stack     at emitErrorNT (internal/streams/destroy.js:91:8)
27 verbose stack     at emitErrorAndCloseNT (internal/streams/destroy.js:59:3)
27 verbose stack     at process._tickCallback (internal/process/next_tick.js:63:19)
28 verbose cwd /home/pi/MagicMirror/modules/MMM-Hotword/snowboy
29 verbose Linux 4.19.57-v7+
30 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-y"
31 verbose node v10.16.0
32 verbose npm  v6.10.2
33 error code EAI_AGAIN
34 error errno EAI_AGAIN
35 error request to https://registry.npmjs.org/node-pre-gyp failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org registry.npmjs.org:443
36 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'install',
1 verbose cli   'rimraf',
1 verbose cli   '-g' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session 3f18f3c1ed0af661
5 silly install loadCurrentTree
6 silly install readGlobalPackageData
7 http fetch GET 304 https://registry.npmjs.org/rimraf 527ms (from cache)
8 silly pacote tag manifest for rimraf@latest fetched in 610ms
9 timing stage:loadCurrentTree Completed in 743ms
10 silly install loadIdealTree
11 silly install cloneCurrentTreeToIdealTree
12 timing stage:loadIdealTree:cloneCurrentTree Completed in 2ms
13 silly install loadShrinkwrap
14 timing stage:loadIdealTree:loadShrinkwrap Completed in 6ms
15 silly install loadAllDepsIntoIdealTree
16 silly resolveWithNewModule rimraf@2.6.3 checking installable status
17 http fetch GET 304 https://registry.npmjs.org/glob 107ms (from cache)
18 silly pacote range manifest for glob@^7.1.3 fetched in 134ms
19 silly resolveWithNewModule glob@7.1.4 checking installable status
20 http fetch GET 304 https://registry.npmjs.org/inflight 244ms (from cache)
21 silly pacote range manifest for inflight@^1.0.4 fetched in 302ms
22 silly resolveWithNewModule inflight@1.0.6 checking installable status
23 http fetch GET 304 https://registry.npmjs.org/inherits 354ms (from cache)
24 http fetch GET 304 https://registry.npmjs.org/once 347ms (from cache)
25 http fetch GET 304 https://registry.npmjs.org/path-is-absolute 351ms (from cache)
26 http fetch GET 304 https://registry.npmjs.org/minimatch 369ms (from cache)
27 http fetch GET 304 https://registry.npmjs.org/fs.realpath 399ms (from cache)
28 silly pacote range manifest for inherits@2 fetched in 393ms
29 silly resolveWithNewModule inherits@2.0.4 checking installable status
30 silly pacote range manifest for path-is-absolute@^1.0.0 fetched in 382ms
31 silly resolveWithNewModule path-is-absolute@1.0.1 checking installable status
32 silly pacote range manifest for once@^1.3.0 fetched in 391ms
33 silly resolveWithNewModule once@1.4.0 checking installable status
34 silly pacote range manifest for fs.realpath@^1.0.0 fetched in 425ms
35 silly resolveWithNewModule fs.realpath@1.0.0 checking installable status
36 silly pacote range manifest for minimatch@^3.0.4 fetched in 407ms
37 silly resolveWithNewModule minimatch@3.0.4 checking installable status
38 http fetch GET 304 https://registry.npmjs.org/wrappy 73ms (from cache)
39 silly pacote range manifest for wrappy@1 fetched in 83ms
40 silly resolveWithNewModule wrappy@1.0.2 checking installable status
41 http fetch GET 304 https://registry.npmjs.org/brace-expansion 73ms (from cache)
42 silly pacote range manifest for brace-expansion@^1.1.7 fetched in 91ms
43 silly resolveWithNewModule brace-expansion@1.1.11 checking installable status
44 http fetch GET 304 https://registry.npmjs.org/balanced-match 108ms (from cache)
45 http fetch GET 304 https://registry.npmjs.org/concat-map 105ms (from cache)
46 silly pacote range manifest for balanced-match@^1.0.0 fetched in 123ms
47 silly resolveWithNewModule balanced-match@1.0.0 checking installable status
48 silly pacote version manifest for concat-map@0.0.1 fetched in 125ms
49 silly resolveWithNewModule concat-map@0.0.1 checking installable status
50 timing stage:loadIdealTree:loadAllDepsIntoIdealTree Completed in 963ms
51 timing stage:loadIdealTree Completed in 1003ms
52 silly currentTree lib
53 silly idealTree lib
53 silly idealTree └─┬ rimraf@2.6.3
53 silly idealTree   ├── balanced-match@1.0.0
53 silly idealTree   ├── brace-expansion@1.1.11
53 silly idealTree   ├── concat-map@0.0.1
53 silly idealTree   ├── fs.realpath@1.0.0
53 silly idealTree   ├── glob@7.1.4
53 silly idealTree   ├── inflight@1.0.6
53 silly idealTree   ├── inherits@2.0.4
53 silly idealTree   ├── minimatch@3.0.4
53 silly idealTree   ├── once@1.4.0
53 silly idealTree   ├── path-is-absolute@1.0.1
53 silly idealTree   └── wrappy@1.0.2
54 silly install generateActionsToTake
55 warn checkPermissions Missing write access to /usr/local/lib/node_modules
56 timing stage:rollbackFailedOptional Completed in 3ms
57 timing stage:runTopLevelLifecycles Completed in 1786ms
58 verbose stack Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
59 verbose cwd /home/pi/MagicMirror/modules/MMM-Hotword/snowboy/MMM-AssistantMk2/scripts
60 verbose Linux 4.19.57-v7+
61 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "rimraf" "-g"
62 verbose node v10.16.0
63 verbose npm  v6.10.2
64 error path /usr/local/lib/node_modules
65 error code EACCES
66 error errno -13
67 error syscall access
68 error Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
68 error  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']
68 error   stack:
68 error    'Error: EACCES: permission denied, access \'/usr/local/lib/node_modules\'',
68 error   errno: -13,
68 error   code: 'EACCES',
68 error   syscall: 'access',
68 error   path: '/usr/local/lib/node_modules' }
69 error The operation was rejected by your operating system.
69 error It is likely you do not have the permissions to access this file as the current user
69 error
69 error If you believe this might be a permissions issue, please double-check the
69 error permissions of the file and its containing directories, or try running
69 error the command again as root/Administrator (though this is not recommended).
70 verbose exit [ -13, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose run-script [ 'prestart', 'start', 'poststart' ]
5 info lifecycle magicmirror@2.8.0~prestart: magicmirror@2.8.0
6 info lifecycle magicmirror@2.8.0~start: magicmirror@2.8.0
7 verbose lifecycle magicmirror@2.8.0~start: unsafe-perm in lifecycle true
8 verbose lifecycle magicmirror@2.8.0~start: PATH: /usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/home/pi/MagicMirror/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
9 verbose lifecycle magicmirror@2.8.0~start: CWD: /home/pi/MagicMirror
10 silly lifecycle magicmirror@2.8.0~start: Args: [ '-c', 'sh run-start.sh' ]
11 info lifecycle magicmirror@2.8.0~start: Failed to exec start script
12 verbose stack Error: magicmirror@2.8.0 start: `sh run-start.sh`
12 verbose stack spawn ENOENT
12 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:48:18)
12 verbose stack     at ChildProcess.emit (events.js:198:13)
12 verbose stack     at maybeClose (internal/child_process.js:982:16)
12 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)
13 verbose pkgid magicmirror@2.8.0
14 verbose cwd /home/pi/MagicMirror
15 verbose Linux 4.19.57-v7+
16 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
17 verbose node v10.16.0
18 verbose npm  v6.10.2
19 error file sh
20 error code ELIFECYCLE
21 error errno ENOENT
22 error syscall spawn
23 error magicmirror@2.8.0 start: `sh run-start.sh`
23 error spawn ENOENT
24 error Failed at the magicmirror@2.8.0 start script.
24 error This is probably not a problem with npm. There is likely additional logging output above.
25 verbose exit [ 1, true ]
```

```
0 info it worked if it ends with ok
1 verbose cli [ '/usr/local/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'install',
1 verbose cli   'eletron' ]
2 info using npm@6.10.2
3 info using node@v10.16.0
4 verbose npm-session 6c7155c73d0fba26
5 silly install loadCurrentTree
6 silly install readLocalPackageData
7 http fetch GET 404 https://registry.npmjs.org/eletron 907ms
8 http fetch GET 404 https://registry.npmjs.org/eletron 623ms
9 silly fetchPackageMetaData error for eletron@latest 404 Not Found - GET https://registry.npmjs.org/eletron - Not found
10 timing stage:rollbackFailedOptional Completed in 3ms
11 timing stage:runTopLevelLifecycles Completed in 1771ms
12 verbose stack Error: 404 Not Found - GET https://registry.npmjs.org/eletron - Not found
12 verbose stack     at res.buffer.catch.then.body (/usr/local/lib/node_modules/npm/node_modules/npm-registry-fetch/check-response.js:104:15)
12 verbose stack     at process._tickCallback (internal/process/next_tick.js:68:7)
13 verbose statusCode 404
14 verbose pkgid eletron@latest
15 verbose cwd /home/pi/MagicMirror
16 verbose Linux 4.19.57-v7+
17 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "eletron"
18 verbose node v10.16.0
19 verbose npm  v6.10.2
20 error code E404
21 error 404 Not Found - GET https://registry.npmjs.org/eletron - Not found
22 error 404
23 error 404 'eletron@latest' is not in the npm registry.
24 error 404 You should bug the author to publish it (or use the name yourself!)
25 error 404 Note that you can also install from a
26 error 404 tarball, folder, http url, or git url.
27 verbose exit [ 1, true ]
```

