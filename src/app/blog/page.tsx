import Link from "next/link";

export default function Page() {
    return (
        <div className="text-justify text-2xl mx-20">
            <h1 className="text-center text-6xl py-10">Blog Page</h1>
            <p>
                This is the landing page for all of our blog posts. 
                Click <Link href="/blog/test" className='lg:hover:text-[#007bff] text-blue-400 font-semibold'>here</Link> to 
                see a sample blog post!
            </p>
        </div>
        
    );
}