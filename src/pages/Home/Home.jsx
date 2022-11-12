/* eslint-disable react-hooks/exhaustive-deps */
import "./home.css";
// import { useState } from "react";
import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
import CalendarPicker from "@mui/x-date-pickers-pro/CalendarPicker";
import Logo from "../../assets/images/retired-not-tired-just-flip-flops.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { format } from "date-fns";
import { Link } from "react-router-dom";

// import Icon from "@mui/material/Icon";
// const Home = () => {
// const [date, setDate] = useState(new Date());
//  const element = <FontAwesomeIcon icon={faCoffee} />;

function Home() {
  const dummyActivities = [
    { id: 1, title: "swimming", date: new Date() },
    { id: 2, title: "golf", date: new Date() },
    { id: 3, title: "bingo", date: new Date() },
    { id: 4, title: "boxing", date: new Date() },
  ];

  return (
    <div className="container">
      <Typography variant="h4" component="h3" align="center" gutterBottom>
        Stay Active
      </Typography>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Retrired Not Tired
      </Typography>
      <img className="logo" src={Logo} alt="Retirement flip flop" />
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Activites on your schedule:
      </Typography>
      <div className="activity-containter">
        {dummyActivities.map((activity) => (
          <Link to={`/activity/${activity.id}`}>
            <Card sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }} key={activity.id}>
              <p>{activity.title}</p>
              <p>{format(activity.date, "dd-MM-yyyy")}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
