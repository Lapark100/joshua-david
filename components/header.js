'use client'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import DarkMode from "./dark-mode";
import Navigation from "./navigation";
import Link from "next/link";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import avatar from '../public/images/profilePicture1.jpg'
import Image from "next/image";

export default function Header() {
    const theme = useServerDarkMode();
    return (
        <header className="flex justify-between md:items-center ">
            <div className="flex items-center mt-2 md:space-x-12" >
                <div className="justify-center items-center h-20 w-20 rounded-full overflow-hidden mb-8 hidden md:block cursor-auto ">
                
                <Link href="/" className="text-xl font-mono" ><Image src={avatar} className="object-cover w-full h-full" alt="personal avatar" priority={true} quality={50} placeholder="blur"/></Link>
                </div>
                <Navigation /> 
            </div>
           <div className=" md:mt-2 cursor-pointer">
            <DarkMode defaultTheme={theme}/>
           </div>
        </header>
    )
}