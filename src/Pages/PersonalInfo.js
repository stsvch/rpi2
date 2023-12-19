import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from 'react-i18next';
import "./PersonalInfo.css";
import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";

function PersonalInfo() {
	const { t } = useTranslation();
	const id = useParams().id;
	const people = t('people', {returnObjects: true});
	const person = people.find((p) => p.id === id);

	return (
		<Stack >
			<Card >
				<Card className="spase"></Card>
				<Card.Img
					src={require(`../img/${id}/fface.png`)}
					className="photo"
				/>
				<Card.Body >
					<Card.Title>
						{`${person.surname}`} {`${person.name}`}{" "}
					</Card.Title>
					<Card.Text >
						{`${person.birthDate}`} {`-`} {`${person.deathDate}`}
					</Card.Text>
					<Card.Text >
						{`${person.shortDescription}`}
					</Card.Text>
					<Card.Text >
						{`${person.longDescription}`}
					</Card.Text>
					<Card.Text >
						{`${person.info}`}
					</Card.Text>
				</Card.Body>
			</Card>
			<Carousel interval={null} >
				{person.gallery.map((name, index) => (
					<Carousel.Item key={index}>
						<img className="image"
							src={require(`../img/${id}/${name}`)}
							alt={`${index + 1}`}
						/>
						<Carousel.Caption >
							<p>{person.captions[index]}</p>
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
			<YMaps>
				<Map
					defaultState={{
						center: person["mapCoordinates"],
						zoom: 9,
						controls: ["zoomControl", "fullscreenControl", "typeSelector"],
					}}
					modules={[
						"control.ZoomControl",
						"control.FullscreenControl",
						"control.TypeSelector",
					]}
					className="person-map"
				>
					<Placemark defaultGeometry={person.mapCoordinates} />
				</Map>
			</YMaps>
		</Stack>
	);
}

export default PersonalInfo;
