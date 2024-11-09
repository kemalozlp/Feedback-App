import { deletePost, editPost } from "../login/action";
import "./edit-feedback.css";
import Image from "next/image";

export default function EditFeedbackForm({ feedbackData, id }) {
  return (
    <div className="edit-feedback">
      <div className="circle">
        <Image width={23} height={23} src="/image/edit-logo.png" />
      </div>

      <form action={editPost}>
        <h1>Editing ‘Add a dark theme option’</h1>
        <input type="hidden" name="editid" id="editid" value={id} />
        <div className="form-item">
          <label htmlFor="title">Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={feedbackData.title}
          />
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
          <label htmlFor="update">Update Status</label>
          <p>Change feature statek</p>
          <select name="update" id="update">
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="live">Live</option>
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="detail">Feedback Detail</label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <input
            type="text"
            name="detail"
            id="detail"
            placeholder={feedbackData.detail}
          />
        </div>

        <div className="form-buttons">
          <input type="hidden" name="editid" id="editid" value={id} />
          <button className="delete" action={deletePost}>
            Delete
          </button>

          <button className="cancel">Cancel</button>
          <button className="add-new">Edit Feedback</button>  
        </div>
      </form>
    </div>
  );
}
