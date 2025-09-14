import { useState, useRef } from "react";
import ResultsDialog from "./Results";

export default function TimerChallenge({title, targetTime}) {
  const [timeExpered, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef(); // Indipendent timer for each challenge
  const dialog = useRef();

  const handleStartChallenge = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      setTimerStarted(false);
      dialog.current.showModal();
    }, parseInt(targetTime) * 1000);

    setTimerStarted(true);
  }

  const handleStopChallenge = () => {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timeExpered && <ResultsDialog ref={dialog} result='lost' targetTime={targetTime} />}
      <section className='challenge'>
        <h2>{title}</h2>
        {timeExpered && <p className='challenge-complete'>You lost!</p>}
        <p className='challenge-time'>
          {targetTime} second {parseInt(targetTime) > 1 ? `'s` : ''}
        </p>
        <div>
          <button onClick={timerStarted ? handleStopChallenge : handleStartChallenge}>
            {timerStarted ? 'Stop' : 'Start'} challenge
          </button>
        </div>
        <p className={timerStarted ? 'active' : ''}>{timerStarted ? 'Time is running...' : 'Timeer inactive.'}</p>
      </section>
    </>
  );
}
