import { List, ListItem, Button } from "@mui/material";
import "./navbarlinks.css";

export default function NavbarLinks({}) {
    return (
        <List className="list">
            <ListItem className="list-item">
				<Button
					variant="text"
                    color="secondary"
					className="nav-link"
				>
					Login
				</Button>
			</ListItem>
			<ListItem className="list-item">
				<Button
					href="/signup"
                    color="secondary"
                    variant="contained"
					className="nav-link"
				>
					Sign Up
				</Button>
			</ListItem>
		</List>
    )
}