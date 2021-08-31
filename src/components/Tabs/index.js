import React, { useState, useEffect } from 'react';
import './tabs.css';

const Tabs = ({ children, tabs }) => {
	const getActiveTabOnLoad = () => tabs.findIndex(x => x.url === window.location.pathname);

	const [tabActive, setActiveTab] = useState(getActiveTabOnLoad() > -1 ? getActiveTabOnLoad() : 0);

	window.onpopstate = () => {
		if (window.location.pathname !== tabs[tabActive].url) {
			setActiveTab(getActiveTabOnLoad());
		}
	};

	useEffect(() => {
		if (window.location.pathname !== tabs[tabActive].url) {
			window.history.pushState({}, '', `${tabs[tabActive].url}`)
		}
	}, [tabs, tabActive]);

	return (
		<div className="tabs">
			<div className={`tabs__tabs-container`}>
				{
					tabs.map((tab, index) => (
						<button
							key={`${tab.name}-button`}
							onClick={() => setActiveTab(index)}
							className={`tabs__tab-button ${ tabActive === index ? 'tabs__tab-button--active' : '' }`}
						>
							<span className="tabs__tab-button-text">
								{
									tab.name
								}
							</span>
						</button>
					))
				}
			</div>
			<div className="tabs__content-container">
				<div className="tabs__tab">
					<div className={`tabs__tab-content ${tabs[tabActive].name === 'About' ? 'tabs__tab-content--about' : ''} ${!tabs[tabActive].scroll ? 'tabs__tab-content--scroll' : ''}`}>
						{
							React.Children.toArray(children)[tabActive]
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
