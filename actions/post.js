"use server";

import { cacheLife, cacheTag, revalidateTag } from "next/cache";

export default async function createPost(prevState, formData) {
  const username = formData.get("username");
  const pass = formData.get("pass");

  console.log({ username, pass });

  const error = {};

  // Validate username
  if (!username) {
    error.username = "Vui lòng nhập tên đăng nhập";
  } else if (username.length < 5) {
    error.username = "Tên đăng nhập ít nhất 5 ký tự";
  } else if (username.includes(" ")) {
    error.username = "Tên đăng nhập không được chứa khoảng trắng";
  }

  // Validate password
  if (!pass) {
    error.pass = "Vui lòng nhập mật khẩu";
  } else if (pass.length < 6) {
    error.pass = "Mật khẩu ít nhất 6 ký tự";
  } else if (pass.includes(" ")) {
    error.pass = "Mật khẩu không được chứa khoảng trắng";
  } else if (!/[A-Z]/.test(pass)) {
    error.pass = "Mật khẩu phải có ít nhất 1 ký tự viết hoa";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    error.pass = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt";
  }
  
  if (Object.keys(error).length > 0) {
    return {
      ...prevState,
      error,
      message: "",
    };
  }
  return {
    error: {},
    status: 200,
    message: "Đăng nhập thành công",
    username,
    pass,
  };
}
// export async function getPosts(prev,formData) {
//     "use cache";
//     cacheTag("data");

//     cacheLife({stale: 30,expire: 35})
//     const data = Math.random()

//     console.log(data);

//     return {
//         data
//     };
// }

// export async function clearCache() {
//     revalidateTag("data");
//     return{};
// }
