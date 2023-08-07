# Commands

Commands extracted from the `.ino` files.
Some are present in only the EDTracker2_6050; Some in only the 9150/9250.

Most are defined in the `parseInput` function.

Commands are grouped into "Common", "9x50 only", or "6050 only".

## Common
### H - Hello
Request a 'hello' ping response.

#### 9x50 variant

If in startup, expect response 'startup hello' (`h`); if not, expect regular 'hello' (`H`).

#### 6050 variant

Expect a `H` hello response only (no 'startup hello' `h`).

_Note: the 6050's parseInput contains two hello conditions in the if statement!_


### I - Info (?)

Dump all the info.

### P - Randomize orientation (?)
- _9150_
- _9250_

Does something with the device orientation! I think randomizes it?

### R Recalibrate Offsets
_9150_
_9250_

    recenter();
### S - Silent

Sets the device to be silent.

Allows device to be used as a game controller (sends joystick values only).

### t - toggle linear/expoinential mode
_9150_
_9250_

### V - Verbose
_9150_
_9250_

Sets the device to be verbose.

The `outputUI` boolean is set internally, which sets up comms with the EDTracker GUI.

## 6050 only

### c - yawscale +0.25

Increase the yawscale by 0.25 and rescale.

### C - Yawscale +1.0

Increase the yawscale by 1.0 and rescale.

### d - yawscale -0.25

Decrease the yawscale by 0.25 and rescale.

### G - Yawscale -1.0

Decrease the yawscale by 1.0 and rescale.

### e - pitchscale +0.25

Increase the pitchscale by 0.25 and rescale.

### E - pitchscale +1.0

Increase the pitchscale by 1.0 and rescale.

### f - pitchscale -0.25

Decrease the pitchscale by 0.25 and rescale.
### F - pitchscale -1.0

Decrease the pitchscale by 1.0 and rescale.

### a - decrease drift comp

Decreases drift comp by 0.01.

### A - increase drift comp

Increases drift comp by 0.01.

## D - Save Drift offset

Calculates and saves the drift offset, then responds with the value in an `R` response.

    "R\t", values, "\n"

### '#' - Autocenter

Autocenter the device, and respond with `#` command and a value.

    "#", value, "\n"


### ^ - Toggle centering

Toggle centering - returns with the flag value:

    "^", togglecentering, "\n"

### - - Toggle debug

Toggle the debug setting.

## 9x50 only

### r - full 20s recalibration
_9150_
_9250_

    fullCalib();

### 87 - full wipe ('W'?)

Following this command, the entire EEPROM is completely overwritten from the data sent over Serial.

### 36 - Mag Calibration Matrix pushed down from UI with orientation applied ('$'?)

Following this command, only the Magnetometer Calibration matrix is written to the EEPROM.
The data is sent over Serial.
