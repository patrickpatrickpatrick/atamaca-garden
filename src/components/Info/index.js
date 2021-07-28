import './info.css';

const Info = ({ curators }) => {
	return (
		<div className="info-page">
			<div className="info-page__about-project">
				<h2 className="info-page__about-project-title">About the project</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
			<h2 className="info-page__curators-title">Curators</h2>
			<>
				{
					curators.map(({
						name,
						invitado,
						bio,
						explanation
					}) => <div className="info-page__about-curators">
						<div className="info-page__about-curators-container">
							<div className="info-page__curator-img-container info-page__curator-img-container--desktop">
								<img className="info-page__curator-img" src="https://via.placeholder.com/250" />
							</div>
							<div className="info-page__curator-text-container">
								<div className="info-page__curator-name">
									<h2>{name}</h2>
								</div>
								<div className="info-page__curator-img-container info-page__curator-img-container--mobile">
									<img className="info-page__curator-img" src="https://via.placeholder.com/250" />
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
