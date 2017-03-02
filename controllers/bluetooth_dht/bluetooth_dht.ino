#include <SoftwareSerial.h>
#include "DHT.h"

SoftwareSerial blueSerial(10, 11); // RX, TX
DHT dht(2, DHT22);

void setup() {
  Serial.begin(9600);
  blueSerial.begin(9600);

  dht.begin();
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();  

  String json = "{temp:" + String(temperature) + ",hum:" + String(humidity) + "}";
  Serial.println(json);
  blueSerial.println(json);
  delay(3000);
}
