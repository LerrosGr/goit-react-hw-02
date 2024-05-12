import css from './Options.module.css';

export default function Options({ updateFeedback, total, resetFeedback }) {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {total > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
