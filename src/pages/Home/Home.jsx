/* eslint-disable react-hooks/exhaustive-deps */
import "./home.css";
// import { useState } from "react";
import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
import Logo from "../../assets/images/retired-not-tired-just-flip-flops.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faListCheck,
//   faPeopleGroup,
//   faClock,
//   faCheck,
//   faHome,
//   faHeart,
//   faMessage,
//   faUserGroup,
//   faList,

// } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { CenturyView } from "react-calendar";

// import Icon from "@mui/material/Icon";
// const Home = () => {
// const [date, setDate] = useState(new Date());
//  const element = <FontAwesomeIcon icon={faCoffee} />;
function Home() {
  return (
    <div className="container">
      <Typography variant="h2" align="center" gutterBottom>
        Stay Active
      </Typography>
      <Typography variant="h1" align="center" gutterBottom>
        Retrired Not Tired
      </Typography>
      <img className="logo" src={Logo} alt="Retirement flip flop" />
      <Typography variant="h3" align="center" gutterBottom>
        Activites on your schedule:
      </Typography>
      <div variant="contained">
        <Button>swmming with date </Button>
        <Button>wine tasing</Button>
        <Button>bingo</Button>
        <Button
          style={{
            backgroundColor: "red",
            margin: "0 10px",
            align: "center",
          }}
        >
          boxing
        </Button>
      </div>
    </div>

    // <div>
    //   <div className="home">
    //     <h2 className="title"> Stay Active</h2>
    //         <h1 className="companyName">Retired Not Tired</h1>
    //         <img src={Logo} alt="Retirement flip flop" />/<h1 className="header">Upcomming Activities</h1>
    //         <h3 className="myActivies"> Activites on your schedule: </h3>
    //         <div>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
    //             unfulfilled task
    //           </button>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>community request
    //           </button>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> hours avaiable to use
    //           </button>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> completed hours
    //           </button>
    //         </div>
    //         <div clossName="calendar-containter">
    //           <Calendar onChange={setDate} vaule={date} />
    //         </div>
    //         <p className="text-center">
    //           <span className="bold"> Selected Date: </span> {""}
    //           {date.toDateString()}
    //         </p>
    //       </div>
    //       <div>
    //         <input type="checkbox" id="going" name="going" value="check" />
    //         <lable for="going"> I am going</lable>
    //         <input type="checkbox" id="interested" name="interested" value="check" />
    //         <lable for="interested"> I am interested</lable>
    //       </div>
    //       <div>
    //         <button class="btn"> Creat an activity</button>
    //       </div>
    //       <div>
    //         <footer>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
    //             Home
    //           </button>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    //             Activities
    //           </button>
    //           <button class="btn">
    //             <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
    //             Message
    //           </button>
    //         </footer>
    //         <button class="btn">
    //           <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
    //           Friends
    //         </button>
    //         <button class="btn">
    //           <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
    //           More
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };
  );
}

export default Home;
