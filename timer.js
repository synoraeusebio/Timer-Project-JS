//Timer


/*
timer update: 
adding the counter back so we see just the "counter" counting down instead of a long time string
*/

function getCountdown() {
  return document.querySelector( '.timer__countdown' );
}

function getTimeDisplay() {
  return document.querySelector( '.timer__time-display' );
}

function getEndedDisplay() {
  return document.querySelector( '.timer__ended' );
}

function show( element ) {
  element.style.display = 'initial';
}

function hide( element ) {
  element.style.display = 'none';
}

function startCountdown(seconds) {
  let startTime = Date.now() //
  let counter = seconds;

  const interval = setInterval(() => {
    counter -= 1; 
    getTimeDisplay().innerHTML = counter; 

    if(Date.now() >= startTime + (seconds * 1000)) {
      clearInterval(interval);

      hide( getCountdown() );
      show( getEndedDisplay() );
    }
  }, 1000);
}