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
  if(Rfsr < 15000) //FSR 저항이 15000미만으로 떨어지면 Switch On
  {
    Serial.println("ON"); 
  delay(200);
  }else //FSR 저항이 15000이상이거나 인식되지 않으면(inf) Switch Off
    Serial.println("OFF");
  delay(200)
}
