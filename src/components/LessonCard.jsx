import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../styles/LessonCard.css";

const LessonCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="learn-more">
      <div className="lesson-card">
        <div className="lesson-content">
          <h2>{title}</h2>
          <Link to={link} className="learn-more">
            ➜ เรียนรู้เพิ่มเติม
          </Link>
        </div>
        <img src={image} alt={title} className="lesson-image" />
      </div>
    </Link>
  );
};

LessonCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default LessonCard;
