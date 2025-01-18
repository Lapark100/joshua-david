import H1 from "@/components/h1"
import Image from "next/image"
import avatar from '@/public/images/Wallpaper.png'
import Link from "next/link"


export default function Contact () {
const email = "joshuad692@gmail.com";
return (

<>
<H1> <span className="text-white"> Get in touch!</span></H1>

<div className="md:flex  w-full md:space-x-8 mb-8" >
                <div className=" mb-8 md:mb-0 w-full md:w-1/2 h-40  md:h-80  overflow-hidden">
                    <Image src={avatar} className="object-cover w-full h-full rounded" alt="Joshua David image" />
                </div>

                <div className=" w-full md:w-1/2 flex flex-col justify-center  ">
                <H1> <span className="text-white"> Have a question?</span></H1>
                    <p className="leading-7 "> I&apos;m currently available for work/collaborations. Send me a mail and I&apos;ll respond in 24 hours!</p>
                    <div className=" flex  mt-4 flex-col md:block">
                        <Link href={`mailto:${email}`} className="bg-[#cadb2b] text-[#34469b] text-sm p-3 w-28 rounded-lg"> Contact me</Link>
                        
                    </div>

                </div>
            </div>


</>)
}