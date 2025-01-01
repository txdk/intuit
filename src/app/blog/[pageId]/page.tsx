interface PostParams {
    pageId: string;
}

interface PostPageProps {
    params: Promise<PostParams>
}

export async function generateStaticParams() {
    const posts: Array<PostParams> = [
        {
            pageId: 'test'
        }
    ];

    return posts.map((post) => ({
        pageId: post.pageId
    }));
}

export default async function Page( { params }: PostPageProps ) {
    const response = await params;
    const pageId = response.pageId;

    return (
        <div className="text-justify text-2xl mx-20">
            <h1 className="text-center text-6xl py-10">Page id: {pageId}</h1>
            <p>This is a blog post.</p>
        </div>
    );
}