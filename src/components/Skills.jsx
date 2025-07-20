// Skills.js
export default function Skills() {
    const skills = ["WORDPRESS", "PHP", "HTML", "CSS", "Javascript", "React", "WEB HOSTING", "SEO", "CMS INTEGRATIONS", "PROJECT MAMAGEMENT", "CUSTOMER SERVICE REPRESNTATIVE"];
    return (
    <div className="w-full bg-indigo-900 inset-y-0">
        <section id="skills"
            className="w-full">
            <h2 className="text-center text-6xl text-white font-bold">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-3 justify-center 
                            flex-wrap mx-auto max-w-x2 grid grid-cols-3 ">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-indigo-500 
                                        rounded text-lg text-white
                                        font-bold hover:shadow-xl ">
                            {skill}
                        </div>
                    )})}
            </div>
        </section></div>
    )
}