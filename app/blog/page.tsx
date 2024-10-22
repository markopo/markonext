import {Post} from "@/app/models/Post";


export default async function BlogPage() {
    const data = await fetch('https://api.vercel.app/blog');
    const posts = await data.json() as Post[];


    return (<div>
        <div>
            {posts.map((post) => (
                <div className="p-2 border-solid border border-sky-900 m-10 rounded" key={post.id}>
                    <h3 className="font-bold">{post.title}</h3>
                    <div className="p-1 flex flex-col">
                        <i>{post.author}</i>
                        <i>{post.date}</i>
                    </div>
                    <p className="p-1">{post.content}</p>
                </div>
            ))}
        </div>
    </div>);
}