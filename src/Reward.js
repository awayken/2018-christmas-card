import React from 'react';
import './Reward.css';

export function getEmbedSrc(video = '') {
    let embedSrc = video;

    if (video.indexOf('youtube') > -1) {
        embedSrc = `https://www.youtube.com/embed/${video.split('v=')[1]}`;
    }

    if (video.indexOf('youtu.be') > -1) {
        embedSrc = `https://www.youtube.com/embed/${
            video.split('youtu.be/')[1]
        }`;
    }

    return embedSrc;
}

function RewardSpinner({ preamble }) {
    const spinner = preamble || (
        <p>Answer the quiz question to see your reward.</p>
    );
    return (
        <aside className="reward__preamble" role="alert" aria-live="assertive">
            {spinner}
        </aside>
    );
}

function RewardImage({ alt = '', image }) {
    return (
        <div className="reward__imagebox">
            <img className="reward__image" src={image} alt={alt} />
        </div>
    );
}

function RewardVideo({ title = '', video }) {
    const embedVideo = `${getEmbedSrc(video)}?rel=0&autoplay=1`;

    return (
        <div className="reward__videobox">
            <iframe
                allowFullScreen
                className="reward__video"
                frameBorder="0"
                src={embedVideo}
                title={title}
            />
        </div>
    );
}

function Reward({ alt = '', image, preamble, show = false, video, children }) {
    let hero = null;

    if (image) {
        hero = <RewardImage alt={alt} image={image} />;
    } else if (video) {
        hero = <RewardVideo title={alt} video={video} />;
    }

    return (
        <section className="reward">
            {!show && <RewardSpinner preamble={preamble} />}

            {show && hero}

            {show && <div className="reward__children">{children}</div>}
        </section>
    );
}

export default Reward;
