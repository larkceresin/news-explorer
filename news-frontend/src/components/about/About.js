import React from 'react';
import jennaToff from '../../images/jennaToff.jpg';

function About() {

    return (
        <section className="about-author">
            <img src={jennaToff} className="about-author__image" alt="Jenna Toff"/>
            <div className="about-author__text-area">
            <h2 className="about-author__title">About the author</h2>
            <p className="about-author__text">Jenna Toff is a software engineer with backgrounds in food, education and healthcare. She started taking the Web Development program at Practicum X Yandex in March 2020, after the global pandemic caused by the Covid-19 virus put a halt to the work she had at the time. </p>
            <p className="about-author__text">Web development was something Toff looked into as a "let's make my own website" for a pet project- but quickly became a desire to do more of than just for <i>a project</i>.</p>
            <p className="about-author__text">Currently Toff is proficient in HTML, CSS, and JavaScript languages. She has experience using React.js, Node.js, Express.js. While studying she was a tutor assistant and helped other students in multiple other groups with questions they had on course and project material. She is looking to expand her knowledge to cover other programing languages.</p>
            <p className="about-author__text">Toff also has experience in data analysis, business administration, and information management. </p>

            </div>
        </section>
    )
}
export default About;