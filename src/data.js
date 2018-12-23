import React from 'react';

import ainsleySchool from './rewards/ainsley-school.jpg';
import ainsleyTooth from './rewards/ainsley-tooth.jpg';
import babyCelebration from './rewards/baby-celebration.jpg';
import holliDisney from './rewards/holli-disney.jpg';
import holliHamilton from './rewards/holli-hamilton.jpg';
import ianGlasses from './rewards/ian-glasses.jpg';
import ianNaughtyNice from './rewards/ian-naughty-nice.jpg';
import milesCarsforsale from './rewards/miles-carsforsale.jpg';
import milesNovel from './rewards/miles-no-story-to-tell.jpg';

export const questions = [
    {
        preamble: 'miles',
        question: `Miles started the year working for Thit.com. Which website does he work for now?`,
        answers: [
            {
                id: 'm10',
                text: `Carsforsale.com`
            },
            {
                id: 'm11',
                text: `NYTimes.com`
            },
            {
                id: 'm12',
                text: `MilesRausch.com`
            },
            { id: 'm13', text: `Facebook.com` }
        ],
        correctAnswer: 'm10'
    },
    {
        question: `Miles's novel, No Story to Tell, won the Blazing Lantern Fiction Prize. What is the plot?`,
        answers: [
            {
                id: 'm00',
                text: `A young novelist wins a fiction prize and has prove to everyone that he is not an imposter.`
            },
            {
                id: 'm01',
                text: `An old lady wakes up knowing she will die that day and tries to tie up loose ends while reflecting on her life.`
            },
            {
                id: 'm02',
                text: `A man wakes up in a world where memory can be erased with a pill and must fight against the company that makes it.`
            },
            {
                id: 'm03',
                text: `It's called "No Story to Tell". It's literally just 200 blank pages.`
            }
        ],
        correctAnswer: 'm01'
    },
    {
        preamble: 'holli',
        question: `Holli loves Disney World. What was the reason for her visit this summer?`,
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
                text: `Holli attended a conference for New Tech High School teachers from around the country.`
            },
            {
                id: 'h03',
                text: `Holli won an essay-writing contest with "Why I Wish Disney World Was My Husband."`
            }
        ],
        correctAnswer: 'h01'
    },
    {
        question: `Holli's favorite musical is Hamilton. Where did she see performances of Hamilton?`,
        answers: [
            { id: 'h11', text: `Chicago, IL` },
            { id: 'h12', text: `Des Moines, IA` },
            { id: 'h10', text: `Nowhere yet. 2019 is the year, baby!` },
            { id: 'h13', text: `Chicago, IL, AND Des Moines, IA, baby!` }
        ],
        correctAnswer: 'h13'
    },
    {
        preamble: 'ian',
        question: `Ian added a new accessory to his wardrobe. What was it?`,
        answers: [
            { id: 'i00', text: `A pair of glasses` },
            { id: 'i01', text: `A tophat` },
            { id: 'i02', text: `A shark-tooth necklace` },
            { id: 'i03', text: `An eyepatch` }
        ],
        correctAnswer: 'i00'
    },
    {
        question: `What Catholic sacrament did Ian celebrate this year?`,
        answers: [
            { id: 'i10', text: `Baptism` },
            { id: 'i11', text: `Confirmation` },
            { id: 'i12', text: `First Communion` },
            { id: 'i13', text: `First Confession` }
        ],
        correctAnswer: 'i13'
    },
    {
        preamble: 'ainsley',
        question: `Ainsley lost her first tooth. How did it happen?`,
        answers: [
            { id: 'a00', text: `She was wrestling with her brother.` },
            {
                id: 'a01',
                text: `It was removed by Dr. Aunt Marissa, DDS.`
            },
            {
                id: 'a02',
                text: `She bit her tooth while talking to Lauren at Pizza Ranch in Hawarden.`
            },
            {
                id: 'a03',
                text: `She fell out of a swing in the backyard.`
            }
        ],
        correctAnswer: 'a02'
    },
    {
        question: `Ainsley is learning to read in Kindergarten. Which is her favorite word so far?`,
        answers: [
            { id: 'a11', text: `"where"` },
            { id: 'a12', text: `"the"` },
            { id: 'a13', text: `"cardiovascular"` },
            { id: 'a10', text: `"for"` }
        ],
        correctAnswer: 'a10'
    },
    {
        preamble: 'blueberry',
        question: `A little something new is coming soon. When is our bundle of joy expected?`,
        answers: [
            { id: 'b01', text: `April 12` },
            { id: 'b02', text: `April 13` },
            { id: 'b03', text: `April 14` },
            { id: 'b00', text: `April 15` }
        ],
        correctAnswer: 'b01'
    },
    {
        question: `It's been a secret for the past month. What is the baby's gender?`,
        answers: [
            { id: 'b10', text: `Boy` },
            { id: 'b11', text: `Girl` },
            { id: 'b12', text: `Psych! We're still not telling!` },
            {
                id: 'b13',
                text: `We honestly don't know!`
            }
        ],
        correctAnswer: 'b10'
    }
];

