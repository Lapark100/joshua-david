'use client'

import Card from "@/components/card";
import { name, description } from "@/lib/const";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
export default function ProjectList() {

  const email = "joshuad692@gmail.com";

  const router = useRouter()

  const handleClick = () => {
    router.push('https://budget-buddy-iota.vercel.app/login')
  }
    
      return (
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="mb-4">
            <Card className='h-full font-sans space-y-4'>
              <div className="flex justify-between mb-4">
              <div className="font-semibold">{name[0]}</div>
              <div>⭐⭐⭐</div>
              </div>
            
            <div>{description[0]}</div>
            <Button variant='default' size='sm' onClick={handleClick} className="flex justify-center items-center rounded " >View Project</Button>
            </Card>
          </li>
        
      </ul>
      )
      
}

