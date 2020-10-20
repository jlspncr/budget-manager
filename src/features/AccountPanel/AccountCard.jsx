import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 420,
		marginBottom: 60,
	},

	button:{
		marginTop: 8,
		paddingBottom: 10,
	},

	comp: {
		marginBottom: 10,
	},

	view: {
		backgroundColor: "green",
		color: "white",
		float: "right",
	}
}));

// AccountPanelSlice
export default function AccountCard(props) {
	const classes = useStyles();

	return (
		<div className='accountPanel'>
			<Card className={classes.root}>
				<CardActionArea>
					<Typography variant='h5' component='h2'>
						{props.name}
					</Typography>
					<Typography variant='h6' component='h5' color='textSecondary'>
						{props.bal}
					</Typography>
				</CardActionArea>
				<CardActions>
					<Button color='primary' variant='contained'>
						Income
					</Button>
					<Button color='secondary' variant='contained'>
						Expense
					</Button>
					<Button className={classes.view} variant='contained'>
						View
					</Button>
				</CardActions>
			</Card>

		</div>
	);
}
