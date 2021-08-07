import './info.css';

const Info = ({ curators }) => {
	return (
		<div className="info-page">
			<div className="info-page__about-project">
				<h2 className="info-page__about-project-title">About the project</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
						credit
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
								</div>
								{
									explanation && <div className="info-page__explanation">
										<p>"{ explanation }"</p>
									</div>
								}
								<div className="info-page__curator-bio">
									{bio}
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
