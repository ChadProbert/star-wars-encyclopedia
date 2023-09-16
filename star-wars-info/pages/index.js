export default function Index() {
	return (
		<div className="index">
			<h1>Stars Wars Encyclopedia</h1>

			<div className="about">
				<h2>About</h2>

				<p className="aboutParagraph">
					This is an application that uses an API found{" "}
					<a href="https://github.com/akabab/starwars-api">here</a> to deliver
					you the latest information about the Star Wars universe.
					<br />
					<br />
					Star Wars is a film series franchise created by George Lucas, which
					began with the infamous 1977 film and has been adapted into a series
					of films since. Star Wars is a long-running franchise, with several
					hundred films in its history.
				</p>
			</div>
			<style jsx>
				{`
			
					.about {
						background-color: #222222;
						color: #fefefe;
						width: 50%;
						/* Centered the about box */
						margin: 0 auto;
						border-radius: 10px;
						padding: 20px;
						/* Spacing between the about box and the bottom of the page.
						Only relevant for smaller screen resolution users */
						margin-bottom: 50px;
						border: 2px solid #f5df18;
					}

					a {
						color: #f5df18;
						/* Overwriting global style set in Navigation.js component */
						margin: 0;
					}

					.aboutParagraph {
						font-size: 17px;
					}
				`}
			</style>
		</div>
	);
}

/* References:

https://en.wikipedia.org/wiki/Star_Wars

*/
