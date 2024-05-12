import css from './Feedback.module.css';

export default function Feedback({
  numberValue: { good, bad, neutral },
  total,
  positiveFeedback,
}) {
  return (
    <ul className={css.mainList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
