import React from 'react';
import './Introduction.css';

function Introduction({ onStart }) {
    return (
        <section className="introduction">
            <h1 className="introduction__heading">
                <span className="visuallyhidden">
                    Rausch Family: 2018 Christmas Quiz
                </span>
            </h1>

            <p>
                <strong>Pop quiz, Hot Shot!</strong>
            </p>
            <p>
                We've had an eventful year, and we want to see how closely
                you've been paying attention. We've advanced careers, both
                professional and academic. We've experienced milestones, both
                small and large. We've grown as individuals and are growing as a
                family. 2018 was definitely not a year of stasis.
            </p>
            <p>
                Take the 2018 Rausch Quiz and see how well you know The
                Rausches. We'll reward you along the way with pictures and
                videos and witty copy. And who knows? You may just learn
                something sexy about a little someone new joining the family in
                2019.
            </p>

            <button className="btn btn--primary btn--next" onClick={onStart}>
                Take the Quiz
            </button>
        </section>
    );
}

export default Introduction;
