"use client"


import avatar from '../public/images/profilePicture.jpg'
import code from '@/public/images/code.png'
import Image from "next/image";
import H1 from "@/components/h1";
import Button from './button';
import { useRouter } from "next/navigation";
export default function HeroSection() {

    const email = "joshuad692@gmail.com";

    const router = useRouter()
    const handleClick = () => {
        router.push(`mailto:${email}`)
    }

    return (
        <section className="mb-16">
            <div className="md:flex  w-full md:space-x-8 mb-8" >
                <div className=" mb-8 md:mb-0 w-full md:w-1/2 h-40  md:h-80  overflow-hidden">
                    <Image src={avatar} className="object-cover w-full h-full rounded" alt="Joshua David image" />
                </div>

                <div className=" w-full md:w-1/2 flex flex-col justify-center  ">

                    <H1>
                        Full Stack Developer
                    </H1>
                    <p className="leading-7 "> Hello! I&apos;m Joshua David, a Full Stack Developer.
                        I enjoy building comprehensive solutions that seamlessly
                        integrate both the frontend and backend. With a passion
                        for creating efficient and scalable applications,
                        I strive to deliver high-quality user experiences.
                        In my spare time, I work on enhancing my development
                        skills and exploring new technologies.</p>
                    <div className=" flex  mt-4 flex-col md:block">
                        <Button variant='default' size='sm' onClick={handleClick} className="flex justify-center items-center rounded " >Contact Me</Button>
                    </div>

                </div>
            </div>


        </section>

    )
}








