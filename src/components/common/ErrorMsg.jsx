// sign in, sign up 에서 사용

const ErrorMsg = ({ field, message }) => {
  return (
    <ul className="error-messages">
      <li>{`That ${field} ${message}`}</li>
    </ul>
  );
};

export default ErrorMsg;
