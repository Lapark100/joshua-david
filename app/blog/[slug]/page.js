import { notFound } from "next/navigation"
import { getPost as getPostNotCached, getPosts} from "@/lib/post"
import { cache } from "react"
import Link from "next/link"
const getPost = cache(
        async (slug) => await getPostNotCached(slug)
)

export async function generateStaticParams() {
const {posts} = await getPosts({limit: 10000})
return posts.map(post => ({
        slug: post.slug
}) )
}

export async function generateMetadata({ params }) {

        try {
                const {frontmatter} = await getPost(params.slug)
                return frontmatter
        } catch (e) {
                
        }

}

export default async function BlogPage({ params }) {

        let post

        try {
        post = await getPost(params.slug)
        
        } catch (error) {
                notFound()
        }

        return (<article className="prose dark:prose-invert w-full">
                <div className="flex space-x-2 mb-8">
                {post.frontmatter.tags.map(tag => <Link href={`/blog/?tags=${tag}`} key={tag} className="dark:text-neonGreen text-neonGreen">#{tag}</Link>)}
                </div>
                {post.content}
        </article>)
}