import { LessIcon } from "@/helpers/icons";
import "./go-back.css";
import Link from "next/link";

export default function GoBack() {
  return (
    <Link href="/" className="back-button"> 
      <LessIcon />
      <p>Go Back</p>
    </Link>
  )
}
