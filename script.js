// Global Valiables
var second;
var day;
var month;
var year;
var dayz = 0;
var months = 0;
var years = 0;
var seconds = 0;
var Secondz = 0;
var stoptimer = true;

// Start timer function
function startTimer() {
  if (stoptimer == true) {
    stoptimer = false;

    // If time start with 0 than use (if condition)
    if (seconds == 0) {
      timerCycle();
    }
    // If time is greater than 0 use (else if condition)
    else if (Secondz == 0) {
      call();
    }
  }
}

// Stop timer function
function stopTimer() {
  if (stoptimer == false) {
    stoptimer = true;
  }
}

// Static date and time
var date = new Date();
month = date.getMonth();
day = date.getDate();
year = date.getFullYear();
second = date.getSeconds();

// When Start function is start with 0 than continue this function
function timerCycle() {
  if (stoptimer == false) {
    var date = new Date();
    m = date.getMonth();
    d = date.getDate();
    y = date.getFullYear();
    s = date.getSeconds();

    // For seconds
    if (seconds >= 60) {
      seconds = 0;
    }

    if (second < s) {
      seconds = s - second - 1;
    } else if (second >= s) {
      seconds = seconds + 1;
    }

    // For days
    if (day < d) {
      dayz = d - day - 1;
    } else if (day >= d) {
      dayz = dayz;
    }

    // For Months
    if (month < m) {
      months = m - month - 1;
    } else if (month >= m) {
      months = months;
    }

    // For Years
    if (year < y) {
      years = y - year - 1;
    } else if (year >= y) {
      years = years;
    }

    // Print all values of Date and time
    document.getElementById("stopwatch").innerHTML =
      "0" + dayz + ":" + "0" + months + ":" + "0" + years + "." + seconds;
  }
  // use to recall the function (Cyclic way)
  setTimeout("timerCycle()", 1000);
}

// When start function is start with greater than 0  than continue this function
function call() {
  if (stoptimer == false) {
    var date = new Date();
    m = date.getMonth();
    d = date.getDate();
    y = date.getFullYear();
    s = date.getSeconds();

    // Condition for Second
    if (seconds > 60) {
      seconds = 0;
    }
    if (second < s) {
      seconds = s - second - 1;
    } else if (second >= s) {
      seconds = seconds + 1;
    }

    var sec = seconds + Secondz;
    // Print values
    console.log(sec + " Greater then 0");

    if (Secondz >= 0) {
      Secondz = Secondz + 1;
    }

    var text = seconds + Secondz - 1;

    // Print values
    console.log(text + " Another test");
  }
  // use to recall the function (Cyclic way)

  setTimeout("call()", 1000);
}

function resetTimer() {
  stopwatch.innerHTML = "00:00:00:00";
  stoptimer = true;
  years = 0;
  months = 0;
  dayz = 0;
  seconds = 0;
  console.log("Its work");
}
