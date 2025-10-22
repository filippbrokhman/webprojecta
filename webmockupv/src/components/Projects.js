import React from "react";
import './component.css'

const Projects = () => {
    return (
        <div>
            <section className="body-text-white" style={{paddingTop: 80}}>
                <div className="body-content-container">
                    <ul>
                        <h2> Projects</h2>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Vestibulum sollicitudin, metus sit amet vehicula commodo, 
                            lectus lectus vehicula purus, nec dapibus risus dolor at nisi. 
                            Suspendisse et iaculis magna, sed malesuada est. 
                            Nunc vestibulum laoreet tempus. 
                            Fusce tristique, velit et congue viverra, 
                            leo libero tristique nisl, nec interdum eros odio eu ante. 
                            Nunc egestas elementum ipsum, in fermentum diam eleifend id. 
                            Duis sit amet faucibus tortor, sed auctor ipsum. 
                            Sed auctor facilisis felis at suscipit. Vestibulum congue dignissim
                            placerat. Fusce posuere elit in bibendum ultricies. 
                            Maecenas eget tellus a diam accumsan maximus ut sit amet turpis. 
                            Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec ut ornare odio. Suspendisse et laoreet
                            mi.</p>
                    </ul>
                </div>
            </section>
            <section className="body-text-blue">
                <div className="body-content-container">
                    <h2>Here's what we can do for you
                    </h2>
                </div>
            </section>
            <section className="body-variant-white">
                <div className="body-content">
                    <ul>
                        <h1> Project Example 1</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Vestibulum sollicitudin, metus sit amet vehicula commodo, 
                            lectus lectus vehicula purus, nec dapibus risus dolor at nisi. 
                            Suspendisse et iaculis magna, sed malesuada est. 
                            Nunc vestibulum laoreet tempus. 
                            Fusce tristique, velit et congue viverra, 
                            leo libero tristique nisl, nec interdum eros odio eu ante. 
                            Nunc egestas elementum ipsum, in fermentum diam eleifend id. 
                            Duis sit amet faucibus tortor, sed auctor ipsum. 
                            Sed auctor facilisis felis at suscipit.</p>
                        <p>Will be a button with link soon</p>
                    </ul>
                </div>
                <div className="Media">
                    <img src={require("../Images/kitchen-casement-arched.jpeg")} alt="Arched window"></img>
                </div>
            </section>
            <section className="body-variant-white">
                <div className="body-content">
                    <ul>
                        <h1> Project Example 2</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Vestibulum sollicitudin, metus sit amet vehicula commodo, 
                            lectus lectus vehicula purus, nec dapibus risus dolor at nisi. 
                            Suspendisse et iaculis magna, sed malesuada est. 
                            Nunc vestibulum laoreet tempus. 
                            Fusce tristique, velit et congue viverra, 
                            leo libero tristique nisl, nec interdum eros odio eu ante. 
                            Nunc egestas elementum ipsum, in fermentum diam eleifend id. 
                            Duis sit amet faucibus tortor, sed auctor ipsum. 
                            Sed auctor facilisis felis at suscipit.</p>
                        <p>Will be a button with link soon</p>
                    </ul>
                </div>
                <div className="Media">
                    <img src={require("../Images/multi-windows.jpeg")} alt="Arched window"></img>
                </div>
            </section>
            <section className="body-variant-white">
                <div className="body-content">
                    <ul>
                        <h1> Project Example 3</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Vestibulum sollicitudin, metus sit amet vehicula commodo, 
                            lectus lectus vehicula purus, nec dapibus risus dolor at nisi. 
                            Suspendisse et iaculis magna, sed malesuada est. 
                            Nunc vestibulum laoreet tempus. 
                            Fusce tristique, velit et congue viverra, 
                            leo libero tristique nisl, nec interdum eros odio eu ante. 
                            Nunc egestas elementum ipsum, in fermentum diam eleifend id. 
                            Duis sit amet faucibus tortor, sed auctor ipsum. 
                            Sed auctor facilisis felis at suscipit.</p>
                        <p>Will be a button with link soon</p>
                    </ul>
                </div>
                <div className="Media">
                    <img src={require("../Images/Sliding Windows-min.jpg")} alt="Arched window"></img>
                </div>
            </section>
        </div>
    )
}

export default Projects;
