import { mazius } from '@/font'
import clsx from 'clsx'
import React from 'react'
import ProjectCard from './projects-card'
import { client } from '../sanity/lib/client';

const MyProjects = async () => {

    const query = `*[_type =='project'] | order(_createdAt asc){
  title, image, liveUrl, description}`;

    const projects = await client.fetch(query)


    return (
        <div id='playbook' className=' w-full relative py-20 container'>
            <h2 className={clsx("container mb-20 md:text-7xl text-5xl text-black")}>
                My{" "}
                <span className={clsx("text-[#14CF93]", mazius.className)}>
                    Projects
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project: any, index: number) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        liveUrl={project.liveUrl}
                        image={project.image}
                    />
                ))}
            </div>
        </div>

    )
}

export default MyProjects
