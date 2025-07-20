// About.js

import ImgAbout from '../assets/images/ceo.jpeg';
export default function About() {
    return (
        <div className="w-full bg-indigo-800">
        <section
            id="about"
            className="px-10  flex flex-col lg:flex-row py-10 
                       align-justify bg-indigo-800 max-w-5xl mx-auto w-full text-white">
            <div className="flex-1 w-ful">
                <img src={ImgAbout}
                    alt="About"
                    className="w-[350px] h-[400px] object-cover rounded-full float-left bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6 w-full">
                <div>
                    <h2 className="text-center text-white 
                                   text-5xl font-bold">
                        About Me
                    </h2>
                </div>
                <p className="text-white">
                    Tech-savvy Web Developer with many years customizing online presence by implementing
                    stunning layouts to maximize campaign reach.
                </p>
                <p className="text-white">
                     Go-to resource for managing data presentation and
                    front-end services for unique experience. Pivotal in managing complex analytics,
                    web traffic and campaign tracking systems to maintain organizational reach. Detail-oriented
                    approach to planning QA measures, API integration, CMS Integrations, and deliverable launch 
                </p>
            </div>
        </section></div>
    );
}