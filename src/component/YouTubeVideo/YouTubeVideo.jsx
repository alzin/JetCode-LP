import './YouTubeVideo.css'

import { useEffect, useRef } from 'react';

const YouTubeVideo = ({ videoId }) => {
    const videoRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.src += '?autoplay=1&mute=1';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(videoRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <iframe
            ref={videoRef}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="JetCode"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default YouTubeVideo;