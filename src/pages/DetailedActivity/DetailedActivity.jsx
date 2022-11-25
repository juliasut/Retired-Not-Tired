import "./detailedActvity.css";
import React from "react";
import { useDocuments } from "../../hooks/useDocuments";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, Container, Stack } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { timestamp } from "../../config/firebase";
import { format } from "date-fns";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import Detailed from "../../assets/detailedImage/49rs.jpeg";
import { CenterFocusStrong } from "@mui/icons-material";

function DetailedActivity() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { document, error } = useDocuments("activities", id);
  const { document: userDocument } = useDocuments("users", user.uid);
  const { updateDocument } = useFirestore("users");

  console.log(document);
  console.log(userDocument);
  const activityToupdate = {
    activity: id,
    title: document && document.title,
    id: uniqid(),
    dateAdded: timestamp.fromDate(new Date()),
  };

  const handleClick = () => {
    if (
      !userDocument.activities.some((userAct) => {
        //todo toast notification here
        console.log("Activity Already Added to your list");
        return userAct.activity === id;
      })
    ) {
      //? if the activity is not in the users saved activities then add it
      //todo toast notification here
      console.log("Activity Added to your list");
      updateDocument(user.uid, {
        activities: [...userDocument.activities, activityToupdate],
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh", paddingBottom: "60px" }}>
      {document && (
        <>
          <Typography varient="h2" component="h1" gutterBottom>
            <h3>Activity: </h3>
            <span>{document.title}</span>

            <h3>Location : </h3>
            <span> {document.location}</span>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            disableElevation={true}
            sx={{
              mt: 2,
              mb: 2,
              width: 140,
              alignSelf: "center",
            }}
            to="#"
            component={Link}
          >
            View Map
          </Button>

          <img className="detailed" src={Detailed} alt="Ron Swansen" />
          <Typography varient="h2" component="h1" gutterBottom>
            <h3>Contact : </h3>
            <span>{document.contact}</span>
            <h3>Description: </h3>
            <span>{document.description}</span>
            {/* <p>Details : {document.details}</p> */}
            <h3>Contact Number: </h3>
            <span>{document.contactNmuber}</span>
          </Typography>
          <Stack direction="row" gap={2} justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              disableElevation={true}
              sx={{
                mt: 2,
                mb: 2,
                width: 140,
              }}
              to="/signup"
              component={Link}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              variant="contained"
              disableElevation={true}
              sx={{
                mt: 2,
                mb: 2,
                width: 140,
              }}
              to="#"
              component={Link}
            >
              Message
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
}
export default DetailedActivity;
