import React from 'react';
import './Progress.css';

function Steps({ current, onChange, totalSteps = 1 }) {
    const steps = [];

    for (let i = 0; i < totalSteps; i++) {
        steps.push(
            <button
                className={`progress__btn progress__step ${
                    current === i ? 'progress__step--active' : ''
                }`}
                key={`step_${i}`}
                onClick={onChange}
                value={i}
            >
                <span className="visuallyhidden">Question {i + 1}</span>
            </button>
        );
    }

    return steps;
}

function Progress({ current = 0, onChange = () => {}, totalSteps = 1 }) {
    return (
        <div className="progress">
            <button
                className="progress__pager progress__pager--back progress__btn"
                disabled={current === 0}
                onClick={onChange}
                value="back"
            >
                <span className="progress__pager-label">Back</span>
            </button>

            <Steps
                current={current}
                onChange={onChange}
                totalSteps={totalSteps}
            />

            <button
                className="progress__pager progress__pager--next progress__btn"
                disabled={current === totalSteps - 1}
                onClick={onChange}
                value="next"
            >
                <span className="progress__pager-label">Next</span>
            </button>
        </div>
    );
}

export default Progress;
