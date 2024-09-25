import Card from "@/components/card";
import { name, description } from "@/lib/const";
export default function ProjectList() {
    
      return (
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="mb-4">
            <Card className='h-full font-sans'>
              <div className="flex justify-between mb-4">
              <div className="font-semibold">{name[0]}</div>
              <div>⭐</div>
              </div>
            
            <div>{description[0]}</div>
            </Card>
          </li>
        
      </ul>
      )
      
}

