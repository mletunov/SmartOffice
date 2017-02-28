#include "mac.h"
#include <EEPROM.h>

byte* getMac(int macPtr, bool verbose, bool forceNew) {
  if (forceNew)
    clearMac(macPtr);

  byte* macAddress = new byte[6];
  readMac(macPtr, macAddress);

  if (verbose)
    printMac(macAddress);

  return macAddress;
}

void printMac(byte macAddress[]) {
  Serial.print("Mac address: ");
  if (macAddress[0] < 10)
    Serial.print("0");
  Serial.print(macAddress[0], HEX);
  for(int i = 1; i < 6; ++i) {
    Serial.print("-");
    if (macAddress[i] < 10)
      Serial.print("0");
    Serial.print(macAddress[i], HEX);
  }
  
  Serial.println();
}

void readMac(int macPtr, byte macAddress[]) {
  for(int i = 0; i < sizeof(macAddress)/sizeof(macAddress[0]); ++i) {
    macAddress[i] = EEPROM.read(macPtr + i);
  }

  if (macAddress[0] == 0)
    return;
  
  generateMac(macPtr);
  readMac(macPtr, macAddress);
}

void generateMac(int macPtr) {
  randomSeed(analogRead(0));
  
  for(int i = 0; i < 6; ++i) {
    EEPROM.write(macPtr + i, i == 0 ? 0 : random(256));
  }
}

void clearMac(int macPtr){
  for(int i = 0; i < 6; ++i) {
    EEPROM.write(macPtr, 255);
  }
}