export const rewards = {
    a02: {
        alt: 'Ainsley, holding her tooth at Pizza Ranch',
        content: (
            <p>
                Ainsley claims it was gabbing with her cousin, Lauren, (and not
                biting into food) that finally dislodged the wobbly tooth.
                Ainsley was determined to lose it on her own and rebuffed many
                parental efforts. In the end, she got her wish and some pizza.
            </p>
        ),
        image: ainsleyTooth
    },
    a10: {
        alt:
            'Ainsley, tongue out, showing her spunky attitude on the first day of Kindergarten',
        content: (
            <p>
                No one could have predicted that a simple preposition like "for"
                would pull ahead as Ainsley's favorite word. Kindergarten
                curriculum has made reading a priority, and it really shows.
                With a little help from Mom or Dad or Big Brother, she'll soon
                be as much of a bookworm as the rest of the family.
            </p>
        ),
        image: ainsleySchool
    },
    b01: {
        alt: `We're having a Baby!`,
        content: (
            <p>
                Yes, the Rausch Family is getting bigger! Due in April this
                bundle of joy was met with enthusiasm from Ian and Ainsley.
                Considering getting up in the night is a faint memory, Miles and
                Holli are still unsure what they were thinking. Do not expect
                2019's Christmas card to be nearly so coherent.
            </p>
        ),
        image: babyCelebration
    },
    b10: {
        alt: `It's a boy!`,
        content: (
            <p>
                Werehavingababy, Eetsaboy! Ainsley was understandably
                disappointed at not getting to welcome a sister. But not long
                after the video was taken, she warmed to having a baby brother
                in the house. With the gender less of a question, the next
                mystery is what sort of personality this little boy will have.
                Stay tuned in 2019!
            </p>
        ),
        video: `https://youtu.be/0rBIa0l2LBA`
    },
    i00: {
        alt: 'Ian, sporting his cool, new glasses',
        content: (
            <p>
                After Ian's recent visit to the optometrist, we bought him some
                stylish new glasses. Getting him to wear them is a small battle,
                but he sure looks handsome!
            </p>
        ),
        image: ianGlasses
    },
    i13: {
        alt: `Naughty or Nice? asks Ian's sweater`,
        content: (
            <p>
                Second Grade comes with a couple significant sacraments. The
                first one celebrated in 2018 was The Sacrament of Penance (also
                called Confession). Ian studied hard and Fr. Haggerty commented
                several times at how prepared and smart Ian was in his
                pre-penance interview.
            </p>
        ),
        image: ianNaughtyNice
    },
    h01: {
        alt: 'Holli and Marissa at Disney World in Orlando, FL',
        content: (
            <p>
                Hashtag BrideSquad rolled deep on the Magic Kingdom this August
                and showed that mouse what's up. The bridesmaids, attendants and
                Marissa spent several days in Florida celebrating the
                bride-to-be in the Happiest Place on Earth. As Matron of Honor,
                Holli helped organize and plan the holiday. Walt would be proud.
            </p>
        ),
        image: holliDisney
    },
    h13: {
        alt: 'Miles and Holli at Hamilton in Chicago, IL',
        content: (
            <p>
                Alexander Hamilton has become more than a name, person or
                soundtrack for Holli. This past year, he became a musical. For
                their 10th Anniversary, Miles and Holli flew to Chicago, the
                centerpiece of their vacation being Hamilton, The Musical. The
                performance was everything Holli hoped it would be. Despite not
                being the Broadway cast, the Chicago performance had every bit
                of the magic and theatricality of the original recording. Miles
                and Holli loved it so much that they went again in Des Moines,
                IA.
            </p>
        ),
        image: holliHamilton
    },
    m01: {
        alt: 'A screenshot of the Winners page on BlazingLantern.com',
        content: (
            <p>
                The plot was partly inspired by the events of his grandmother,
                Harriet Rausch. Harriet passed away this past March. Miles had
                the chance to interview her before she died, and that gave him a
                new perspective necessary to bring the character to life.
            </p>
        ),
        image: milesNovel
    },
    m10: {
        alt: `Miles's desk at Carsforsale.com`,
        content: (
            <p>
                In February, Miles was moved from Thit.com to Carsforsale.com.
                He moved to a new floor, to a new team and into a new process.
                He has helped introduce new technologies and techniques to
                improve the flagship product, and his new team appreciates his
                sarcasm just as much as his old team did. Win-win-win.
            </p>
        ),
        image: milesCarsforsale
    }
};

export const preambles = {
    miles: (
        <p>
            <strong>Miles</strong> turned 35 in 2018. He's the dad. He spends
            his days as a Web Developer and his nights as a writer.
        </p>
    ),
    holli: (
        <p>
            <strong>Holli</strong> turned 32 in 2018. She's the mom. She's been
            teaching for 7 years at New Tech High School.
        </p>
    ),
    ian: (
        <p>
            <strong>Ian</strong> turned 8 in 2018. He's in 2nd Grade. He loves
            books, building LEGO and drawing elaborate machines.
        </p>
    ),
    ainsley: (
        <p>
            <strong>Ainsley</strong> turned 6 in 2018. She's in Kindergarten.
            She loves coloring, writing and dressing up.
        </p>
    ),
    blueberry: (
        <p>
            <strong>Baby</strong> turned 0 in 2018. Baby loves kicking and
            punching and not sitting still for ultrasounds.
        </p>
    )
};
