# Commands

Commands extracted from the `.ino` files.
Some are present in only the EDTracker2_6050; Some in only the 9150/9250.

Most are defined in the `parseInput` function.

##     C    Center
_9150_
_9250_

Centers the device values.

##     S    Silent
_9150_
_9250_

Sets the device to be silent.
Allows device  to be used as a game controller (sends joystick values only).
##     H	Hello
_9150_
_9250_

Request a 'hello'. If in startup, expect response 'startup hello' (`h`); if not, expect regular 'hello' (`H`).

##     t      toggle linear/expoinential mode
_9150_
_9250_

##     V    Verbose
_9150_
_9250_

Sets the device to be verbose.
The `outputUI` boolean is set internally, which sets up comms with the EDTracker GUI.
##     I    Info (?)
_9150_
_9250_

##     P    Randomize orientation (?)
_9150_
_9250_


##     R Recalibrate Offsets
_9150_
_9250_

    recenter();

##     r full 20s recalibration
_9150_
_9250_

    fullCalib();

##     87 full wipe ('W')
_9150_
_9250_

Following this command, the entire EEPROM is completely overwritten from the data sent over Serial.

##     36 Mag Calibration Matrix pushed down from UI with orientation applied ('$')
_9150_
_9250_

Following this command, only the Magnetometer Calibration matrix is written to the EEPROM.
The data is sent over Serial.
