1. SD Formatting (3rd.05.17.2019)
2. Rufus X Raspbian Stretch with desktop (Kernel ver.4.14 Release 2019-04-08) (1st.05.17.2019)
3. Installation Raspbian (3rd.05.17.2019)
4. Basic Configuration


[go to console Err](https://github.com/jeongyoonlee2015/icaps-icaps-d.camp/blob/master/Plan/1_console_Err.md)

## 2019.06.29.
1. Arduino Pressure Mat
2. Raspberry Pi Installation
3. Connect Arduino - Raspberry Pi


-------
# 20190625
[아두이노 센서값 받아오기](https://ssoonidev.tistory.com/56)

```
//OS: Raspberrian
//Language: NodeJS

$ dmesg | tail //포트번호확인
$ npm install serialport --save // serial package 설치

var SerialPort = require('serialport'),
	portName = '/dev/ttyUSB0',
	sp = new SerialPort(portName),
	sensorVal = 0;

sp.on('open', funtion(){
	console.log('Serial Port OPEN');
	sp.on('data', function(data){
		console.log("Light Sensor Value: ", data[0]);
	});
});
```

[터치센서만들기](http://blog.naver.com/PostView.nhn?blogId=roboholic84&logNo=221387875217&categoryNo=7&parentCategoryNo=&from=thumbnailList)
```
void setup() {

  // put your setup code here, to run once:

Serial.begin(9600);

}
void loop() {

  // put your main code here, to run repeatedly:

int touch1 = analogRead(0);

int touch2 = analogRead(1);

Serial.print(touch1);

Serial.print("\t");

Serial.println(touch2);

}
```

[압력센서](https://m.blog.naver.com/PostView.nhn?blogId=rhkd824&logNo=220555654394&proxyReferer=https%3A%2F%2Fwww.google.com%2F)

[블루투스 연동](https://webnautes.tistory.com/995)

----

* 블루투스 연동 문제
* 디바이스 호환 문제
