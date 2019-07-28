# Installation Magic Mirror

Based on SIMP TEAM

제작 2018.08.23
수정 2019.04.19 (Edited config.js)
### 1. 라즈베리파이 설정
SD카드에 라즈비안 이미지 설치
루퍼스 : http://rufus.akeo.ie/
라즈베리 파이 재단 : https://www.raspberrypi.org
부팅 후 인터넷/언어 설정
한글 글꼴과 이모지 설치

``` sudo apt-get --yes install fonts-nanum fonts-symbola ```

마이크 스피커 설정
화면 상단 오른쪽의 스피커 아이콘을 우클릭하여 나온 메뉴에서 USB마이크가 있는지 확인후, 소리를 출력할 장치로 Analog 또는 HDMI 중 선택

### 2. MagicMirror설치
MagicMirror설치
```bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)" ```

마지막에 물어보는
Do you want use pm2 for auto starting of your MagicMirror (y/N)
에서 [N] 
Do you want to disable the screen saver? (y/N)?
에서는 [y] 

MaigcMirror 테스트

``` 
cd ~/MagicMirror/ 
npm start 
```
#### npm upgrade
```
npm upgrade: That Process was denied, so change user pi to root

pi@raspberrypi:/root $ su -
암호:
root@raspberrypi:~# npm install -g npm@latest
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
+ npm@6.10.2
added 1 package from 1 contributor, removed 13 packages and updated 63 packages in 25.439s
root@raspberrypi:~# 

```

MagicMirror가 잘 실행되는지 확인후
[Ctrl+Q]로 종료

* 실행이 안될경우
``` rm -rf ~/MagicMirror/ 
```
설치한 MagicMirror를 삭제한후
설치과정을 처음부터 다시

### 3.구글어시스턴트 및 모듈설치
사용모듈:MMM-Hotword, MMM-AssistantMk2
[제작자: Seongnoh Sean Yi] (https://github.com/eouia)
관련 프로그램 설치

``` sudo apt-get --yes install libmagic-dev libatlas-base-dev sox libsox-fmt-all mpg321
cd ~/MagicMirror/modules/
git clone https://github.com/eouia/MMM-Hotword.git
git clone https://github.com/eouia/MMM-AssistantMk2.git
```

#### MMM-Hotword설치 

```
cd ~/MagicMirror/modules/MMM-Hotword/
npm install
```

에러가 나면
```
rm -rf ~/MagicMirror/modules/MMM-Hotword/node_modules/snowboy
cd ~/MagicMirror/modules/MMM-Hotword/node_modules/
git clone https://github.com/Kitt-AI/snowboy.git
cd ~/MagicMirror/modules/MMM-Hotword/node_modules/snowboy
rm -rf ~/MagicMirror/modules/MMM-Hotword/node_modules/snowboy/.git
sed -i 's/\"node-pre-gyp\": \"^0.6.30\"/\"node-pre-gyp\": \"^0.12.0\"/' package.json
npm install nan
npm install
npm install --save-dev electron-rebuild
./node_modules/.bin/electron-rebuild
```

#### Electron
And now just download and install Electron
```
sudo npm install -g electron --unsafe-perm=true --allow-root
```
If you want to test it, install Electron quick start app
```
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Set display
export DISPLAY=:0
# Run the app
npm start
```

#### MMM-AssistantMk2설치
```
cd ~/MagicMirror/modules/MMM-AssistantMk2/
npm install
npm install --save-dev electron-rebuild
./node_modules/.bin/electron-rebuild
chmod +x ~/MagicMirror/modules/MMM-AssistantMk2/scripts/*.sh
```

#### ls results

```
pi@raspberrypi:~/MagicMirror/modules/MMM-AssistantMk2 $ ls
CONFIGURATION.md      README.md                   node_helper.js     recipes
INSTALL.md            USAGE.md                    node_modules       resources
LICENSE               auth_and_test.js            package-lock.json  scripts
MMM-AssistantMk2.css  deviceInstance.sample.json  package.json       tmp
MMM-AssistantMk2.js   gaction                     profiles           vendor
```

#### 구글API설정
https://console.actions.google.com/
에 접속하여 구글 아이디로 로그인
프로젝트 생성

https://console.cloud.google.com/
에 접속하여 상단 프로젝트 선택에서 방금 만든 프로젝트 선택

상단 검색에 Google Assistant API검색하여 해당 페이지의 "사용 설정" 클릭

그후 왼쪽 메뉴의 "API 및 서비스">"사용자 인증 정보" 클릭

"OAuth 동의 화면"탭의 정보 갱신

"사용자 인증 정보 만들기">"OAuth 클라이언트 ID" 만들기

"기타" 체크, 생성

리스트에서 방금 만든 클라이언트의 가장 우측의 JSON 다운로드

탐색기를 열어서 다운로드한 json파일을 credentials.json 으로 이름변경

/home/pi/MagicMirror/modules/MMM-AssistantMk2/ 폴더 안으로 이동 시킴

```
cd ~/MagicMirror/modules/MMM-AssistantMk2/
node auth_and_test.js
```

잠시뒤에 나오는 인터넷 창에서 구글 아이디로 로그인
사용 동의
화면에 나오는 코드를 드래그 해서 우클릭 복사
터미널에 우클릭 붙여넣기
터미널에
Type your request
나오면
Hello
입력해서 응답 잘오는지 확인하고
[Ctrl+C]

그상태에서 터미널에
```
mv token.json ./profiles/default.json
```

### 4. config파일 설정
탐색기를 열어서 config.json을 /home/pi/MagicMirror/config/ 에 덮어쓰기

#### currentweather 설정
날씨 지역설정
config.json을 편집기로 실행해서 currentweather검색
그 아래의 location항목의 따옴표 안을 자신의 지역으로 편집

#### 날씨 API설정
https://openweathermap.org/ 에 접속

상단의 Sign up으로 가입
로그인 후 My Home에서 API keys으로 이동
페이지에 있는 키를 복사
날씨 지역설정에서 편집중이던 편집기로 와서
appid 항목의 따옴표안에 붙여넣기
weatherforecast 설정
 config.json을 편집기로 실행해서 weatherforecast 검색

그 아래의 location항목의 따옴표 안을 자신의 지역으로 편집

appid 부분을 currentweather 에서 쓴거랑 동일하게 지정

편집파일저장

### 5. MagicMirror작동확인
```
cd ~/MagicMirror/
npm start
```

### 6. 완성

### 7. MagicMirror자동 실행 설정 (최종 테스트후 마지막)

```
sudo npm install -g pm2
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 start ~/MagicMirror/installers/pm2_MagicMirror.json
pm2 save
```
[Miss Result](https://github.com/jeongyoonlee2015/icaps-icaps-d.camp/blob/master/MissResult.md)

### 8.MagicMirror자동 실행 멈추는 방법
```
pm2 stop MagicMirror
```

------
Reference
1.
2.
3.
