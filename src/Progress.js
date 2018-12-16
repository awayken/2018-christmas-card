import React from 'react';
import './Progress.css';

function Steps({ current, onChange, totalSteps = 1 }) {
    const steps = [];

    for (let i = 0; i < totalSteps; i++) {
        steps.push(
            <button
                className={`progress__step btn ${
                    current === i ? 'progress__step--active btn--secondary' : ''
                }`}
                key={`step_${i}`}
                onClick={onChange}
                value={i}
            >
                {i + 1}
            </button>
        );
    }

    return steps;
}

function Progress({ current = 0, onChange = () => {}, totalSteps = 1 }) {
    return (
        <div className="progress">
            <button
                className="progress__pager btn"
                disabled={current === 0}
                onClick={onChange}
                value="back"
            >
                &larr; Back
            </button>

            <Steps
                current={current}
                onChange={onChange}
                totalSteps={totalSteps}
            />

            <button
                className="progress__pager btn"
                disabled={current === totalSteps - 1}
                onClick={onChange}
                value="next"
            >
                Next &rarr;
            </button>
        </div>
    );
}

export default Progress;
