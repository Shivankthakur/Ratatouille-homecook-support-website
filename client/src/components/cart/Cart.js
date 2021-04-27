import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  rootx: {
    flexGrow: 1,
  },
  media: {
    height: 0,
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.rootx}>
        <Grid container spacing={2}>
        <Grid item xs={3}>
    <Card className={classes.root}>
      <CardHeader
        
        title="Shrimp Paella"
        subheader="Jeff's Corner"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Rs. 160
        </Typography>
      </CardContent>
      
      
    </Card>

    </Grid>
    <Grid item xs={3}>
  
        <Card className={classes.root}>
    
      <CardHeader
        
        title="Cheese Burger"
        subheader="Jeff's Corner"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1548435297-6fcc2b3def2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Rs. 180
        </Typography>
      </CardContent>
      
      
    </Card>

    </Grid>
    <Grid item xs={3}>
   
        <Card className={classes.root}>
      <CardHeader
        
        title="Strawberry Cake"
        subheader="My Sweet Shop"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Rs. 80
        </Typography>
      </CardContent>
      
      
    </Card>
</Grid>
    <Grid item xs={3}><Card className={classes.root}>
      <CardHeader
       
        title="Korean Noodles"
        subheader="Remy's Homemade"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Rs. 150
        </Typography>
      </CardContent>
      
      
    </Card></Grid>
    </Grid>
    </div>
  
  );
}