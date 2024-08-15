"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [keyword, setKeyword] = useState('');
    const router = useRouter();

    const menu = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Sign In",
            link: "/login"
        }
    ];

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`);
            setKeyword('');
        }
    };

    return (
        <div className='flex items-center gap-7 h-20 p-5'>
            <Link href="/" className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>
                Movie App
            </Link>
            <div className='flex flex-1 items-center gap-2 p-3 border rounded-lg'>
                <input
                    value={keyword}
                    onKeyDown={searchFunc}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder='Arama Yapınız 📽️'
                    className='outline-none bg-transparent flex-1'
                    type="text"
                />
                <BiSearch size={25} />
            </div>
            <ThemeComp />
            {menu.map((mn, i) => (
                <MenuItem mn={mn} key={i} />
            ))}
        </div>
    );
};

export default Header;
