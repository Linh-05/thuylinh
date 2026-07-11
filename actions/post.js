'use server'
export default async function createPost(prevState, formData) {
    const usename = formData.get("usename");
    const pass = formData.get("pass");
    console.log({usename, pass});

    //validate
    if (usename === "" || usename.length < 5){
        return {
            ...prevState,
            error: {
                usename: "Tên đăng nhập ít nhất 5 kí tự"
            }
        }
    }

    //call api
    return {
        error: {},
        message: "Đăng nhập thành công",
        usename,
        pass,
    };
}