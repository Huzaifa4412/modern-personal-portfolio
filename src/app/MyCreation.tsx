import React from 'react'
import {mazius} from "@/app/font";
import Card from "@/components/RotatingCards";

const MyCreation = () => {
    return (
        <div className={'w-full bg-[#F2F2F2] mt-10 h-full relative pt-20 overflow-hidden'}>

            <div className=" heading container mt-10 w-full">
                <h2 className={"text-8xl"}>My <span className={`text-[#14CF93] ${mazius.className} `}>Creation</span></h2>
            </div>

        <div className={'w-full h-full flex justify-center '} style={{ height: '100vh' }}>

            <Card />

        </div>
        </div>
    )
}
export default MyCreation
