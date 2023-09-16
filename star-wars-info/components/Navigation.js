// Next.js imports
import Link from "next/link";

// MaterialUI imports
import { AppBar, Toolbar } from "@mui/material";

const Navigation = () => (
	<AppBar position="static" className="appBar">
		<Toolbar>
			<Link href="/">Home</Link>
			<Link href="/characters">Characters</Link>
		</Toolbar>

		<style global jsx>{`
			.appBar {
				background-color: #333;
				/* Spacing between the navbar and the logo */
				margin-bottom: 40px;
			}
			/* Styling on all links, including Link elements */
			a {
				color: #fefefe;
				margin-right: 20px;
				text-decoration: none;
				font-size: 18px;
			}
		`}</style>
	</AppBar>
);

export default Navigation;

/* References:

https://mui.com/material-ui/react-app-bar/

*/
