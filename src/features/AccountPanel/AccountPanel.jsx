// Create a panel to hold the collection of account cards 
// from the store

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";

import AccountCard from "../AccountPanel/AccountCard.jsx";
import {accounts} from "../../assets/data/data.js";


const useStyles = makeStyles((theme) => ({

}));

export default function AccountPanel(){
  const classes = useStyles();

  return(
    <div> 
      <Typography variant='h4' component='h2'>Hello Jack! The Total Balance is:  </Typography>
      <Grid container >
        <Grid item xs={12}>
          <Grid container justify="center" >
            {accounts.map((value) => (
            <Grid>
              <AccountCard name={value.Name} bal={value.Balance} />
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
