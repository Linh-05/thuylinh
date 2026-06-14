"use client";

import Button from "@/components/atomics/Button";
import Link, { useLinkStatus } from "next/link";
import { useActionState, useTransition } from "react";
import { resolve } from "styled-jsx/css";


// export default function ConfirmLink() {
//   return (
//     <Link
//       href="About"
//       onNavigate={(e) => {
//         const isConfirmed = window.confirm("Bạn có chắc rời giỏ hàng không?");
//         if (!isConfirmed) {
//           e.preventDefault();
//         }
//       }}
//     >
//       Tiến hành thanh toán
//     </Link>
//   );
// }
// function LinkContent({ label }) {
//   const { pending } = useLinkStatus();
//   return (
//     <span className={pending ? "opacity-50 animate-pusle" : ""}>
//       {pending ? "Đang chuyển trang..." : label}
//     </span>
//   );
// }
// export default function Navigate(){
//   return(
//     <Link href="/About" prefetch={false}>
//       <LinkContent label="Tới dashboard nặng"/>
//     </Link>
//   )
// }
export default function DeleteProductButton({productId}) {
  const [isPending,startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(async () => {
      
    })
  }
}

