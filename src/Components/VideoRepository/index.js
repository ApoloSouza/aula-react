import React from 'react';
import videos from '../../data/videos.json';
import Category from '../Category';

function VideoRepository() {
    const categories = [
        ...new Set(videos.map((video) => video.category)),
    ];

    return (
        <section className="video-repository">
            {categories.map((category) => (
                <Category category={category} key={category}>
                    {videos.filter((video) => video.category === category)}
                </Category>
            ))}
        </section>
    );
}

export default VideoRepository;