export const validateEmail = (email: string): string => {
  let error;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email) || email === "") {
    error = "";
  } else {
    error = "Invalid email";
  }

  return error;
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validatePasswordMatching = (password: string, confirmPassword: string): string => {
  let error;
  if (password !== confirmPassword) {
    error = "Passwords do not match";
  } else {
    error = "";
  }
  return error;
};

export const validateHandle = (handle: string): string => {
  let error;
  const handleRegex = /^[a-zA-Z0-9]{4,20}$/;
  if (handle.length < 4) {
    error = "Handle must be at least 4 characters";
  } else if (handle.length > 20) {
    error = "Handle must be less than 20 characters";
  } else if (handleRegex.test(handle)) {
    error = "";
  } else {
    error = "Handle can contain only letters and numbers";
  }

  return error;
};
