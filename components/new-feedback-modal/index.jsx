import { PlusIcon } from "@/helpers/icons";
import "./new-feedback.css";
import { saveFeedback } from "../login/action";

export default function NewFeedbackForm() {
    return (
        <div className="new-feedback">
                <div className="circle">
                    <PlusIcon />
                </div>
            <form action={saveFeedback}>
                <h1>Create New Feedback</h1>

                <div className="form-item">
                    <label htmlFor="title">Feedback Title</label>
                    <p>Add a short, descriptive headline</p>
                    <input type="text" name="title" id="title"/>
                </div>

                <div className="form-item">
                    <label htmlFor="category">Category</label>
                    <p>Choose a category for your feedback</p>
                    <select name="category" id="category">
                        <option value="ui">UI</option>
                        <option value="ux">UX</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="detail">Feedback Detail</label>
                    <p>Include any specific comments on what should be improved, added, etc.</p>
                    <input type="text" name="detail" id="detail"/>
                </div>

                <div className="form-buttons">
                    <button className="cancel">Cancel</button>
                    <button className="add-new">Add Feedback</button>
                </div>
            </form>
        </div>
    )
}