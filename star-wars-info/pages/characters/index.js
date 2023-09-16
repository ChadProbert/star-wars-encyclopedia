// Next.js imports
import Image from "next/image";
import Link from "next/link";

// getStaticPaths is called when the page is loaded.
// Fetches the list of all the characters and returns them as props.
export async function getStaticProps(context) {
	const res = await fetch(`https://akabab.github.io/starwars-api/api/all.json`);
	// Convert the response to JSON.
	const allCharacterData = await res.json();

	if (!allCharacterData) {
		return {
			notFound: true,
		};
	}

	return {
		// Will be passed to the Home component below as props.
		props: { allCharacterData },
	};
}

// Receives the props from getStaticProps above and returns the page content.
export default function Home({ allCharacterData }) {
	return (
		<div>
			<h1>All Star Wars Characters</h1>

			<div className="listedCharacterDiv">
				<ul>
					{allCharacterData.map((character) => {
						const clickedCharacter = character.id;
						return (
							<li key={clickedCharacter}>
								<Link href={`/characters/${clickedCharacter}`}>
									<Image
										src={character.image}
										width={250}
										height={300}
										className="characterImage"
										alt="Character Image"
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<style jsx>
				{`
					ul {
						/* Removes the bullet points and the spacing that is applied to list items. */
						list-style-type: none;
						padding: 0;
						margin: 0;
						/* Centers the content (character images) inside the ul. */
						text-align: center;
					}

					.listedCharacterDiv ul li {
						/* Displays the images in horizontal order. */
						display: inline-block;
						/* Spacing between character images. */
						margin: 20px;
					}
				`}
			</style>
			<style global jsx>
				{`
					.characterImage:hover {
						/* Creates the hover effect when the user hovers over a character image. */
						opacity: 0.5;
						transition: 0.2s ease-in-out;
						cursor: pointer;
					}
				`}
			</style>
		</div>
	);
}

/* References:

https://github.com/akabab/starwars-api

https://stackoverflow.com/questions/34966390/center-ul-li-images-in-div

https://github.com/vercel/next.js/discussions/18375

*/
