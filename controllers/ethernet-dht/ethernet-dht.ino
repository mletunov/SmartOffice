#include <SPI.h>
#include <Ethernet.h>

#include "mac.h"
#include "DHT.h"

#define NEW_MAC false
#define VERBOSE true

DHT dht(2, DHT22);

void setup() {
  Serial.begin(9600);  

  byte* macAddress = getMac(0, VERBOSE, NEW_MAC);
  if (Ethernet.begin(macAddress) == 0){
    Serial.println("Failed to configure Ethernet using DHCP");
    while (true);
  }
#if VERBOSE  
  else {
    Serial.print("Ethernet is configured successfully. ");
    Serial.print("IP address: ");
    Serial.println(Ethernet.localIP());
  }
#endif

  dht.begin();
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  Serial.print("Temp: ");Serial.print(temperature);Serial.print("\tHum:");Serial.println(humidity);
  delay(3000);
}
