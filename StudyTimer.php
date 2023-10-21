<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="timerCss.css">
    <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
    <title>Study Timer</title>
</head> 
<body>
    <div class="mainDiv">

        <h1 class="titel">STUDY TIMER</h1>

            <div id="displayTimer" class="displayTimer">
                25:00
            </div> <!--end of displayTimer -->

            <div class="userInput">
                <input type="number" id="studyTimeInput" class="studyTimeInput" placeholder="Enter study time (minutes)">
            </div> <!--end of userInput -->

            <div class="strPauseDiv">

                <button id="strButton" class="strButton">Start</button>
                <button id="pauseButton" class="pauseButton">Pause</button>
            </div>
            
    </div><!-- End of mainDiv -->
    <script src="timerJs.js"></script>
</body>