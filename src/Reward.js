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

function RewardSpinner() {
    return (
        <aside className="reward__spinner" role="alert" aria-live="assertive">
            Answer the quiz to see the reward...
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
                allowFullscreen
                className="reward__video"
                frameBorder="0"
                src={embedVideo}
                title={title}
            />
        </div>
    );
}

function Reward({ alt = '', image, show = false, video, children }) {
    let hero = null;

    if (image) {
        hero = <RewardImage alt={alt} image={image} />;
    } else if (video) {
        hero = <RewardVideo title={alt} video={video} />;
    }

    return (
        <section className="reward">
            {!show && <RewardSpinner />}

            {show && hero}

            {show && children}
        </section>
    );
}

export default Reward;
