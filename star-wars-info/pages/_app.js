// Next.js imports
import Head from "next/head";

// Components
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Added a title for all pages */}
				<title>Star Wars Encyclopedia</title>
				{/* Added Google Font */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
			<style global jsx>{`
				body {
					background-image: url('/mohammad-alizade-4wzRuAb-KWs-unsplash.jpg');
          background-size: cover;
					color: #fefefe;
					/* Applied Google Font */
					font-family: "Roboto", sans-serif;
					text-align: center;
					margin: 0;
					padding: 0;
				}
			`}</style>
		</Layout>
	);
}

export default MyApp;

/* References: 

https://mui.com/material-ui/getting-started/installation/

*/
