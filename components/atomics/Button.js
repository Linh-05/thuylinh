"use client"

import { useFormStatus } from "react-dom"

export default function Button({label}) {
    const { pending } = useFormStatus();

    return <button disabled={pending}>{pending ? "Đang xử lí" : label} </button>
}