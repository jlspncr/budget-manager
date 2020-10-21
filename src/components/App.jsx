import React from "react";
import logo from "./../assets/images/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import AccountCard from "../features/AccountPanel/AccountCard.jsx";
import AccountPanel from "../features/AccountPanel/AccountPanel.jsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./../assets/stylesheets/App.css";
// import { teal } from "@material-ui/core/colors";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerInfo: {
		margin: 12,
	},
	footer: {
		top: 'auto',
		bottom: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	newAccount: {
		backgroundColor: "green",
		color: "white",
		height: 45,
	},
}));

const App = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<div>
				<AppBar id='titleBar'>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							onClick={handleDrawerOpen}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6'>Budget Manager</Typography>
					</Toolbar>
				</AppBar>

				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>

					<p className={classes.drawerInfo}>
						This is a drawer. Feel free to add what you would like.
					</p>
				</Drawer>
			</div>

			<AccountCard name={"AccountNma"} bal={"Moneeey"}/>
			<AccountPanel />

			<AppBar className={classes.footer} container spacing={1}>
				<Button variant='contained' className={classes.newAccount}>
					New Account
				</Button>
			</AppBar>
		</div>
	);
};

export default App;
