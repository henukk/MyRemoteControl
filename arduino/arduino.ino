#include <IRremote.hpp>
#include <UIPEthernet.h>

#define IR_SEND_PIN 3

#define DEBUG false // Set to 'true' for debugging, 'false' to disable

static uint8_t mac[6] = { 0x54, 0x55, 0x58, 0x10, 0x00, 0x24 };
IPAddress ip(192, 168, 0, 200);

EthernetServer server(80);

void setup() {
  IrSender.begin(IR_SEND_PIN);
  Ethernet.begin(mac, ip);
  server.begin();

  if (DEBUG) {
    Serial.begin(9600);
    Serial.println(Ethernet.localIP());
    Serial.println(Ethernet.subnetMask());
    Serial.println(Ethernet.gatewayIP());
    Serial.println(Ethernet.dnsServerIP());
  }
}

//Example on/off: http://192.168.0.200/?code=0xFF02FD
void loop() {
  EthernetClient client = server.available();
  if (client) {
    String currentLine = "";
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        if (c == '\n') {
          if (currentLine.length() == 0) {
            // Send HTTP header with CORS
            client.println("HTTP/1.1 200 OK");
            client.println("Content-Type: text/html");
            client.println("Access-Control-Allow-Origin: *");
            client.println("Access-Control-Allow-Methods: GET, POST");
            client.println("Access-Control-Allow-Headers: X-Requested-With");
            client.println("Connection: close");
            client.println();
            break;
          } else {
            if (currentLine.startsWith("GET /?code=")) {
              int codeIndex = currentLine.indexOf("code=") + 5;
              String codeString = currentLine.substring(codeIndex, currentLine.indexOf(' ', codeIndex));
              uint32_t code = strtoul(codeString.c_str(), NULL, 16);
              IrSender.sendNEC(code, 32);
              if (DEBUG) {
                Serial.println(codeString);
              }
            }
            currentLine = "";
          }
        } else if (c != '\r') {
          currentLine += c;
        }
      }
    }
    client.stop();
  }
}
