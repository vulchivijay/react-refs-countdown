import { useState, useRef } from "react";
import ResultsDialog from "./Results";

export default function TimerChallenge({title, targetTime}) {
  const [timeLeft, setTimeLeft] = useState(targetTime * 1000);
  const timer = useRef(); // Indipendent timer for each challenge
  const dialog = useRef();
  const timerIsActive = timeLeft > 0 && timeLeft < targetTime * 1000;

  if (timeLeft <= 0 ) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStartChallenge = () => {
    timer.current = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 10);
    }, 10); // 10 milliseconds for testing purposes
  }

  const handleStopChallenge = () => {
    dialog.current.open();
    clearInterval(timer.current);
  }

  const handleResetChallenge = () => {
    setTimeLeft(targetTime * 1000);
  }

  return (
    <>
      <ResultsDialog
        ref={dialog}
        targetTime={targetTime}
        timeLeft={timeLeft}
        onReset={handleResetChallenge} />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second {parseInt(targetTime) > 1 ? `'s` : undefined }
        </p>
        <div>
          <button onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}>
            {timerIsActive ? 'Stop' : 'Start'} challenge
          </button>
        </div>
        <p className={timerIsActive ? 'active' : ''}>{timerIsActive ? 'Time is running...' : 'Timeer inactive.'}</p>
      </section>
    </>
  );
}
