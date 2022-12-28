import React from "react"


export default function Content() {
    return (
        <div className="content">
            <p className="name">Abdulrahman Labib</p>
            <p className="title">CS @Tufts</p>
            <p className="website">github.com/labibdotc</p>
            <div className="buttons">
            <a href="mailto:abdulrahman.afia@tufts.edu">
                <div className="email"> 
                    <div className="img"><img src="../Mail.png"/></div> 
                    <div className="p"><p>Email</p></div>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-labib/">
                <div className="linkedin"> 
                    <div className="img"><img src="../linkedin.png"/></div>
                    <div className="p"><p>LinkedIn</p></div>
                </div>
            </a>
            </div>
            <div className="bulk">
                <p className="titles">About</p>
                <p className="text"> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <p className="titles">Interest</p>
                <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    );
}