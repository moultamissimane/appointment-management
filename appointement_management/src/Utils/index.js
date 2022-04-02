export const getUser = () => {
  return new Promise((resolve, reject) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      resolve(user);
    } else {
      reject("No user");
    }
  });
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return null;
  }
};
