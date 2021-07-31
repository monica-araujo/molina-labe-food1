
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ButtonCard, DescriptionContainer } from './Styled'
import { useHistory, useParams } from 'react-router-dom';
import { goToLoginPage, goToSignUpPage } from '../../routes/coordinates';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  media: {
    height: 35,
    width: 345,
    paddingTop: '35%'
  },
}));

export default function RecipeReviewCard({ restaurant }) {
  const classes = useStyles();
  const history = useHistory()

  const goToRestaurantsPage = () => {
    history.push(`/restaurante/${restaurant.id}`)
  }



  return (
    <Card className={classes.root}>
      <ButtonCard onClick={goToRestaurantsPage} >
        <CardMedia
          className={classes.media}
          image={restaurant && restaurant.logoUrl}
          title={restaurant && restaurant.name}
        />
        <CardContent>
          <Typography variant="body2" color="primary" component="p">
            {restaurant && restaurant.name}
          </Typography>
          <DescriptionContainer>
            <Typography variant="body2" color="secundary" component="i">
              {restaurant && restaurant.deliveryTime} min
            </Typography>
            <Typography variant="body2" color="secundary" component="i">
              Frete R${restaurant && restaurant.shipping},00
            </Typography>⠀⠀⠀⠀
          </DescriptionContainer>⠀⠀⠀⠀⠀⠀⠀⠀
        </CardContent>
      </ButtonCard>
    </Card >
  );
}


