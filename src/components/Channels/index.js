import { useState, useEffect, useRef } from 'react';
import Static from './Static';
import Youtube from './../embeds/YoutubeEmbed';

import './channels.css';

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

const channelVideos = [
	{
		title: "Space Live Stream",
		info: lorem,
		embed: {
			type: 'youtube',
			url: 'https://www.youtube.com/watch?v=mg7FweYjasE'
		}
	},
	{
		title: "NY Live Stream",
		info: lorem,
		embed: {
			type: 'youtube',
			url: 'https://www.youtube.com/watch?v=AdUw5RdyZxI'
		}
	},
	{
		title: "Mdou Moctar Live",
		info: lorem,
		embed: {
			type: 'youtube',
			url: 'https://www.youtube.com/watch?v=DFZobgLF5Vc'
		}
	}
];

const Channels = () => {
	const [ channel, setChannel ] = useState(-1);
	const [ hover, setHover ] = useState(-1);
	const [ size, setSize ] = useState('large');

	const sizes = {
		small: {
			height: 175,
			width: 300
		},
		medium: {
			height: 250,
			width: 400
		},
		large: {
			height: 500,
			width: 800
		}
	};

    const resizeFunction = () => {
		if (window.innerWidth < 450) {
			if (size !== 'small') {
				setSize('small');
			}
		} else if (window.innerWidth < 900) {
			if (size !== 'medium') {
				setSize('medium');
			}
		} else {
			if (size !== 'large') {
				setSize('large');
			}
		}
    };

	resizeFunction();

    window.addEventListener('resize', () => {
      resizeFunction();
    });

	return (
		<div className="channels__container">
			<div className="channels__button-container">
				{
					channelVideos.map(({
						title
					}, index) => (
						<button
							className={`channels__button ${ channel === index ? 'channels__button--selected' : '' }`}
							onClick={() => setChannel(index)}
							onMouseOver={() => setHover(index)}
							onMouseOut={() => setHover(-1)}
						>
							{
								title
							}
						</button>
					))
				}
			</div>
			<div className="channels__screen">
				{
					(channel < 0) ? <Static {...sizes[size]} /> : <Youtube embedId={channelVideos[channel].embed.url.split('https://www.youtube.com/watch?v=')[1]} />
				}
			</div>
			<div className={
				`channels__text ${channel < 0 ? 'channels__text--placeholder' : ''}`
			}>
				<>
				{
					((channel < 0) && (hover < 0)) && <span className="channels__title">Please pick a channel to tune into.</span>
				}
				</>
				<>
					{
						((hover > -1) || (channel > -1)) && (<>
							{
								((channel > -1) && (hover !== channel) && (hover > -1)) && <span className="channels__title channels__title--change">Change the channel to...</span>
							}
							{
								((channel > -1) && (hover < 0)) && <span className="channels__title channels__title--change">Currently watching...</span>
							}
					 		<span className="channels__title">{ channelVideos[hover > -1 ? hover : channel].title }</span>
					 		<p className="channels__info">{ channelVideos[hover > -1 ? hover : channel].info }</p>
						</>)
					}
				</>
			</div>
		</div>
	)
};

export default Channels;