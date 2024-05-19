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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { Box, Button, Link } from "@mui/material";
import useApiRequest from "../services/useApiRequest";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function BlogCard() {
  const { blogs } = useSelector((state) => state.card);
  const { getInfo } = useApiRequest();

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mx: 8,
        my: 5,
      }}
    >
      {blogs.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 300, borderRadius:3 }}>
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
            component="img"
            height="194"
            image={item.image}
            alt="Paella dish"
          />
          <CardContent style={{ width: 270, whiteSpace: "nowrap" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                my: 2,
                p: 1,
              }}
            >
              {item.content}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> <span>7</span>
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon />
              <span>9</span>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityIcon />
              <span>15</span>
            </IconButton>
            <Button variant="contained" sx={{whiteSpace:"nowrap"}}>Read More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
