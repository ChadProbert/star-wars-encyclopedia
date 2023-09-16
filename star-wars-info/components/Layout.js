// Next.js imports
import Image from "next/image";

// Components
import Nav from "./Navigation";

// This component will be the layout of all pages
export default function Layout({ children }) {
	return (
		<div>
			<Nav />
			<div className="imageWrapper">
				<Image
					src="/logo4.png"
					width={300}
					height={175}
					className="logo"
					alt="star wars logo"
				/>
			</div>
			{children}

			<style jsx>
				{`
					/* Centers the Star Wars logo  */
					.imageWrapper {
						display: flex;
						justify-content: center;
						margin-bottom: 20px;
					}
				`}
			</style>
		</div>
	);
}

/* References:

https://www.freepnglogos.com/pics/star-wars-logo

https://github.com/vercel/next.js/discussions/18375

*/
