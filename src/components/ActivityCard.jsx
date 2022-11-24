import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import BackGroundSide from "../components/BackGroundSide";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
//import uniquid from "uniquid";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { timestamp } from "../config/firebase";
import useDocuments from "../hooks/useDocuments";

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { title, description, contact, id } = activity;
  const { updateDocument } = useFirestore("users");
  const { document } = useDocuments("users", user.uid);

  const activityToupdate = {
    activity: id,
    title,
    //id: uniquid(),
    dateAdded: timestamp.fromDate(new Date()),
  };

  const handleClick = () => {
    //? if the activity already exists, then it should not be added again
    if (
      !document.activities.some((userAct) => {
        //todo toast notification here
        console.log("Activity Already Added to your list");
        return userAct.activity === id;
      })
    ) {
      //? if the activity is not in the users saved activities then add it
      //todo toast notification here
      console.log("Activity Added to your list");
      updateDocument(user.uid, {
        activities: [...document.activities, activityToupdate],
      });
    }
  };

  return (
    <Box
      sx={{
        width: "285px",
        height: "150px",
        borderRadius: "6.7px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)",
        my: 1.5,
        width: "95%",
        maxWidth: "420px",
        height: "100%",
        maxHeight: "150px",
        borderRadius: "6.7px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)",
        my: 2.5,
      }}
    >
      <Card
        sx={{
          border: "1.3px solid #030109",
          height: "100%",
          width: "100%",
          borderRadius: "6.7px",
          paddingLeft: "38px",
          border: "1.3px solid #030109",
          height: "100%",
          width: "100%",
          paddingLeft: "38px",
        }}
      >
        <CardHeader title={activity.title} titleTypographyProps={{ variant: "body1" }} sx={{ pb: 0.6 }} />
        <CardContent sx={{ pt: 0, width: "200px" }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
            {activity.description.slice(0, 44)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ py: 0, pl: 2.5 }}>
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ bgcolor: "#ffab3d", width: 18, height: 18 }} aria-label="activity" alt={contact} src="">
              S
            </Avatar>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: "13px", fontSize: "12px" }}>
              Added by: {activity.contact}
            </Typography>
            <Button
              sx={{
                height: "23px",
                color: "#fff",
                backgroundColor: "#988fad",
                "&:hover": { backgroundColor: "#625b71" },
              }}
              onClick={() => navigate(`{/activity-detail/${activity.id}}`)}
            >
              <Typography sx={{ fontSize: "10px", textTransform: "none" }}>More Info</Typography>
            </Button>
          </Stack>
        </CardActions>
        <IconButton
          aria-label="add to favorites"
          sx={{
            position: "absolute",
            top: 9,
            right: 8,
            "&:hover": { color: "#988fad", fill: "blue" },
          }}
          onClick={() => handleClick()}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Card>
      <BackGroundSide />
    </Box>
  );
};

export default ActivityCard;
