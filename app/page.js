import HeroSection from "@/components/hero";
import { getPosts } from "@/lib/post";



export default async function Home() {
    const {posts} = await getPosts({
        newest: true, limit: 3
    })
    
    return (
        <>
            <HeroSection />
            
           <hr/>
           
        </>


    )
}