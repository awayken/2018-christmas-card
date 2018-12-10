import React from 'react';

import ainsleySchool from './rewards/ainsley-school.jpg';
import ainsleyTooth from './rewards/ainsley-tooth.jpg';
import ianGlasses from './rewards/ian-glasses.jpg';
import milesNovel from './rewards/no-story-to-tell.png';

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
    },
    {
        category: 'Miles',
        question: `This is sample question 2. What is the answer?`,
        answers: [
            {
                id: 'm10',
                text: `A young novelist somehow wins a fiction prize and has to deal with feelings of inadequacy.`
            },
            {
                id: 'm11',
                text: `An old lady wakes up knowing she will die that day and tries to tie up loose ends.`
            },
            {
                id: 'm12',
                text: `A man wakes up in a world where memory can be erased with a drug and must fight against the company that makes it.`
            },
            { id: 'm13', text: `It's literally just 200 blank pages.` }
        ],
        correctAnswer: 'm10'
    },
    {
        category: 'Holli',
        question: `Holli loves Disney World. What was the reason for her visit there this summer?`,
        answers: [
            {
                id: 'h00',
                text: `Miles and Holli celebrating 10 years of marriage.`
            },
            {
                id: 'h01',
                text: `A bachelorette party for her sister, Marissa.`
            },
            {
                id: 'h02',
                text: `A conference for New Tech High School teachers around the country.`
            },
            {
                id: 'h03',
                text: `Holli won an essay-writing contest with the entitled, "Why I Wish Disney World Was My Husband."`
            }
        ],
        correctAnswer: 'h01'
    },
    {
        category: 'Holli',
        question: `Holli's favorite musical is Hamilton. Where did Holli see performances of Hamilton this year?`,
        answers: [
            { id: 'h10', text: `Nowhere yet. 2019 is the year!` },
            { id: 'h11', text: `Chicago, IL` },
            { id: 'h12', text: `Des Moines, IA` },
            { id: 'h13', text: `Chicago, IL, and Des Moines, IA` }
        ],
        correctAnswer: 'h13'
    },
    {
        category: 'Ian',
        question: `Ian added a new accessory to his wardrobe this year. What is it?`,
        answers: [
            { id: 'i00', text: `Eyeglasses` },
            { id: 'i01', text: `A tophat` },
            { id: 'i02', text: `A shark-tooth necklace` },
            { id: 'i03', text: `An eyepatch` }
        ],
        correctAnswer: 'i00'
    },
    {
        category: 'Ian',
        question: `What Catholic sacrament did Ian experience this year?`,
        answers: [
            { id: 'i10', text: `Baptism` },
            { id: 'i11', text: `Confirmation` },
            { id: 'i12', text: `First Communion` },
            { id: 'i13', text: `First Confession` }
        ],
        correctAnswer: 'i13'
    },
    {
        category: 'Ainsley',
        question: `Ainsley lost her first tooth this year. How did it happen?`,
        answers: [
            { id: 'a00', text: `Wrestling with her brother.` },
            {
                id: 'a01',
                text: `At the hand of Dr. Marissa and her elite dentist skills.`
            },
            {
                id: 'a02',
                text: `She bit her tooth while talking to Lauren at Pizza Ranch.`
            },
            {
                id: 'a03',
                text: `It's hard to explain, but it took string, variour door knobs and misdirection.`
            }
        ],
        correctAnswer: 'a02'
    },
    {
        category: 'Ainsley',
        question: `Ainsley is learning to read this year. Which is her favorite word so far?`,
        answers: [
            { id: 'a10', text: `for` },
            { id: 'a11', text: `where` },
            { id: 'a12', text: `the` },
            { id: 'a13', text: `red` }
        ],
        correctAnswer: 'a10'
    },
    {
        category: 'Blueberry',
        question: `A little something new is coming soon. When is our bundle of joy expected?`,
        answers: [
            { id: 'b00', text: `April 12` },
            { id: 'b01', text: `April 13` },
            { id: 'b02', text: `April 14` },
            { id: 'b03', text: `April 15` }
        ],
        correctAnswer: 'b01'
    },
    {
        category: 'Blueberry',
        question: `It's been a secret for the past month, but we're ready to share now. What is the baby's gender?`,
        answers: [
            { id: 'b10', text: `Boy` },
            { id: 'b11', text: `Girl` },
            { id: 'b12', text: `Psych! We're still not telling!` }
        ],
        correctAnswer: 'b10'
    }
];

export const rewards = {
    a02: {
        alt: 'Ainsley, holding her tooth at Pizza Ranch',
        content: <p>Ainsley holding her tooth.</p>,
        image: ainsleyTooth
    },
    a10: {
        alt:
            'Ainsley, tongue out, showing her spunky attitude on the first day of Kindergarten',
        content: <p>Hello</p>,
        image: ainsleySchool
    },
    b01: { alt: 'Baby!', content: <p>Baby!</p>, image: null },
    b10: {
        alt: `It's a boy!`,
        content: <p>Baby!</p>,
        video: `https://youtu.be/0rBIa0l2LBA`
    },
    i00: {
        alt: 'Ian sporting his new glasses',
        content: <p>Looking good, Ian.</p>,
        image: ianGlasses
    },
    i13: {
        alt: `Naughty or Nice? asks Ian's sweater`,
        content: <p>Naughty or Nice?</p>,
        image: null
    },
    h01: {
        alt: 'The Bride Squad at Magic Kingdom',
        content: (
            <p>
                Hashtag Bride Squad rolled ten deep on the Magic Kingdom this
                August and showed that mouse what's up.
            </p>
        ),
        image: null
    },
    h13: {
        alt: 'Holli, Cari and Marissa at Hamilton in Des Moines',
        content: <p>Alexander Hamilton.</p>,
        image: null
    },
    m01: {
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
        image: milesNovel
    },
    m10: { alt: null, content: null, image: null }
};
