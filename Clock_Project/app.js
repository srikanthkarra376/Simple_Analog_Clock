 function AnalogClock() {
      with(new Date()) {
          hrs = 30 * (getHours() % 12 + getMinutes() / 60); 
          mns = 6 * getMinutes(); 
          scs = 6 * getSeconds(); 
    
          document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + scs + "deg);";
          document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + mns + "deg);";
          document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + hrs + "deg);";

          setTimeout(AnalogClock, 1000); 
      }
  }

  window.onload = AnalogClock ;