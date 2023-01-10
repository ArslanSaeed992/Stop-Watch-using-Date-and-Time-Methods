<!DOCTYPE html>
<html lang="en">
  <head>    
    <!-- responsive links -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
    <!-- Style Sheet Include  -->
    <link rel="stylesheet" type="text/css" href="style.css" />
   
    <!-- title and favicon -->
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3003/3003202.png">
    <title>Stop Watch</title>

  </head>
  <body>
    <!-- current date and time  -->
    <div id="stopwatch">00:00:00.<span id="test">00</span></div>

    <!-- All buttons Start Stop Reset  -->
    <ul id="buttons">
      <li><button onclick="startTimer()">Start</button></li>
      <li><button onclick="stopTimer()">Stop</button></li>
      <li><button onclick="resetTimer()">Reset</button></li>
    </ul>

    <!-- JavaScript include  -->
    <script src="script.js"></script>
  </body>
</html>
