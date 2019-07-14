# Arduino Start (init 07.14.19)

## Base Code
```.ino
int FSRpin = 0; // FSRpin을 아날로그0(A0)에 연결

int Vo;    // 센서값을 저장할 변수

float Rfsr;

void setup() {  

  Serial.begin(9600);  // 센서값을 읽기 위해 시리얼 모니터를 사용할 것을 설정.

}

void loop()

{

Vo = analogRead(FSRpin);  // 아날로그를 입력 받음 (0~1023)

  Rfsr = ((9.78 * Vo)/(1-(Vo/1023.0)));

  Serial.print("Rfsr: "); // sensor: 라는 텍스트를 프린트한다.
  delay(300);
  Serial.println(Rfsr);  // println은 줄바꿈 명령이다. Rfsr의 값을 출력한다.

}

```
