import React from 'react'

import { FaPython, FaJava, FaNode, FaJsSquare, FaGitSquare, FaGithubSquare, FaReact, FaNpm, FaBootstrap, FaCss3Alt, FaHtml5, FaAws} from 'react-icons/fa'

import { SiTypescript, SiTailwindcss, SiVite, SiJetbrains, SiPycharm, SiIntellijidea, SiEclipseide, SiLeetcode, SiCodechef, SiJupyter, SiCanva, SiVercel } from "react-icons/si";

import { RiNextjsFill, RiGitlabFill } from "react-icons/ri";

import { VscVscode } from "react-icons/vsc";

const skillIcons = [
    { name: 'Python', icon: <FaPython size={100}/> },
    { name: 'Java', icon: <FaJava size={100}/> },
    { name: 'Node.js', icon: <FaNode size={100}/> },
    { name: 'TypeScript', icon: <SiTypescript size={100}/> },
    { name: 'JavaScript', icon: <FaJsSquare size={100}/> },
    { name: 'Git', icon: <FaGitSquare size={100}/> },
    { name: 'GitHub', icon: <FaGithubSquare size={100}/> },
    { name: 'React', icon: <FaReact size={100}/> },
    { name: 'NPM', icon: <FaNpm size={100}/> },
    { name: 'Vite', icon: <SiVite size={100}/> },
    { name: 'JetBrains', icon: <SiJetbrains size={100}/> },
    { name: 'PyCharm', icon: <SiPycharm size={100}/> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={100}/> },
    { name: 'Eclipse IDE', icon: <SiEclipseide size={100}/> },
    { name: 'LeetCode', icon: <SiLeetcode size={100}/> },
    { name: 'CodeChef', icon: <SiCodechef size={100}/> },
    { name: 'Jupyter Notebook', icon: <SiJupyter size={100}/> },
    { name: 'Canva', icon: <SiCanva size={100}/> },
    { name: 'Vercel', icon: <SiVercel size={100}/> },
    { name: 'Next.js', icon: <RiNextjsFill size={100}/> },
    { name: 'GitLab', icon: <RiGitlabFill size={100}/> },
    { name: 'VS Code', icon: <VscVscode size={100}/> },
    { name: 'AWS', icon: <FaAws size={100}/> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={100}/> },
    { name: 'Bootstrap', icon: <FaBootstrap size={100}/> },
    { name: 'CSS', icon: <FaCss3Alt size={100}/> },
    { name: 'HTML', icon: <FaHtml5 size={100}/> },
];

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#381a5f_80%,#000)] py-32'>
            <div className='text-white/80 w-[350px] sm:min-w-[600px] md:min-w-[900px] mx-auto p-10 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Use</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8 md:gap-4 lg:gap-12'>
                    {skillIcons.map((skill, index) => (
                        <div 
                            key={index} 
                            className='h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[125px] md:w-[125px] lg:h-[130px] lg:w-[130px] xl:h-[135px] xl:w-[135px] flex flex-col justify-between items-center bg-white/10 p-2 rounded-xl'>
                            {skill.icon}
                            <p className='text-lg'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
