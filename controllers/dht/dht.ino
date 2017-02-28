#include "DHT.h"

DHT dht(2, DHT22);

void setup() {  
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  Serial.print("Temp: ");Serial.print(temperature);Serial.print("\tHum:");Serial.println(humidity);
  delay(3000);
}
