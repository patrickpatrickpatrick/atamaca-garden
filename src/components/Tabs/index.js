import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({ children, tabs }) => {
	const [tabActive, setActiveTab] = useState(0);

	return (
		<div className="tabs">
			<div className="tabs__tabs-container">
				{
					tabs.map((tab, index) => (
						<button
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
					<div className="tabs__tab-content">
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
