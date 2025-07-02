import React from 'react'
import {mazius} from "@/app/font";
import {Card} from "@/components/ServiceCards";
import {serviceData} from "@/constants/serviceData";

const MyServices = () => {
    return (
        <>
            <div className={'container w-full h-full py-20'}>
                <h2 className={'text-8xl'}>My <span className={`text-[#14CF93] ${mazius.className} `}>Services</span></h2>
            <div className="services w-full mt-20 flex flex-wrap items-center justify-evenly gap-10">
                {serviceData.map((service, index) => {
                    return (<Card key={index} service={service} />)
                })}
            </div>
            </div>
        </>
    )
}
export default MyServices
