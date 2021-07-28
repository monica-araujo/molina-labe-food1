
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 35,
    width: 345,
    paddingTop: '35%', // 16:9
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/5B7DD428-D8FF-48F8-B4CE-DE571F8E47E1.png"
        title="Outback"
      />
      <CardContent>
        <Typography variant="body2" color="quartenary.main" component="p">
          Burguer Vila Madalena <br />
          50-60m Frete ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀R$6,00
        </Typography>
      </CardContent>
    </Card>
  );
}


