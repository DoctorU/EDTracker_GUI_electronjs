# Response Values
## H	Hello
Response is a simple "hello".
Sent during "startupPhase 2; or during normal operation, after drift compensation has been calculated.

### Typical line data

    "H\n"

## h	Startup Hello
Sent when a "Hello" command is received, and in startup mode.

### Typical line data

    h


            Serial.println("H"); // Hello
        if (startupPhase == 2)
        {
          if (startupSamples == 1500)
          {
            xDriftComp = (newv[0] - lastDriftX) * 69.53373;
            startup = false;
            recenter();
            Serial.println("H"); // Hello
          }
          startupSamples++;
          return ;
        }
      }

## Mag oops
Sent if debug is compiled in, and returns the raw magnetometer sample data.

### Typical line data

    "Mag oops [", magSampled, "]\n"

    //scale +/- PI to +/- 32767
    for (int n = 0; n < 3; n++)
      newv[n] = newv[n]   * 10430.06;

    // move to pre-calibrate
--
      Serial.print((int)rawMagHeading ); //
      printtab();
      Serial.print((int)magHeading  );
      printtab();
      Serial.print((int)compass[3] ); //
      printtab();
#endif

      Serial.println("");

    }

    if (nowMillis > lastUpdate)
    {
      blink();

      // apply drift compensation
--

      lastUpdate = nowMillis + 100;
      lastDriftX = newv[0];

      if (outputUI )
      {
        long tempNow;
        mpu_get_temperature (&tempNow);

## T	Temperature
Sent in regular operation.

### Typical line data
     "T\t", tempNow, "\n"

## M Magheading
Only sent if the mag heading changes.
constrained to between +-32767.
size: double-precision float.

### Typical line data
    "M\t", outputLPF, "\n"

## S	Silent confirmation
Sent when command is 'S'.
outputUI is set to false, to silent

### Typical line data
    "S", dmp_set_fifo_rate(DEFAULT_MPU_HZ), "\n"

## H Hello Response
Sent when command is 'H'.
If during startup, then response is lower case; otherwise, response is uppercase.
### Typical line data    else if (command == 'H')
    "h\n"
    "H\n"

## t	Toggle linear/exponential mode
Command only (move over to COMMANDS.md).
Resets the internal exponential scale mode in the EEPROM, and recalculates.

## V	Verbose Response
Responds with a lot of information!
Sent when command is 'V'.

### Typical response data
    "V\n"
    sendInfo();
    scl();
    outputUI = true;
}

/*******************************************************************************************************
* [M] Function to recenter the device to the current positional reading
********************************************************************************************************/
void recenter()
{
  if (outputUI) {
    Serial.println("M\tR");
  }
  sampleCount = 0;

  for (int i = 0; i < 4; i++)
    compass[i] = 0.0;

  calibrated = false;
  offsetMag = false;
--
}

/*******************************************************************************************************
* Convenience function - output a triple array prefixed by a message to serial IO
********************************************************************************************************/
void mess(char * m, long * v)
{
  Serial.print(m);
  Serial.print(v[0]); Serial.print(" / ");
  Serial.print(v[1]); Serial.print(" / ");
  Serial.println(v[2]);
}

/*******************************************************************************************************
* Get axis scaling from EEPROM
********************************************************************************************************/
void getScales()
{
--
  Serial.println(b);
}

/*******************************************************************************************************
* [I] Output info string to serial IO
********************************************************************************************************/
void sendInfo()
{
  Serial.print("I\t");
  Serial.println(infoString);
}

/*******************************************************************************************************
* [s] Output config data to serial IO (scaling mode, scale settings and LPF setting)
********************************************************************************************************/
void scl()
{
  Serial.print("s\t");
  Serial.print(expScaleMode);
  printtab();
  Serial.print(scaleF[0]);
  printtab();
  Serial.print(scaleF[1]);
  printtab();
  Serial.println(outputLPF);
}

/*******************************************************************************************************
* [Q] Output raw mag data to serial IO
********************************************************************************************************/
void reportRawMag(short mag[])
{
  Serial.print("Q\t");
  for (int i = 0; i < 3; i++)
  {
    Serial.print(mag[i]/MAG_SCALEFACTOR);
    printtab();
  }
  Serial.println("");
}

/*******************************************************************************************************
* [q] Output the raw mag calibration matrix to serial IO
********************************************************************************************************/
void reportRawMagMatrix()
{
  Serial.print("q\t");
  for (int i = 0; i < 3 ; i++)
  {
    Serial.print( magOffset[i], 6);
    printtab();
  }
  //raw mag calibration
  for (int i = 9; i < 18 ; i++)
  {
    Serial.print( magXform[i], 13);
    printtab();
  }
  Serial.println("");
}

/*******************************************************************************************************
* Recenter the device and put it into the startup phase for a full gyro calibration to be performed
********************************************************************************************************/
void fullCalib()
{
  recenter();
  startupPhase = 0;
  startup = true;
}

void printtab()
{
  Serial.print("\t");
}

/*******************************************************************************************************
* Read the mag calibration values from EEPROM and set the runtime vars accordingly
********************************************************************************************************/
void loadMagCalibration()
{
  for (int i = 0; i < 3 ; i ++)
