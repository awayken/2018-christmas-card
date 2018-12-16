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
        question: `Miles's novel, No Story to Tell, won the Blazing Lantern Fiction Prize! What is the novel's plot?`,
        answers: [
            {
                id: 'm00',
                text: `A young novelist somehow wins a fiction prize and has prove to everyone that he is not an imposter.`
            },
            {
                id: 'm01',
                text: `An old lady wakes up knowing she will die that day and tries to tie up her loose ends while reflecting on her life.`
            },
            {
                id: 'm02',
                text: `A man wakes up in a world where memory can be erased with a pill, and he realizes he must fight against the company that makes it.`
            },
            {
                id: 'm03',
                text: `It's called "No Story to Tell" because it's literally just 200 blank pages.`
            }
        ],
        correctAnswer: 'm01'
    },
    {
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
        preamble: 'holli',
        question: `Holli loves Disney World. What was the impetus for her Disney visit this summer?`,
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
                text: `Holli attended a conference in Orlando for New Tech High School teachers from around the country.`
            },
            {
                id: 'h03',
                text: `Holli won an essay-writing contest with the entitled, "Why I Wish Disney World Was My Husband."`
            }
        ],
        correctAnswer: 'h01'
    },
    {
        question: `Holli's favorite musical is Hamilton. Where did she see performances of Hamilton?`,
        answers: [
            { id: 'h10', text: `Nowhere yet. 2019 is the year, baby!` },
            { id: 'h11', text: `Chicago, IL` },
            { id: 'h12', text: `Des Moines, IA` },
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
                text: `She fell out of the baby swing in the backyard.`
            }
        ],
        correctAnswer: 'a02'
    },
    {
        question: `Ainsley is learning to read in Kindergarten. Which is her favorite word so far?`,
        answers: [
            { id: 'a11', text: `where` },
            { id: 'a12', text: `the` },
            { id: 'a13', text: `cardiovascular` },
            { id: 'a10', text: `for` }
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
        question: `It's been a secret for the past month, but we're ready to share some big news with you. What is the baby's gender?`,
        answers: [
            { id: 'b10', text: `Boy` },
            { id: 'b11', text: `Girl` },
            { id: 'b12', text: `Psych! We're still not telling!` },
            {
                id: 'b13',
                text: `We honestly don't know. Baby wouldn't quit moving around!`
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
                Ainsley claims that no food was involved in the removal of this
                tooth. Rather, it was gabbing with her cousin, Lauren, that
                caused her to bite down in a strange way and finally dislodge
                the wobbly bicuspid. The tooth in question had eluded parental
                intervention for weeks leading up to the final chomp, but
                Ainsley was determined to lose it on her own. In the end, she
                got her wish. And some pizza.
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
                would pull ahead as Ainsley's favorite word. I doubt Ainsley,
                herself, would give this same answer twice, but it's what she
                said when asked. Ainsley's Kindergarten curriculum has made
                reading a priority, and it really shows. She has been caught
                reading full sentences, much to the astonishment of her parents.
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
                Yes, the Rausch Family is getting bigger! Due in April (a
                popular birthing month, apparently), this bundle of joy was met
                with enthusastic response from the existing Rausch children.
                Considering things like diapers, bottles and getting up in the
                night were faint memories, parents of said forthcoming baby are
                still unsure what they were thinking. Do not expect 2019's
                Christmas card to be nearly so coherent.
            </p>
        ),
        image: babyCelebration
    },
    b10: {
        alt: `It's a boy!`,
        content: (
            <p>
                Werehavingababy, Eetsaboy! While the photographic evidence seems
                inconclusive, we'll have to take the hospital's word on this.
                Yes, another boy is set to make his debut. Ainsley was
                understandably disappointed at not getting to welcome a sister.
                But not long after the video was taken, she warmed to having a
                baby brother in the house. With the gender less of a question,
                the next mystery is what sort of personality this little boy
                will have. Stay tuned in 2019!
            </p>
        ),
        video: `https://youtu.be/0rBIa0l2LBA`
    },
    i00: {
        alt: 'Ian, sporting his cool, new glasses',
        content: (
            <p>
                While Ian never complained of being unable to see the white
                board, a visit to the optometrist revealed some slight optical
                corrections were necessary. So, we got Ian some glasses. Getting
                him to wear them is a small battle, especially after they fell
                out of his bag on the way to school and got bent (or run over).
                He claims to notice no improvement, but he sure does look
                handsome in them.
            </p>
        ),
        image: ianGlasses
    },
    i13: {
        alt: `Naughty or Nice? asks Ian's sweater`,
        content: (
            <p>
                Second Grade comes with a couple significant sacraments. The
                first, and the only one Ian will celebrate in 2018, is The
                Sacrament of Penance (also called Confession). Ian studied hard
                during his weekend sessions with Dad, and Fr. Haggerty commented
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
                Marissa, herself, spent XX days in Florida celebrating the
                bride-to-be in the Happiest Place on Earth. As Matron of Honor,
                Holli helped organize and plan the holiday. From queuing games
                to ice breakers, Holli gamified the experience with
                custom-designed buttons. Walt would be proud.
            </p>
        ),
        image: holliDisney
    },
    h13: {
        alt: 'Miles and Holli at Hamilton in Chicago, IL',
        content: (
            <p>
                Alexander Hamilton became more than a name, person or soundtrack
                for Holli. This past year, he became a musical. For their 10th
                Anniversary, Miles and Holli flew to Chicago, the centerpiece of
                their vacation being Hamilton, The Musical. The performance was
                everything Holli hoped it would be. Despite not being the
                Broadway cast, the Chicago performance had every bit of the
                magic and theatricality of the original recording. Miles and
                Holli loved it so much that they went again in Des Moines, IA.
            </p>
        ),
        image: holliHamilton
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
                    his novel won the Blazing Lantern Fiction Prize
                </a>
                . The plot was inspired by elements of the life of his
                grandmother, Harriet Rausch, who passed away this past March.
                Miles had the chance to interview her before she passed. Despite
                living a rich and accomplished life, Harriet had a hard time
                coming up with stories and anecdotes to share. Such was her
                humble accounting of her time on Earth. Fittingly, Miles
                finished and submitted the novel on the weekend of her funeral.
                He hopes she likes it.
            </p>
        ),
        image: milesNovel
    },
    m10: {
        alt: `Miles's desk at Carsforsale.com`,
        content: (
            <p>
                In February, Miles was moved from Thit.com to Carsforsale.com.
                The company decided to restructure and table the Thit.com
                project. Miles moved to a new floor, to a new team and into a
                new process. However, things have gone very well. Miles has
                helped introduce new technologies and processes in an effort to
                modernize and improve the flagship product, and his new team
                appreciates his sarcasm just as much as his old team did.
                Win-win-win. Triple win.
            </p>
        ),
        image: milesCarsforsale
    }
};

