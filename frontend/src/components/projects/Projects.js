import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check Out My Projects"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Note Taking Website"
          des=" Registered users can add, delete, find (search query), edit, and share their non private notes with others using a unique link."
          src={projectOne}
        />
        <ProjectsCard
          title="ShopB"
          des=" Inspired by Shopee, ShopB is a full stack Ecommerce website implemented using MERN stack (Mongo, ExpressJS, ReactJs and NodeJS)."
          src={projectTwo}
        />
        <ProjectsCard
          title="Idea Validator"
          des=" A react based GUI which uses prompt engineering and chatGPT Developer's API to accept user's idea and rate them on it's uniqueness and practicality."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects