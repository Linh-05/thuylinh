'use client'
import { useActionState } from "react";
import createPost from "@/actions/post";

export default function Page() {
    const [state, action, isPending] = useActionState(createPost, {
        error: {},
        status: 200,
    });
    return(
        <div>
            <form action={action}>
                {JSON.stringify(state)}
                <br />
                <div>
                    <div>
                        <label>Tên đăng nhập</label>
                        <input name="usename" id="usename" type="text"/>
                    </div>
                    {state.error?.usename && state.error.usename}
                </div>
                <br />
                <div>
                    <div>
                        <label>Mật khẩu</label>
                        <input name="pass" id="pass" type="password"/>
                    </div>
                    {state.error?.pass && state.error.pass}
                </div>
                <button>Đăng nhập</button>
                <p>{state.message}</p>
            </form>
        </div>
    )
}