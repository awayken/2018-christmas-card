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

function RewardImage({ alt = '', image }) {
    return (
        <div className="reward__frame reward__imagebox">
            <img className="reward__image" src={image} alt={alt} />
        </div>
    );
}

function RewardVideo({ title = '', video }) {
    const embedVideo = `${getEmbedSrc(video)}?rel=0&autoplay=1`;

    return (
        <div className="reward__frame">
            <div className="reward__videobox">
                <iframe
                    allowFullScreen
                    className="reward__video"
                    frameBorder="0"
                    src={embedVideo}
                    title={title}
                />
            </div>
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

    if (!show) {
        return null;
    }

    return (
        <section className="reward">
            {hero}

            <div className="reward__children">{children}</div>
        </section>
    );
}

export default Reward;
