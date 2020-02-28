import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  progressDiv: {
    padding: 48,
  },
  progress: {
    color: theme.palette.action.active,
  },
  loading: {
    textAlign: 'center',
    color: theme.palette.action.active,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <div className={classes.progressDiv}>
        <CircularProgress size={100} className={classes.progress} />
        <Typography variant="h6" className={classes.loading}>
          Loading...
        </Typography>
      </div>
    </Grid>
  );
};

export default Loading;
