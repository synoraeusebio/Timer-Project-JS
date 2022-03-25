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

function toFormattedTime( totalSeconds ) {
  const minutes = Math.floor( totalSeconds / 60 );
  const seconds = totalSeconds % 60;

  const format = ( num ) => String( num ).padStart( 2, '0' );

  return `${ format( minutes ) }:${ format( seconds ) }`;
}

function startCountdown( seconds ) {
  const interval = setInterval( ( startTime, seconds ) => {
    // If the given number of seconds has elapsed,
    // show the 'countdown ended' message and nothing more
    const endTime = startTime + seconds * 1000;

    const elapsedSeconds = Math.floor( ( Date.now() - startTime ) / 1000 );
    const remainingSeconds = seconds - elapsedSeconds;

    getTimeDisplay().innerHTML = toFormattedTime( remainingSeconds ); 

    if ( Date.now() >= endTime ) {
      clearInterval( interval );
      getEndedDisplay().innerHTML = 'Ended!';
    }
  }, 1000, Date.now(), seconds );
}