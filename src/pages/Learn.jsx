import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import "./Learn.css";
import skeleton from "../assets/skeleton.png";
import axialSkeleton from "../assets/AxialSkeleton.png";
import appendicularSkeleton from "../assets/AppendicularSkeleton.png";
// import skullImage from "../assets/skull.png";
// import armImage from "../assets/arm.png";
// import ribsImage from "../assets/ribs.png";
// import handImage from "../assets/hand.png";
// import legImage from "../assets/leg.png";
// import footImage from "../assets/foot.png";

const Learn = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>โหมดการเรียนรู้</h1>
        <div className="lesson-list">
          <LessonCard title="บทนำเกี่ยวกับโครงสร้างกระดูก" image={skeleton} link="/learn/Introduction" />
          <LessonCard title="โครงกระดูกแกนกลาง" image={axialSkeleton} link="/learn/axialSkeleton" />
          <LessonCard title="โครงกระดูกแขนขา" image={appendicularSkeleton} link="/learn/appendicularSkeleton" />
          {/* <LessonCard title="กระดูกกะโหลก" image={skullImage} link="/learn/skull" /> */}
          {/* <LessonCard title="กระดูกแขน" image={armImage} link="/learn/arm" /> */}
          {/* <LessonCard title="กระดูกทรวงอกและกระดูกสันหลัง" image={ribsImage} link="/learn/ribs" /> */}
          {/* <LessonCard title="กระดูกมือ" image={handImage} link="/learn/hand" /> */}
          {/* <LessonCard title="กระดูกขา" image={legImage} link="/learn/leg" /> */}
          {/* <LessonCard title="กระดูกเท้า" image={footImage} link="/learn/foot" /> */}
        </div>
      </div>
    </>
  );
};

export default Learn;
