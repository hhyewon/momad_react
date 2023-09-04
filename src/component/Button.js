import PropTypes from "prop-types";
import styles from "../Button.module.css";

// props 타입 지정
Button.propTypes = {
    // isRequired: 필수 조건일 경우
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
}

function Button({text, onClick}) {
    return (
        <button onClick={onClick} className={styles.btn}>{text}</button>
    )
}

export default Button;
