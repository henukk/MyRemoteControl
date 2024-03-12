# My Remote Control

## Table of Contents
- [Description](#description)
- [Directory Structure](#directory-structure)
- [Arduino Materials](#arduino-materials)
- [Modifying Arduino Configuration](#modifying-arduino-configuration)
- [Configuring the React App](#configuring-the-react-app)
- [Contributing](#contributing)
- [License](#license)

## Description
My Remote Control is a project combining the power of Arduino Nano and a React application to create a versatile infrared remote control. This project can control various devices like TVs, LED strips, air conditioners, and more, using infrared signals.

## Directory Structure
The project is divided into two main directories:
- `app`: Contains the React application code.
- `arduino`: Contains the Arduino sketch.

## Arduino Materials
The Arduino setup for this project includes:
- Arduino Nano
- Nano Screw Terminal Adapter
- Ethernet Shield Mini ENC28J60
- IR LED KY-005

Below is an example image showing how to connect these components:
![Arduino Setup](./wireframe.png)

## Modifying Arduino Configuration
To modify the Arduino configuration, such as setting the MAC address, IP address, and uploading the code to Arduino, follow these steps:
1. Open the Arduino sketch located in the `arduino` directory.
2. Modify the `MAC` and `IP` address as per your network configuration.
3. Use the Arduino IDE to upload the sketch to your Arduino Nano.

## Configuring the React App
To configure and run the React app:
1. Navigate to the `app` directory.
2. Modify the code as needed to set up your remote control configuration.
3. Install the necessary packages using `npm install`.
4. Start the application with `npm start`.

## Contributing
Contributions to the My Remote Control project are welcome! Feel free to fork the repository, make changes, and submit pull requests.

## License
This project is licensed under the terms specified in [LICENSE.txt](./LICENSE.txt).
