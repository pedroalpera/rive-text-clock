const riveInstance = new rive.Rive({
  src: "time.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "State Machine 1",

  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();

    riveInstance.setTextRunValue("TimeRun1", "");

    // Calling showTime function at every second
    setInterval(showTime, 1000);

    // Defining showTime funcion
    function showTime() {
      // Getting current time and date
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      am_pm = "AM";

      // Setting time for 12 Hrs format
      if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
      } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
      }

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let currentTime = hour + ":" + min + ":" + sec + am_pm;

      // Displaying the time
      riveInstance.setTextRunValue("TimeRun1", currentTime);
      riveInstance.setTextRunValue("TimeRun2", currentTime);
      riveInstance.setTextRunValue("TimeRun3", currentTime);
      riveInstance.setTextRunValue("TimeRun4", currentTime);
    }

    showTime();


  },
});
