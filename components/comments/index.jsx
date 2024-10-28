"use client"

import { useState } from "react"
import "./comments.css"

export default function Comments() {
    const [replyOpen, setReplyOpen] = useState(false);

    function handleReplyChange() {
        if(replyOpen === true) {
            setReplyOpen(false)
        } else (
            setReplyOpen(true)
        )
    }

    return (
        <div className="comments-list">
            <div className="title">
                <h1><span>4 </span>Comments</h1>
            </div>

            <div className="comments-text">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button" onClick={handleReplyChange}>Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>

                <form className="post-reply" style={{display: replyOpen ? "flex" : "none"}}>
                    <textarea name="post-comments" id="post-comments" className="post-comments"></textarea>
                    <button className="post-reply">Post Reply</button>
                </form>

                <div className="comment-next">
                    <div className="user-info">
                        <img src="image/user-2.png" width={40} height={40} alt="" />

                        <div className="user-texts">
                            <h4 className="name-surname">Anne Valentine </h4>
                            <h4 className="user-name">@annev1990</h4>
                        </div>

                        <button className="reply-button" onClick={handleReplyChange}>Reply</button>
                    </div>

                    <p>
                        <span>@hummingbird1</span>  While waiting for dark mode, there are browser extensions that will
                        also do the job. Search for "dark theme” followed by your browser. There might be a
                        need to turn off the extension for sites with naturally black backgrounds though.
                    </p>
                </div>
            </div>

            <div className="comments-text">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button" onClick={handleReplyChange}>Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>

                <form className="post-reply" style={{display: replyOpen ? "flex" : "none"}}>
                    <textarea name="post-comments" id="post-comments" className="post-comments"></textarea>
                    <button className="post-reply">Post Reply</button>
                </form>
            </div>

            <div className="comments-text">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button" onClick={handleReplyChange}>Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>

                <form className="post-reply" style={{display: replyOpen ? "flex" : "none"}}>
                    <textarea name="post-comments" id="post-comments" className="post-comments"></textarea>
                    <button className="post-reply">Post Reply</button>
                </form>
            </div>
        </div>
    )
}