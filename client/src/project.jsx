// File name: project.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024
export default function Project() {
    return (
        <div>
            <div className="project-header">
                <h1>Here Is My Projects</h1>
            </div>
            <div className="project-content">
                <figure>
                    <img src="./img/Calculator.png" alt="Calculator App"></img>
                    <ficaption>
                        <h2>Calculator App</h2>
                        <p>A desktop calculator application built using C# in Windows Forms. 
                        This project allows users to perform basic arithmetic operations in a simple, intuitive interface.</p>
                        <p><strong>Language:</strong>C#</p>
                        <p><strong>Software:</strong>Visual Studio Code</p>
                    </ficaption>
                </figure>
                <figure>
                    <img src="./img/RealEstate.png" alt="Real Estate Website"></img>
                    <ficaption>
                    <h2>Real Estate Website</h2>
                        <p>A responsive real estate website highlights my skills in front-end development and responsive design.
                            This project showcases property listings with a modern, user-friendly layout.</p>
                        <p><strong>Language:</strong>HTML/CSS</p>
                        <p><strong>Software:</strong>Visual Studio Code</p>
                    </ficaption>
                </figure>
                <figure>
                    <img src="./img/ShoppingForm.png" alt="Shopping Form Website"></img>
                    <ficaption>
                    <h2>Shopping Website</h2>
                        <p>A user-friendly shopping form allows users to enter their shipping and billing information with real-time validation.
                        This project highlights my skills in form design and client-side scripting to enhance user interaction.</p>
                        <p><strong>Language:</strong>HTML/CSS and JavaScript</p>
                        <p><strong>Software:</strong>Visual Studio Code</p>
                    </ficaption>
                </figure>
            </div>
        </div>
    );
}
    