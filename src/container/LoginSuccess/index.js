import React, { useEffect } from "react";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return <div>login Successfull</div>;
};

export default LoginSuccess;
