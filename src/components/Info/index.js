import './info.css';

const Info = ({ curators }) => {
	return (
		<div className="info-page">
			<div className="info-page__developer-credit info-page__developer-credit--desktop">
				Designed and Developed By Patrick Cartlidge
			</div>
			<div className="info-page__about-project">
				<h2 className="info-page__about-project-title">Atacama Garden Web Portal</h2>
				<p>
					The concept of ‘landscape’ has been broadly treated by the arts and sciences throughout the past centuries. However, due to the emergence of the digital realm, the word has acquired a different understanding that is linked with the idea of an entangled network of elements dependent on one another and relying on the interconnections between them. This wholeness or connected network of digital data can be referred to as a ‘digital landscape’, and because of that, also serves to better understand the natural phenomena that science and technology tries to acknowledge. This is because it is now understood that natural environments work in a similar way, by communicating and exchanging information between the constituent elements, such as how the trees and plants communicate with each other. By these means, it is going to become apparent how the digital realm can be directly related to the way a networked landscape works. In that context, Fundación Mustakis / ALMA garden brings together art, science, and technology towards an educational purpose, aiming to speculate and question our understanding of nature through technology, going from the bleak landscape of Atacama Desert with the eyes towards the most distant galaxies, but focusing on bringing this ideas closer to people for them to find a meaning.
				</p>
				<p>
					For this occasion under the organisation of Samuel Domínguez, Valeria Foncea (ALMA) and Leonor Merín (Mustakis) invited a scientist and an architect to curate and select references from their field of expertise that will help us open the discussion towards the concept of Atacama Garden. This will provide a broader picture of the theme and hopefully open a window for the curious users willing to deepen the subject and a starting point for them to explore the unknown.
				</p>
			</div>
			<h2 className="info-page__about-project-title">Organisations</h2>
			<div className="info-page__about-orgs">
				<div className="info-page__about-orgs-container">
					<a aria-label="visit ars electronica festival website" href="https://ars.electronica.art/newdigitaldeal/en/">
						<img alt={`logo of Ars Electronica Festival`} className="info-page__about-orgs-img" src="/images/LogoArsElectronicaFestival2021.png" />
					</a>
				</div>
				<div className="info-page__about-orgs-container">
					<a aria-label="visit fundacion mustakis website" href="https://www.fundacionmustakis.org/">
						<img alt={`logo of Mustakis`} className="info-page__about-orgs-img" src="/images/LogoMustakis.png" />
					</a>
				</div>
				<div className="info-page__about-orgs-container">
					<a aria-label="visit ALMA website" href="https://almascience.eso.org/">
						<img alt={`logo of ALMA`} className="info-page__about-orgs-img info-page__about-orgs-img--tall" src="/images/LogoALMA.png" />
					</a>
				</div>
			</div>
			<h2 className="info-page__curators-title">Curators</h2>
			<>
				{
					curators.map(({
						name,
						invitado,
						bio,
						explanation,
						photo,
						credit,
						representando
					}) => <div key={name} className="info-page__about-curators">
						<div className="info-page__about-curators-container">
							<div className="info-page__curator-img-container info-page__curator-img-container--desktop">
								<img alt={`${name}`} className="info-page__curator-img" src={photo} />
								<br/>
								Photograph credit: {credit}
							</div>
							<div className="info-page__curator-text-container">
								<div className="info-page__curator-name">
									<h2>{name}</h2>
								</div>
								<div className="info-page__curator-img-container info-page__curator-img-container--mobile">
									<img alt={`${name}`} className="info-page__curator-img" src={photo} />
								</div>
								<div className="info-page__explanation">
									<p>{ invitado }</p>
									<p>{ representando }</p>
								</div>
								{
									explanation && <div className="info-page__explanation">
										<p>"{ explanation }"</p>
									</div>
								}
								<div className="info-page__curator-bio">
									{bio.map(b => <p>{b}</p>)}
								</div>
							</div>
						</div>
					</div>)
				}
			</>
		</div>
	)
};

export default Info;
