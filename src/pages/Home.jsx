import Navbar from "../components/Navbar";
import "./Home.css";
import skeletonImage from "../assets/skeleton.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content-container">
          <div className="content">
            <h1>ยินดีต้อนรับสู่</h1>
            <h1 style={{ fontFamily: 'Bebas Neue, san-serif'}}>KnowYourBones</h1>
            <p>
              เรียนรู้โครงสร้างกระดูกของมนุษย์ในรูปแบบที่ง่ายและสนุก! 
              <span style={{ color: 'black' }}> KnowYour</span>
              <span style={{ color: 'var(--primary-blue-color)' }}>Bones </span> 
              คือ แพลตฟอร์มการเรียนรู้ออนไลน์ที่ออกแบบมาเพื่อช่วยคุณ
              ทำความเข้าใจเกี่ยวกับกายวิภาคของโครงกระดูกมนุษย์อย่างลึกซึ้ง เรามีข้อมูลครบถ้วนตั้งแต่ชื่อกระดูก หน้าที่ไปจนถึง
              โครงสร้างที่ซับซ้อน พร้อมด้วยแบบฝึกหัดให้ได้ทบทวนบทเรียน</p>
            <button className="cta-button" onClick={() => window.location.href='/learn'}>เริ่มเรียนรู้</button>
          </div>
          <div className="image-container">
            <img src={skeletonImage} alt="skeleton" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
