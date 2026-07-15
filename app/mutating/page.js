"use client";

import { useActionState } from "react";
import createPost from "@/actions/post";
import "./page.css";

export default function Page() {
  const [state, action, isPending] = useActionState(createPost, {
    error: {},
    status: 200,
    message: "",
  });

  return (
    <div>
      <form action={action}>
        {/* {JSON.stringify(state)} */}

        <h2>Đăng nhập</h2>

        <br />

        <div>
          <div>
            <label>Tên đăng nhập</label>
            <input name="username" id="username" type="text" />
          </div>

          {state.error?.username && (
            <p className="error">{state.error.username}</p>
          )}
        </div>

        <br />

        <div>
          <div>
            <label>Mật khẩu</label>
            <input name="pass" id="pass" type="password" />
          </div>

          {state.error?.pass && <p className="error">{state.error.pass}</p>}
        </div>

        <button disabled={isPending}>
          {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>

        {state.message && <p className="success">{state.message}</p>}
      </form>
    </div>
  );

  // useEffect(() => {
  //     const getData = async() => {
  //       const data = await getPosts();
  //       console.log(data);
  //     }
  //     getData();
  // },[])
  //  return (
  //     <div>
  //         <button onClick={clearCache}>clearCache</button>
  //     </div>
  //  )
}
