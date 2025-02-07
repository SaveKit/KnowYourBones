import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import "../styles/Learn.css";
import skeleton from "../assets/skeleton.png";
import axialSkeleton from "../assets/AxialSkeleton.png";
import appendicularSkeleton from "../assets/AppendicularSkeleton.png";

const lessons = [
  {
    title: "บทนำเกี่ยวกับโครงสร้างกระดูก",
    image: skeleton,
    link: "/exercises/introduction",
  },
  {
    title: "โครงกระดูกแกนกลาง",
    image: axialSkeleton,
    link: "/exercises/axial-skeleton",
  },
  {
    title: "โครงกระดูกแขนขา",
    image: appendicularSkeleton,
    link: "/exercises/appendicular-skeleton",
  },
];

const exercises = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>โหมดแบบฝึกหัด</h1>
        <div className="lesson-list">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      </div>
    </>
  );
};

export default exercises;
