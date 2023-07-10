import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Matriculation"
            subTitle="AISPV (2018-2019)"
            result="10/10"
            des="Explored various subjects in all domains and after scoring 96.8% (equivalent to 10/10 CGPA), decided to pursue Science with Maths."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="AISPV (2020-2021)"
            result="10/10"
            des="Cleared Senior Secondary School with 96.6% and decided to opt for Engineering interested by the logical and creative aspect of this stream."
          />
          <ResumeCard
            title="Btech in Computer Science"
            subTitle="NSIT (2021-2025)"
            result="8.0/10"
            des="Exploring several domains within Computer Science and gathering relevant work experiences in interested fields."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="ARES Robotics (2022 - Present)"
            result="NSUT"
            des="Worked on developing the software system of a robot for remote teleoperation and autonomous navigation and traversal."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Devcomm (2022 - 2023)"
            result="NSUT"
            des="Worked on a lot of Web Based projects using MERN stack. Also, helped in ideation and management of events organized by Devcomm."
          />
          <ResumeCard
            title="Junior Council"
            subTitle="Codechef (2022 - 2022)"
            result="NSUT"
            des="Joined this organization to explore and further my experience in DSA and competetive programming."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education