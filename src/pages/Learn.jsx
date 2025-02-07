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
    link: "/learn/introduction",
  },
  {
    title: "โครงกระดูกแกนกลาง",
    image: axialSkeleton,
    link: "/learn/axial-skeleton",
  },
  {
    title: "โครงกระดูกแขนขา",
    image: appendicularSkeleton,
    link: "/learn/appendicular-skeleton",
  },
];

const Learn = () => {
  return (
    <>
      <Navbar />
      <div className="learn-container">
        <h1>โหมดการเรียนรู้</h1>
        <div className="lesson-list">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Learn;
