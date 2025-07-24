import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const ProjectCard = ({ title, description, liveUrl, image }: {
  title: string,
  description: string,
  liveUrl: string,
  image: any
}) => {
  return (
    <div className='bg-black w-[350px] h-[400px] rounded-lg p-4 flex flex-col  gap-2'>
      <div className="header  w-full h-[30px] flex items-center justify-between">
        <div className="mac-header flex items-center gap-2 ">
          <div className="red size-3 rounded-full bg-red-500"></div>
          <div className="yellow size-3 rounded-full bg-yellow-500"></div>
          <div className="green size-3 rounded-full bg-green-500"></div>
        </div>
        <div className="liveBtn bg-zinc-200 text-black px-4 py-1 rounded-lg hover:bg-zinc-300 duration-300 font-mono">
          <a href={`${liveUrl}`}>Live Preview</a>
        </div>
      </div>
      <div className="images w-full h-[200px] overflow-hidden rounded-lg">
        <Image src={urlFor(image).url()} className='hover:scale-110 duration-500 object-cover w-full h-full' alt='Images' width={370} height={300} />
      </div>
      <div className="content text-white">
        <div className="title text-xl border-b-2 border-[#14CF93] pb-2">
          {title}
        </div>
        <div className="description text-sm mt-2">
          {description}
        </div>
      </div>
    </div >
  )
}

export default ProjectCard
