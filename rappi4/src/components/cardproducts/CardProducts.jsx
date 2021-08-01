import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { ButtonAdd, ButtonDiv } from './styled';
import {postPlaceOrder} from '../../services/order'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  const [quantity, setQuantity] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    setQuantity(Number(event.target.value) || '')
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
    props.onClick()
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
        products: [{
            id: "",
            quantity: 0
        }],
        paymentMethod: "",
    }

    postPlaceOrder(body)
}

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
      <div className='button'>
                    <span>
                        <Button>0</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Selecione a quantidade desejada:</DialogTitle>
                            <DialogContent>
                                <form
                                    onSubmit={onSubmitForm}
                                    className={classes.container}>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            native
                                            id={props.id}
                                            onChange={handleChange}
                                            input={<Input id="demo-dialog-native"
                                            />}
                                            value={quantity}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                        </Select>
                                        <Button  onClick={handleClose} color="primary">
                                            Adicionar ao carrinho
                                        </Button>
                                    </FormControl>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </span>
                    <button onClick={handleClickOpen}>Adicionar</button>
                </div>
    </Card>

    
  );
}