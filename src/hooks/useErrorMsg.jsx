import { useState } from "react";

const useErrorMsg = (initState) => {
  const [errorMessages, setErrorMessages] = useState(initState);

  const setError = (field, message) => {
    setErrorMessages((prevErrors) => ({ ...prevErrors, [field]: message }));
  };

  const clearErrors = () => {
    setErrorMessages(initState);
  };

  return {
    errorMessages,
    setError,
    clearErrors,
  };
};

export default useErrorMsg;
