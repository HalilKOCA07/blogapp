import React, { useEffect } from "react";
import useApiRequest from "../services/useApiRequest";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from '@mui/material/TextField';

const DetailCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { id } = useParams();
  const { detailBlog, getInfo } = useApiRequest();
  const { details, blogs } = useSelector((state) => state.card);
  console.log(blogs, id);
  useEffect(() => {
    detailBlog();
    getInfo("blogs");
  }, [id]);

  const detailBlogUser = blogs.filter((item) => item._id === id);
  console.log(detailBlogUser);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   if (!details) {
  //     return <Box>Loading...</Box>;
  //   }

  return (
    <Box>
      {detailBlogUser.map((item) => (
        <Card
          key={item._id}
          sx={{
            maxWidth: 700,
            borderRadius: 3,
            textAlign: "center",
            m: "auto",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={item.title}
            subheader={new Date(item.createdAt).toLocaleString("tr-TR")}
          />
          <CardMedia
            sx={{ width: 300, m: "auto" }}
            component="img"
            image={item.image}
            alt="Paella dish"
          />
          <CardContent style={{ width: 650 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              {item.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: "flex", gap: 2 }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> <span>{item.likes.length}</span>
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon />
              <span>{item.comments.length}</span>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityIcon />
              <span>{item.__v}</span>
            </IconButton>
          </CardActions>
        </Card>
      ))}
      <Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
      </div>
    </Box>
    </Box>
    
  );
};

export default DetailCard;
