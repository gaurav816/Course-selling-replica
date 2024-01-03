import { Button, Card, Typography, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Allcourse() {
  const navigate = useNavigate();

  const [useCourse, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourse(data.courses);
        for (let i = 0; i < useCourse.length; i++) {
          console.log(useCourse[i].id);
        }

        console.log(data);
      });
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      Courses
      {useCourse.map((course) => {
        return <SetCourse navigate={navigate} course={course} />;
      })}
    </div>
  );
}
export function SetCourse(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{
          margin: 10,
          width: 300,
          minHeight: 250,
        }}
      >
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">{props.course.title}</Typography>
        </div>
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">
            {props.course.description}
          </Typography>
        </div>
        <img
          src={props.course.imageLink}
          style={{
            width: 300,
            marginRight: 10,
            minHeight: 190,
          }}
        ></img>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Button
            variant="contained"
            style={{
              border: 1,
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => {
              props.navigate("/allcourse/" + props.course.id);
            }}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default Allcourse;
