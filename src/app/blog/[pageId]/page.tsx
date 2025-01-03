import { POST_DIRECTORY } from "@/constants/AppConstants";
import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import markdown from "remark-parse";
import math from 'remark-math';
import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import './post.css';
import 'katex/dist/katex.min.css';

interface PostParams {
    pageId: string;
}

interface PostPageProps {
    params: Promise<PostParams>
}

/**
 * Get list of filenames in the public/posts directory
 * @returns 
 */
export async function generateStaticParams() {
    const files = await readdir(POST_DIRECTORY);
    const posts = await Promise.all(files);

    return posts.map((post) => ({
        pageId: post.replace(".md", "")
    }));
}

/**
 * Fetch the file contents of the blog post with the specified id and converts it to html
 * @param id 
 * @returns 
 */
async function getPostData(id: string): Promise<string> {
    const fileContents = readFileSync(`${POST_DIRECTORY}${id}.md`, 'utf8');
    const processedContent = await unified()
        .use(markdown)
        .use(math)
        .use(remarkRehype)
        .use(rehypeDocument)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(fileContents);
    const contentHtml = processedContent.toString();

    return contentHtml;
}

export default async function Page( { params }: PostPageProps ) {
    const response = await params;
    const pageId = response.pageId;
    const pageHtml = await getPostData(pageId);

    return (
        <div className="text-justify text-2xl mx-20">
            <div dangerouslySetInnerHTML={{__html: pageHtml}} />
        </div>
    );
}