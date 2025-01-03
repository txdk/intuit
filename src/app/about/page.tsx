export default function Page() {
    return (
        <div className="text-justify text-2xl mx-20">
            <h1 className="text-center text-6xl py-10">About Page</h1>
            <p className="pb-7">
                Intuit is the side project of a few good friends who are passionate
                about education, with the driving mission centred around how we can
                meaningfully improve the learning experience for all. It was born
                out of this desire to create a community and positive attitude around
                education and learning, which we believe is something that can (and 
                should) occur beyond the classroom!
            </p>
            <p className="pb-7">
                Our website is currently a work-in-progress. We hope to eventually
                populate it with a collection of our various thoughts and ideas in
                the form of blog posts, videos, podcast episodes, miscellaneous
                educational resources and more. Our universal theme will center
                around learning as a human endeavour but will predominantly 
                feature topics in mathematics, science and technology as these
                are our personal areas of interest.
            </p>
            <p className="pb-7">
                Intuit is: Wesley Tang, Thomas Kong and Ahnaf Tajwar Tahabub.
            </p>
            <p className="">
                Contact us at
                <a 
                    className="ml-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
                    href="mailto:in2itorg@gmail.com"
                    >
                    in2itorg@gmail.com
                </a>
            </p>
        </div>   
    );
}