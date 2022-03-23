//Timer


/*
timer update: 
adding the counter back so we see just the "counter" counting down instead of a long time string
*/

function startCountdown(seconds) {
  let startTime = Date.now() //
  let counter = seconds;

  const interval = setInterval(() => {
    document.body.innerHTML = "Remaining time: " + counter; 
    counter -= 1; 
    

    if(Date.now() >= startTime + (seconds * 1000)) {
      clearInterval(interval);
      document.body.innerHTML = "The countdown has ended!";
    }
  }, 1000);
}


startCountdown(25);


