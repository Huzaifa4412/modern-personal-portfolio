import React from 'react'
import clsx from "clsx";

const ServiceCard = ({title, description, tags, story   }: {title: string, description: string, tags: string[], story: string}) => {
    return (
        <div className={clsx("bg-[#000000] flex flex-col gap-3 p-3 rounded-lg text-xl w-[400px] h-[360px]" +
            "")}>
            <div className="top-header   flex items-center gap-2 ">
                <div className="red size-3 rounded-full bg-red-500 "></div>
                <div className="yellow size-3 rounded-full bg-yellow-500 "></div>
                <div className="green size-3 rounded-full bg-green-500 "></div>
            </div>
            <div className="content text-white ">
                <div className="heading pb-1">
                    {title}
                </div>
                <div className="description text-sm text-gray-400">
                    {description}
                </div>
            </div>
            <div className="tags flex items-center gap-2">
                {
                    tags.map((tag, index) => (
                        <div key={index} className="tag bg-gray-800 w-max px-2 py-1  rounded-md text-sm text-gray-400">
                            {tag}
                        </div>
                    ))
                }
            </div>
            <div className="story w-full flex-1 border border-gray-400 rounded-lg bg-[#0d1117] text-white text-sm ">
                <pre className={'text-balance max-w-[400px] p-3 overflow-auto whitespace-pre-wrap break-words'}>
                    {story}
                </pre>
            </div>
        </div>
    )
}
export default ServiceCard
