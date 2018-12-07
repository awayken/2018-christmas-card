import React from 'react';
import './Progress.css';

function Steps({ current, onChange, totalSteps = 1 }) {
    const steps = [];

    for (let i = 0; i < totalSteps; i++) {
        steps.push(
            <button
                className={`progress__button${
                    current === i ? ' progress__button--current' : ''
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

function Progress({
    current = 0,
    onChange = () => {},
    showSteps = false,
    totalSteps = 1
}) {
    return (
        <div className="progress">
            <button
                className="progress__button"
                disabled={current === 0}
                key="back"
                onClick={onChange}
                value="back"
            >
                &lt;
            </button>

            {showSteps && (
                <Steps
                    current={current}
                    onChange={onChange}
                    totalSteps={totalSteps}
                />
            )}

            <button
                className="progress__button"
                disabled={current === totalSteps - 1}
                key="next"
                onClick={onChange}
                value="next"
            >
                &gt;
            </button>
        </div>
    );
}

export default Progress;
