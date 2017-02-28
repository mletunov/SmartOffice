#ifndef MAC_H
#define MAC_H

#include <Arduino.h>

byte* getMac(int macPtr, bool verbose = false, bool forceNew = false);

void printMac(byte macAddress[]);
void readMac(int macPtr, byte macAddress[]);
void generateMac(int macPtr);
void clearMac(int macPtr);

#endif
