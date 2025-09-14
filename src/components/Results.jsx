export default function ResultsDialog({ref, result, targetTime}) {
  return (
    <>
      <dialog className='result-modal' ref={ref}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds!</p>
        <p>You stopped the time with <strong>X seconds left!</strong></p>
        <form method='dialog' onSubmit={(e) => e.target.parentNode.close()}>
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}