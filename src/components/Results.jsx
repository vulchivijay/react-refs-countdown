import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultsDialog({targetTime, timeLeft, onReset}, ref) {
  const dialog = useRef();

  const userLost = timeLeft <= 0;
  const result = userLost ? 'lost' : 'won';
  const formattedTimeLeft = (timeLeft / 1000).toFixed(2);
  const score = Math.round((1 - (timeLeft / (targetTime * 1000))) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return (
    <>
      <dialog className='result-modal' ref={dialog}>
        <h2>You {result} {result === 'won' && score }</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds!</p>
        <p>You stopped the time with <strong>{formattedTimeLeft} seconds left!</strong></p>
        <form method='dialog' onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;