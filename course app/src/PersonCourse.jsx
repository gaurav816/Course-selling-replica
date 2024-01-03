//by using REACT state variables which causes multiple re-redering process

// import { Card, Typography, TextField, Button } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { SetCourse } from "./Allcourse";
// import { atom, useRecoilState, useSetRecoilState } from "recoil";

// function PersonCourse() {
//   let { courseId } = useParams();
//   const [useCourse, setCourse] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/admin/courses/", {
//       method: "GET",
//       headers: {
//         Authorization: "bearer " + localStorage.getItem("token"),
//       },
//     }).then((res) => {
//       res.json().then((data) => {
//         setCourse(data.courses);
//         console.log(data);
//       });
//     });
//   }, []);
//   let course = null;
//   for (let i = 0; i < useCourse.length; i++) {
//     if (useCourse[i].id == courseId) {
//       course = useCourse[i];
//     }
//   }
//   if (!course) {
//     return <div>LOADING.........</div>;
//   }

//   return (
//     <div>
//       // <CourseCard course={course} />
//       // <br />
//       // <br />
//       //{" "}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Card
//           variant={"outlined"}
//           style={{
//             width: 400,
//             padding: 10,
//           }}
//         >
//           <Typography
//             variant="h5"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             Update the Course
//           </Typography>
//         </Card>
//       </div>
//       <UpdateCard useCourse={useCourse} course={course} setCourse={setCourse} />
//     </div>
//   );
// }

// function UpdateCard(props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [Image, setImage] = useState("");
//   const course = props.course;

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         variant={"outlined"}
//         style={{
//           width: 400,
//           padding: 10,
//         }}
//       >
//         <TextField
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//           fullWidth={true}
//           label="Title"
//           variant="outlined"
//         />
//         <br />
//         <br />

//         <TextField
//           onChange={(e) => {
//             setDescription(e.target.value);
//           }}
//           fullWidth={true}
//           label="Description"
//           variant="outlined"
//         />
//         <br />
//         <br />
//         <TextField
//           onChange={(e) => {
//             setImage(e.target.value);
//           }}
//           fullWidth={true}
//           label="Image link"
//           variant="outlined"
//         />
//         <br />
//         <br />
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={() => {
//               fetch("http://localhost:3000/admin/courses/" + course.id, {
//                 method: "PUT",
//                 body: JSON.stringify({
//                   title: title,
//                   description: description,
//                   imageLink: Image,
//                   published: true,
//                 }),
//                 headers: {
//                   "Content-type": "application/json",
//                   Authorization: "bearer " + localStorage.getItem("token"),
//                 },
//               }).then((res) => {
//                 res.json().then((data) => {
//                   alert("course updated");

//                   let updatedCourses = [];
//                   for (let i = 0; i < props.useCourse.length; i++) {
//                     if (props.useCourse[i].id == course.id) {
//                       updatedCourses.push({
//                         id: course.id,
//                         title: title,
//                         description: description,
//                         imageLink: Image,
//                       });
//                     } else {
//                       updatedCourses.push(props.useCourse[i]);
//                     }
//                   }
//                   props.setCourse(updatedCourses);

//                   console.log(data);
//                   console.log(data.token);
//                 });
//               });
//             }}
//           >
//             Update
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }

// function CourseCard(props) {
//   const course = props.course;
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         variant="outlined"
//         style={{
//           margin: 10,
//           width: 300,
//           minHeight: 250,
//         }}
//       >
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h5">{course.title}</Typography>
//         </div>
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="subtitle1">{course.description}</Typography>
//         </div>
//         <img
//           src={course.imageLink}
//           style={{
//             width: 300,
//             marginRight: 10,
//             minHeight: 190,
//           }}
//         ></img>
//       </Card>
//     </div>
//   );
// }
// export default PersonCourse;

///by using the recoil state
import { Card, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SetCourse } from "./Allcourse";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function PersonCourse() {
  let { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourse(data.courses);
        console.log(data);
      });
    });
  }, []);

  return (
    <div>
      <CourseCard courseId={courseId} />

      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          variant={"outlined"}
          style={{
            width: 400,
            padding: 10,
          }}
        >
          <Typography
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Update the Course
          </Typography>
        </Card>
      </div>

      <UpdateCard courseId={courseId} />
    </div>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const course = props.course;
  const [useCourse, setCourse] = useRecoilState(courseState);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        variant={"outlined"}
        style={{
          width: 400,
          padding: 10,
        }}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />
        <br />
        <br />

        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setImage(e.target.value);
          }}
          fullWidth={true}
          label="Image link"
          variant="outlined"
        />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/courses/" + props.courseId, {
                method: "PUT",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  imageLink: Image,
                  published: true,
                }),
                headers: {
                  "Content-type": "application/json",
                  Authorization: "bearer " + localStorage.getItem("token"),
                },
              }).then((res) => {
                res.json().then((data) => {
                  alert("course updated");

                  let updatedCourses = [];
                  for (let i = 0; i < useCourse.length; i++) {
                    if (useCourse[i].id == props.courseId) {
                      updatedCourses.push({
                        id: props.courseId,
                        title: title,
                        description: description,
                        imageLink: Image,
                      });
                    } else {
                      updatedCourses.push(useCourse[i]);
                    }
                  }
                  setCourse(updatedCourses);

                  console.log(data);
                  console.log(data.token);
                });
              });
            }}
          >
            Update
          </Button>
        </div>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const useCourse = useRecoilValue(courseState);
  let course = null;
  for (let i = 0; i < useCourse.length; i++) {
    if (useCourse[i].id == props.courseId) {
      course = useCourse[i];
    }
  }
  if (!course) {
    return <div>LOADING......</div>;
  }
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
          <Typography variant="h5">{course.title}</Typography>
        </div>
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">{course.description}</Typography>
        </div>
        <img
          src={course.imageLink}
          style={{
            width: 300,
            marginRight: 10,
            minHeight: 190,
          }}
        ></img>
      </Card>
    </div>
  );
}
export default PersonCourse;
const courseState = atom({
  key: "courseSate", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
