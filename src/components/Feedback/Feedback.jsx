import css from './Feedback.module.css';

export default function Feedback ({clicks, totalClicks, percentOfPositive}) { 
    if (totalClicks === 0) { 
        return (
        <div className={css.feedback}>
            <p>No feedback yet</p>
        </div>)
    } else {
        return (
            <div>
                <p>Good:{clicks.good}</p>
                <p>Neutral:{clicks.neutral}</p>
                <p>Bad:{clicks.bad}</p>
                <p>Total:{totalClicks}</p>
                <p>Positive:{percentOfPositive}</p>
            </div>
        )
    }
}