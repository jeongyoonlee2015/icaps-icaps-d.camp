// FROM https://m.blog.naver.com/PostView.nhn?blogId=boilmint7&logNo=220927685228&proxyReferer=https%3A%2F%2Fwww.google.com%2F
// About Pressure Sensor

#define SHOCK 8 //핀 설정(디지털신호 받는 핀)

void setup() {
  Serial.begin(9600);//PC모니터로 센서값을 확인하기위해서 시리얼 통신을 정의해줍니다.
                      //시리얼 통신을 이용해 PC모니터로 데이터 값을 확인하는 부분은 자주사용되기 때문에
  pinMode(SHOCK, INPUT);
}

void loop() {
  /*
    조건문인 IF문을 사용하여 충격이 감지되면(HIGH)
    i) 알람이꺼지도록 AND 날씨정보를 제공
    ii) 날씨정보를 제공한다.
  */
  if (digitalRead(SHOCK ) == HIGH) {
     //이 부분에서 돌도록!!
  }
  delay(100);
}

// FROM 
// About Weather Agency
