import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

function About(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Neil Hammerle. I'm full stack web developer with experince in React, Vue, Node.js, MySQL, and NoSQL</p>
                <p>I hope one day I am able to start my own company and build something that could change the world</p>
                <p>There are many things I would like to learn and build. I like to consider myself as a learner and always welling to learn something new!</p>
                <p>The two projects that I'm currently working on are Chadder and Veganish. To learn more about them please click here or visit the home page!</p>
                <p>When I'm not working on my projects, what I like to do on my free time is going to aventures. I like going on long hikes and bike rides.</p>
                <p>Feel free to follow my aventures on my social media accounts below!</p>

            </Content>
        </div>
    );
}

export default About;