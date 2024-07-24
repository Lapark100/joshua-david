import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
return (
    
<footer className="flex justify-center items-center md:justify-start  mt-8 mb-8">
    <hr></hr>
    <div className="flex space-x-28 md:space-x-6">
    <Link aria-label="see my github account" href='https://github.com/Lapark100'><GitHubLogoIcon className="w-5 h-5"/></Link>
    <Link aria-label="see my linkedin account" href='https://www.linkedin.com/in/joshua-david-41383b1ab/'><LinkedInLogoIcon className="w-5 h-5"/></Link>
    <Link aria-label="see my instagram account" href='https://www.instagram.com/la_park/'><InstagramLogoIcon className="w-5 h-5"/></Link>
    
    
    
    </div>
    


</footer>
)}