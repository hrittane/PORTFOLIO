'use client'


import Link from 'next/link';
import ThemeChanger from './ThemeChanger';
import { usePathname } from 'next/navigation'

const NavbarLg = () => {

    const pathname = usePathname()

    return (

        <nav className="hidden sm:flex justify-center items-center top-0 absolute w-screen p-5 font-medium text-base">

            {/* <nav className="flex justify-center items-center text-black dark:text-white top-0 absolute w-screen p-5 "> */}

            <ul className="flex space-x-4">
                <li>
                    <Link href="/">
                        <span className={`text-[12px] ${pathname == "/" ? 'font-bold text-black dark:text-white ' : ''}`} >Me</span>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <span className={`text-[12px]  ${pathname == "/skills" ? 'font-bold text-black dark:text-white ' : ''}`}>Skills</span>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <span className={`text-[12px]  ${pathname == "/services" ? 'font-bold text-black dark:text-white ' : ''}`}>Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <span className={`text-[12px]  ${pathname == "/portfolio" ? 'font-bold text-black dark:text-white ' : ''}`}>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className={`text-[12px]  ${pathname == "/contact" ? 'font-bold text-black dark:text-white ' : ''}`}>Contact</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span className={`text-[12px]  ${pathname == "/blog" ? 'font-bold text-black dark:text-white ' : ''}`}>blog</span>
                    </Link>
                </li>
                <li>
                    <ThemeChanger />
                </li>
            </ul>

        </nav>
    );
};

export default NavbarLg;
