import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import SearchBar from "./SearchBar";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const styles = theme => ({
  jobList: {
    marginTop: theme.spacing.unit * 3
  }
});

class JobList extends PureComponent {
  componentDidMount() {
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    axios
      .get(`http://jobs.github.com/positions.json?description=react`, config)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => console.log("err", err));
  }
  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <div>
        <SearchBar />
        <Paper className={classes.jobList}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(JobList);
