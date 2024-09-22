// File name: service.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024

export default function Service() {
    return (
    <div className="service-container">
        <div className="service-header">
            <h1>Services to Offer</h1>
        </div>
        <div className="service-content">
            <figure>
                <img src="./img/GameDevelopment.png" alt="GameDev" width="400px" height="auto"></img>
                <figcaption>
                    <h2>Game Development</h2>
                    <p>Crafting immersive and interactive video games using various programming languages like C#, Javascript,
                         design, and animation skills across various platforms.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/Webdevelopment.jpeg" alt="WebDev" width="400px" height="auto"></img>
                <figcaption>
                    <h2>Web Development</h2>
                    <p>Building responsive and visually appealing websites by leveraging front-end and back-end technologies
                         for user-friendly experiences.</p>
                </figcaption>
            </figure>
        </div>
    </div>
    );
}
    