import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import JobList from "../containers/JobListContainer";
const styles = theme => ({
  grid: {
    margin: `${theme.spacing.unit * 2}px auto`,
    padding: theme.spacing.unit * 2,
    maxWidth: "80%"
  }
});

const RouterURL = props => {
  const { classes } = props;
  return (
    <Grid className={classes.grid}>
      <HashRouter>
        <Switch>
          <Route exact path="/job" component={JobList} />
          <Route exact path="/about" component={() => 2} />
          <Route exact path="/contact" component={() => 3} />
          <Redirect from="/" to="/job" />
        </Switch>
      </HashRouter>
    </Grid>
  );
};
export default withStyles(styles)(RouterURL);
