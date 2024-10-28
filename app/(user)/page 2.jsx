import "./user-home.css";

export default function UserHome() {
    return (
        <div className="container">
                <div className="empty-container">
                    <Image src="../image/empty-image.png" alt="" />

                    <div className="empty-texts">
                        <h3>There is no feedback yet.</h3>
                        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                    </div>
                </div>
            </div>
    )
}