export const preambles = {
    miles: (
        <p>
            <strong>Miles</strong> turned 35 in 2018. He spends his days as a
            Web Developer and his nights as a writer. He's writing this
            sentence, actually. He doesn't know what else to say about himself.
        </p>
    ),
    holli: (
        <p>
            <strong>Holli</strong> became 32 years old this past year. She's in
            her XX year of teaching at New Tech High School. Holli recently took
            up reading as a hobby which feels like the endgame to some
            long-established scheme that Miles thought up decades ago, but it
            isn't.
        </p>
    ),
    ian: (
        <p>
            <strong>Ian</strong> lives life as an eight year old in 2nd Grade.
            He loves to read chapter books, comic books and wildlife books. When
            he's not reading, he's usually building with LEGO pieces or drawing
            elaborate machines or Frankensteinian monsters. His wit,
            intelligence and eavesdropping skills have made it impossible for
            adults to have discussions around him.
        </p>
    ),
    ainsley: (
        <p>
            <strong>Ainsley</strong> is now six years old. She started
            Kindergarten and has been very busy counting, reading and writing.
            She enjoys coloring and drawing and knows that you need to add huge
            eyelashes if you want the viewer to know that you are drawing a
            girl. She skips whenever and wherever possible, hopefully wearing a
            dress and high heels and maybe a Batman helmet.
        </p>
    ),
    blueberry: (
        <p>
            <strong>Baby Rausch</strong> is 0 years old. Baby spends most of
            their time making mom feel sick or tired. Sometimes Baby will kick
            and punch like crazy. Baby has done very little to establish any
            sort of interesting personality.
        </p>
    )
};
