import React from 'react';

import miles0 from './rewards/no-story-to-tell.png';

export const questions = [
    {
        category: 'Miles',
        question: `Miles's novel, No Story to Tell, won the Blazing Lantern Fiction Prize this year. What is the plot of that novel?`,
        answers: [
            {
                id: 'm00',
                text: `A young novelist somehow wins a fiction prize and has to deal with feelings of inadequacy.`
            },
            {
                id: 'm01',
                text: `An old lady wakes up knowing she will die that day and tries to tie up loose ends.`
            },
            {
                id: 'm02',
                text: `A man wakes up in a world where memory can be erased with a drug and must fight against the company that makes it.`
            },
            { id: 'm03', text: `It's literally just 200 blank pages.` }
        ],
        correctAnswer: 'm01'
    }
];

export const rewards = [
    {
        alt: 'A screenshot of the Winners page on BlazingLantern.com',
        content: (
            <p>
                While it hasn't lead to literary domination, Miles was astounded
                to learn that{' '}
                <a
                    href="http://www.blazinglantern.com/winner-miles-rausch.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    his novel won the competition
                </a>
                . The plot was inspired by elements of the life of his
                grandmother, Harriet Rausch, who passed away this past March. He
                finished and submitted the novel on the weekend of her funeral.
                He hopes she likes it.
            </p>
        ),
        image: miles0
    }
];
