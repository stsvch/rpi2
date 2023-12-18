import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from 'react-i18next';

function PersonalInfo() {
	const { t } = useTranslation();
	const id = useParams().id;
	const people = t('people', {returnObjects: true});
	const person = people.find((p) => p.id === id);

	return (
		<Stack >
			<Card >
				<Card.Img
					src={require(`../img/${id}/fface.png`)}
					
				/>
				<Card.Body >
					<Card.Title>
						{`${person.surname}`} {`${person.name}`}{" "}
					</Card.Title>
					<Card.Text >
						{person.birthDate} - {person.deathDate}
					</Card.Text>
					<Card.Text >
						{`${person.longDescription}`}
					</Card.Text>
				</Card.Body>
			</Card>
			<Carousel interval={null} >
				{person.gallery.map((name, index) => (
					<Carousel.Item key={index}>
						<img
							src={require(`../img/${id}/${name}`)}
							alt={`${index + 1}`}
						/>
						<Carousel.Caption >
							<p>{person.captions[0]}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<div className="video-wrapper">
				<iframe
					className="person-video"
					src={`https://www.youtube.com/embed/${person.videoLink}`}
					allow="accelerometer; autoplay, picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</Stack>
	);
}

export default PersonalInfo;
