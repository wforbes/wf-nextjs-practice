import { Grid } from "@mui/material";

export default function GridContainer({ children, className, ...rest }) {
    return (
		<Grid container {...rest} className={classes.grid + " " + className}>
			{children}
		</Grid>
	);
}