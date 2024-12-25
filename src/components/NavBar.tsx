import Link from "next/link";
import { PageLink } from "./Header";

interface NavBarProps {
    links: Array<PageLink>;
}

export default function NavBar( { links } : NavBarProps) {
    return(
       <ul
            className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            {
                links.map((link) => {
                    return (
                        <li className='max-lg:border-b max-lg:py-3 px-3' key={link.pageName}>
                            <Link 
                                href={link.endpoint}
                                className='lg:hover:text-[#007bff] text-slate-200 block font-semibold text-[15px]'
                                >{link.pageName}
                            </Link>
                        </li>
                    );
                })
            }
        </ul> 
    );
}