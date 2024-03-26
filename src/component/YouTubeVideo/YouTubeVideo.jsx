import './YouTubeVideo.css'

import { useEffect, useRef } from 'react';

const YouTubeVideo = ({ videoId, autoplay }) => {
    const videoRef = useRef();

    useEffect(() => {
        if (autoplay) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (autoplay === "false") videoRef.current.src += '';
                        else videoRef.current.src += '?autoplay=1&mute=1';
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            observer.observe(videoRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, [autoplay]);

    return (
        <iframe
            ref={videoRef}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="JetCode"
            allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default YouTubeVideo;