# Commands

Commands extracted from the `.ino` files.
Some are present in only the EDTracker2_6050; Some in only the 9150/9250.

Most are defined in the `parseInput` function.

## c - yawscale +0.25
_Different to 9x50_

Increase the yawscale by 0.25 and rescale.
## C - Yawscale +1.0
_Different to 9x50_

Increase the yawscale by 1.0 and rescale.

## d - yawscale -0.25
_Different to 9x50_

Decrease the yawscale by 0.25 and rescale.
## G - Yawscale -1.0
_Different to 9x50_

Decrease the yawscale by 1.0 and rescale.

## e - pitchscale +0.25
_Different to 9x50_

Increase the pitchscale by 0.25 and rescale.
## E - pitchscale +1.0
_Different to 9x50_

Increase the pitchscale by 1.0 and rescale.

## f - pitchscale -0.25
_Different to 9x50_

Decrease the pitchscale by 0.25 and rescale.
## F - pitchscale -1.0
_Different to 9x50_

Decrease the pitchscale by 1.0 and rescale.

## S - Silent
- _9150_
- _9250_
- _6050_

Sets the device to be silent.
Allows device to be used as a game controller (sends joystick values only).

## - - Toggle debug
- _6050_

Toggle the debug setting.

## H -	Hello
_Different to 9x50_

Request a 'hello'. Expect a `H` hello response only (no 'startup hello' `h`).
_Note: the 6050's parseInput contains two hello conditions in the if statement!_

## t - toggle linear/expoinential mode
- _9150_
- _9250_
- _6050_

## V - Verbose
 - _9150_
 - _9250_
 - _6050_

Sets the device to be verbose.
The `outputUI` boolean is set internally, which sets up comms with the EDTracker GUI.
## I - Info (?)
- _9150_
- _9250_
- _6050_

Dump all the info.

## P - Randomize orientation (?)
- _9150_
- _9250_

Does something with the device orientation! I think randomizes it?

## R - Recalibrate Offsets
- _9150_
- _9250_
- _6050_

    recenter();

## r - full 20s recalibration
- _9150_
- _9250_
- _NOT 6050_

    fullCalib();

## D - Save Drift offset
- _6050_

Calculates and saves the drift offset, then responds with the value in an `R` response.

    "R\t", values, "\n"

## '#' - Autocenter
- _6050_

Autocenter the device, and response with `#` command and a value.

    "#", value, "\n"

## a - decrease drift comp
- _6050_

Decreases drift comp by 0.01.

## A - increase drift comp
- _6050_

Increases drift comp by 0.01.

## ^ - Toggle centering
- _6050_

Toggle centering - returns with the flag value:

    "^", togglecentering, "\n"

## 87 - full wipe ('W')
- _9150_
- _9250_
- _*NOT* 6050_

Following this command, the entire EEPROM is completely overwritten from the data sent over Serial.

## 36 - Mag Calibration Matrix pushed down from UI with orientation applied ('$')
- _9150_
- _9250_
- _*NOT* 6050_

Following this command, only the Magnetometer Calibration matrix is written to the EEPROM.
The data is sent over Serial.
