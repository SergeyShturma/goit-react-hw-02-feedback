import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <p className={css.message}>{message}</p>
      <iframe
        className={css.gif}
        src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
        alt="gif"
        allowFullScreen
      />
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
