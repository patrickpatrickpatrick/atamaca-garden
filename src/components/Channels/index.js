import { useState, useEffect } from 'react';
import Static from './Static';
import Youtube from './../embeds/YoutubeEmbed';

import './channels.css';

const Channels = ({ channelVideos }) => {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	// const getActiveTabOnLoad = () => channelVideos.findIndex(x => x.param === params.video);
	const getActiveTabOnLoad = () => 0;

	const [ channel, setChannel ] = useState(getActiveTabOnLoad());
	const [ hover, setHover ] = useState(-1);
	const [ size, setSize ] = useState('large');

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
		if ((channel > - 1) && (params.video !== channelVideos[channel].param)) {
			window.history.replaceState({}, '', `?video=${channelVideos[channel].param}`)
		}
	}, [channel]);

	const sizes = {
		small: {
			height: 250,
			width: 300
		},
		medium: {
			height: 250,
			width: 400,
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
					 		{ channelVideos[(hover > -1 && channel < 0) ? hover : channel].info.map(i => <div className="channels__credit-container">
					 				<div className="channels__credit-role">{i.role}</div>
					 				<div className="channels__credit-name">{i.credit}</div>
					 			</div>) }
						</>)
					}
				</>
			</div>
		</div>
	)
};

export default Channels;
