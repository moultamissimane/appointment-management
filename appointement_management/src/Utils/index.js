export const getUser = () => {
  return new Promise((resolve, reject) => {
    // localStorage allows us to save key/value pairs in the browser
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      resolve(user);
    } else {
      reject("No user");
    }
  });
};
// payload is the data we want to save in localStorage (HTTP response)

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return null;
  }
}; 


// export const getUserId = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.id;
//   }
//   return null;
// }


// export const getUserRole = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.role;
//   }
//   return null;
// }


// export const getUserName = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.name;
//   }
//   return null;
// }


// export const getUserEmail = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.email;
//   }
//   return null;
// }


// export const getUserPhone = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.phone;
//   }
//   return null;
// }




// export const getUserAddress = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.address;
//   }
//   return null;
// }


// export const getUserCity = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     return user.city;
//   }
//   return null;
// }




