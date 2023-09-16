// NextJS imports
import Link from "next/link";

// MaterialUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Will be called when the page is loaded.
export async function getStaticProps(context) {
	// Get the character id from the url query string.
	const id = context.params.id;
	// Get the character data from the API using the id from the url query string.
	const res = await fetch(
		`https://akabab.github.io/starwars-api/api/id/${id}.json`
	);
	// Convert the response to JSON.
	const characterData = await res.json();

	return {
		// Pass the character data to the page via props so it can be used in the return statement.
		props: { characterData },
	};
}

// Will be called when the page is loaded.
export async function getStaticPaths() {
	// Get the list of all the characters from the API.
	const res = await fetch(`https://akabab.github.io/starwars-api/api/all.json`);
	// Convert the response to JSON.
	const allCharacterData = await res.json();

	const paths = allCharacterData.map((clicked) => {
		const clickedCharacter = clicked.id;

		// Return the character id as a params.
		return {
			params: { id: clickedCharacter.toString() },
		};
	});

	return { paths, fallback: false };
}

// Receives the props from getStaticProps above and returns the page content.
export default function CharacterDetails({ characterData }) {
	return (
		<div>
			<Card sx={{ maxWidth: 345 }} className="card">
				<CardMedia
					component="img"
					image={characterData.image}
					alt="character image"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{characterData.name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className="characterDetails"
					>
						<strong>Height:</strong> {characterData.height}m
						<br />
						<strong>Weight:</strong> {characterData.mass}kg
						<br />
						<strong>Gender:</strong> {characterData.gender}
						<br />
						<strong>Home world:</strong> {characterData.homeworld}
						<br />
						<strong>Species:</strong> {characterData.species}
					</Typography>

					<br />
					<Link href={characterData.wiki}>
						<a target="_blank">
							<Button size="medium" variant="contained" className="wikiButton">
								Wiki page
							</Button>
						</a>
					</Link>
				</CardContent>
			</Card>
			<style jsx>
				{`
					/* Overwriting global style set in Navigation.js. */
					a {
						margin: 0;
					}
				`}
			</style>
			<style global jsx>
				{`
					.card {
						/* Centered the card */
						margin: 0 auto;
						color: #fefefe;
						background-color: #222222;
						/* Added spacing between the card and the bottom of the page. */
						margin-bottom: 40px;
					}
					.wikiButton {
						background-color: #f5df18;
						color: #222222;
					}
					.characterDetails {
						color: #fefefe;
					}
				`}
			</style>
		</div>
	);
}

/* References: 

https://github.com/akabab/starwars-api

https://nextjs.org/docs/messages/next-image-unconfigured-host

https://mui.com/material-ui/react-card/#main-content

*/
