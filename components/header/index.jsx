import Image from "next/image";
import "./header.css";
import AddFeedbackButton from "../add-feedback-buttons";
import { getFeedback } from "@/utils/fetch";

export default async function Header() {
    const data = await getFeedback();

    return (
        <header className="header">
            <div className="suggestions-counter">
                <Image width={23} height={24} src="/image/logo.png" alt="" />
                <p><span>{data.length} </span>Suggestions</p>
            </div>

            <div className="short-by">
                <p>Sort by :</p>
                
                <div className="filter-options">
                    <p><input type="checkbox"/>deneme1</p>
                    <p><input type="checkbox"/>deneme 2</p>
                    <p><input type="checkbox"/>deneme 3</p>
                </div>
            </div>

            <AddFeedbackButton />
        </header>
    )
}