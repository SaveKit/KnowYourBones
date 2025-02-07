import { useParams } from "react-router-dom";
import "../styles/LessonPage.css";
import Navbar from "../components/Navbar";

const lessonData = {
  "introduction": {
    title: "บทนำเกี่ยวกับโครงสร้างกระดูก",
    content: `
      <h2>1.1 บทบาทและหน้าที่ของกระดูก</h2>
      <ul>
        <li><strong>รองรับร่างกาย</strong>: ช่วยให้ร่างกายมีรูปทรงและความแข็งแรง</li>
        <li><strong>ปกป้องอวัยวะสำคัญ</strong>: เช่น กะโหลกศีรษะปกป้องสมอง</li>
        <li><strong>ช่วยในการเคลื่อนไหว</strong>: ทำงานร่วมกับกล้ามเนื้อและข้อต่อ</li>
      </ul>
      
      <h2>1.2 องค์ประกอบของกระดูก</h2>
      <ul>
        <li>กระดูกแข็ง (Compact Bone)</li>
        <li>กระดูกพรุน (Spongy Bone)</li>
        <li>ไขกระดูก (Bone Marrow)</li>
      </ul>

      <h2>1.3 ประเภทของกระดูก</h2>
      <ul>
        <li>กระดูกยาว (Long Bones)</li>
        <li>กระดูกสั้น (Short Bones)</li>
        <li>กระดูกแบน (Flat Bones)</li>
      </ul>
    `
  },
  "axial-skeleton": {
    title: "โครงกระดูกแกนกลาง (Axial Skeleton)",
    content: `
      <h2>2.1 กระดูกกะโหลกศีรษะ</h2>
      <p>กระดูกกะโหลกศีรษะปกป้องสมองและรองรับโครงสร้างใบหน้า</p>

      <h2>2.2 กระดูกสันหลัง</h2>
      <p>แบ่งเป็น 5 ส่วนหลัก: กระดูกคอ, กระดูกอก, กระดูกเอว, กระเบนเหน็บ, และก้นกบ</p>

      <h2>2.3 กระดูกทรวงอก</h2>
      <p>กระดูกซี่โครงและกระดูกอกทำหน้าที่ปกป้องหัวใจและปอด</p>
    `
  },
  "appendicular-skeleton": {
    title: "โครงกระดูกแขนขา (Appendicular Skeleton)",
    content: `
      <h2>3.1 กระดูกแขน</h2>
      <p>กระดูกต้นแขน, กระดูกปลายแขน, กระดูกข้อมือและนิ้ว</p>

      <h2>3.2 กระดูกขา</h2>
      <p>กระดูกต้นขา, กระดูกหน้าแข้ง, กระดูกข้อเท้า</p>
    `
  }
};

const LessonPage = () => {
  const { lessonId } = useParams();
  const lesson = lessonData[lessonId];

  if (!lesson) {
    return <h1>ไม่พบบทเรียน</h1>;
  }

  return (
    <>
        < Navbar />
        <div className="container">
            <h1>{lesson.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>
    </>
  );
};

export default LessonPage;
