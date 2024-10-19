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

  const handleClick1 = () => {
    router.push('https://hr-landing-page-inky.vercel.app/')
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="mb-4">
        <Card className="h-full font-sans space-y-4 flex flex-col justify-between">
          <div className="flex justify-between mb-4">
            <div className="font-semibold">{name[0]}</div>
            <div>⭐⭐⭐</div>
          </div>

          <div className="flex-grow">{description[0]}</div>

          <Button 
            variant="default" 
            size="sm" 
            onClick={handleClick} 
            className="mt-auto flex justify-center items-center w-full rounded"
          >
            View Project
          </Button>
        </Card>
      </li>

      <li className="mb-4">
        <Card className="h-full font-sans space-y-4 flex flex-col justify-between">
          <div className="flex justify-between mb-4">
            <div className="font-semibold">{name[1]}</div>
            <div>⭐⭐⭐</div>
          </div>

          <div className="flex-grow">{description[1]}</div>

          <Button 
            variant="default" 
            size="sm" 
            onClick={handleClick1} 
            className="mt-auto flex justify-center items-center w-full rounded"
          >
            View Project
          </Button>
        </Card>
      </li>
    </ul>
  );
}
