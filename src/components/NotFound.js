import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  notFound: {
    margin: 25,
    color: theme.palette.text.primary,
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>
      <Typography variant="h4">
        Page Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
