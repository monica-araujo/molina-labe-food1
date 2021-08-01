import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { ButtonAdd, ButtonDiv } from './styled';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      display: "grid",
      gridTemplateColumns: "30% 1fr",
      width: "90%",
      marginBottom: 10,
    },
    media: {
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard({ products }) {
  const classes = useStyles();




  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={products.photoUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="primary" component="p">
          {products && products.name}
        </Typography>
        <Typography variant="body2" color="secondary" component="i">
          {products && products.description}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="h6">
          R${products && products.price}
        </Typography>
        <ButtonDiv>
          <ButtonAdd>
            Adicionar
          </ButtonAdd>
        </ButtonDiv>
      </CardContent>

    </Card>
  );
}