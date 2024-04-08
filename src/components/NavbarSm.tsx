'use client'


import Link from 'next/link';
import ThemeChanger from './ThemeChanger';
import { usePathname } from 'next/navigation'


const NavbarSm = () => {

    const pathname = usePathname()

    return (

        <nav className="sm:hidden flex justify-center items-center bg-[#F5F5F7] dark:bg-[#080708] w-screen bottom-0 fixed pt-2 pb-5 font-medium text-base">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">
                        <span className={`text-[12px] ${pathname == "/" ? 'text-black font-bold dark:text-white' : ''}`} >Me</span>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <span className={`text-[12px] ${pathname == "/skills" ? 'text-black font-bold dark:text-white' : ''}`}>Skills</span>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <span className={`text-[12px] ${pathname == "/services" ? 'text-black font-bold dark:text-white' : ''}`}>Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <span className={`text-[12px] ${pathname == "/portfolio" ? 'text-black font-bold dark:text-white' : ''}`}>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className={`text-[12px] ${pathname == "/contact" ? 'text-black font-bold dark:text-white' : ''}`}>Contact</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span className={`text-[12px] ${pathname == "/blog" ? 'text-black font-bold dark:text-white' : ''}`}>blog</span>
                    </Link>
                </li>
                <li>
                    <ThemeChanger />
                </li>
            </ul>

        </nav>
    );
};

export default NavbarSm;
