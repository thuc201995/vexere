import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `0px auto`,
    padding: theme.spacing.unit * 2
  },
  paper: {
    height: 140,
    width: 100
  },

  button: {
    minHeight: 50
  },

  textField: {
    flexBasis: "100%",
    maxHeight: 50
  },
  dropdown: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 0
  }
});
const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];
class GuttersGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={16}
            >
              <Grid key="search-input" item xs={5}>
                <Paper elevation={1}>
                  <IconButton
                    className={classes.iconButton}
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Search Job"
                  />
                </Paper>
              </Grid>
              <Grid key="filter-dropdown" item xs={5}>
                <div className={classes.dropdown}>
                  <TextField
                    select
                    className={classes.textField}
                    variant="outlined"
                    value=""
                    label="With Select"
                  >
                    {ranges.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
              <Grid key="search-button" item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
