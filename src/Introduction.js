import React from 'react';
import './Introduction.css';

function Introduction({ onStart }) {
    return (
        <section className="introduction">
            <h1 className="introduction__heading">The 2018 Rausch Quiz!</h1>

            <p>
                Pop quiz, Hot Shot! We've had an eventful year, and we want to
                see how closely you've been paying attention. Take our quiz and
                see how well you know us. You may just learn something new about
                a little someone joining our family next year...
            </p>

            <button className="introduction__button" onClick={onStart}>
                Start Quiz
            </button>
        </section>
    );
}

export default Introduction;
