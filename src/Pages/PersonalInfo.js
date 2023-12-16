import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function PersonalInfo() {
	const params = useParams();
	const id = params.id;
	const info = (`people.${id}.info`, { returnObjects: true });
	const captions = (`people.${id}.captions`, { returnObjects: true });
	return (
		<Stack >
			<Card >
				<Card.Img
					src={require(`../img/${id}/fface.png`)}
					
				/>
				<Card.Body >
					<Card.Title>
						{(`people.${id}.surname`)} {(`people.${id}.name`)}{" "}
						{(`people.${id}.patronymic`)}
					</Card.Title>
					<Card.Text >
						{data[id]["birthDate"]} - {data[id]["deathDate"]}
					</Card.Text>
					<Card.Text >
						{(`people.${id}.longDescription`)}
					</Card.Text>
				</Card.Body>
			</Card>
			<Carousel interval={null} >
				{data[id]["gallery"].map((name, index) => (
					<Carousel.Item key={index}>
						<img
							src={require(`../img/${id}/${name}`)}
							alt={`${index + 1}`}
						/>
						<Carousel.Caption >
							<p>{captions[index]}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<div className="video-wrapper">
				<iframe
					className="person-video"
					src={`https://www.youtube.com/embed/${data[id]["videoLink"]}`}
					allow="accelerometer; autoplay, picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</Stack>
	);
}

export default PersonalInfo;
