//Timer


/*
timer update: 
adding the counter back so we see just the "counter" counting down instead of a long time string
*/

function startCountdown(seconds) {
  let startTime = Date.now() //
  let counter = seconds;

  const interval = setInterval(() => {
    const timeDisplayElement = document.querySelector( '.timer__time-display' );
    counter -= 1; 
    timeDisplayElement.innerHTML = counter; 

    if(Date.now() >= startTime + (seconds * 1000)) {
      clearInterval(interval);

      const countdownElement = document.querySelector( '.timer__countdown' );
      countdownElement.style.display = 'none';

      const endedElement = document.querySelector( '.timer__ended' );
      endedElement.style.display = 'initial';
    }
  }, 1000);
}


startCountdown(3);


