import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from '@mui/material';
import useApiRequest from '../services/useApiRequest';
import { useEffect } from 'react';



export default function BlogCard() {

  const {getInfo} = useApiRequest()
  console.log(getInfo)

useEffect(() => {
  getInfo()
},[])
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:"flex", justifyContent:"space-around"}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> <span>7</span>
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon /><span>9</span>
        </IconButton>
        <IconButton aria-label="visibility">
          <VisibilityIcon /><span>15</span>
        </IconButton>

        <Link
          aria-label="show more"
          sx={{color:"white", bgcolor:"#1976D2", width:100, height:40, borderRadius:2, justifyContent:"center", alignItems:"center", display:"flex", fontWeight:"bold", px:1, ml:3, fontSize:"1.3rem"}} 
        >
          Read More
        </Link>
      </CardActions>
    </Card>
  );
}