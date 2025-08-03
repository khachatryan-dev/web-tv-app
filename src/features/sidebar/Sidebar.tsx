'use client';

import {useState} from 'react';
import {
    FiSearch,
    FiHome,
    FiTv,
    FiFilm,
    FiBookmark,
    FiGlobe,
    FiHelpCircle,
    FiLogOut,
} from 'react-icons/fi';
import Image from 'next/image';

const menuItems = [
    {icon: <FiSearch/>, label: 'Search'},
    {icon: <FiHome/>, label: 'Home'},
    {icon: <FiTv/>, label: 'TV Shows'},
    {icon: <FiFilm/>, label: 'Movies'},
    {icon: <FiBookmark/>, label: 'Watch Later'},
];

const bottomItems = [
    {icon: <FiGlobe/>, label: 'Language'},
    {icon: <FiHelpCircle/>, label: 'Get Help'},
    {icon: <FiLogOut/>, label: 'Exit'},
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`fixed inset-0 z-40 pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full w-full bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f80] to-transparent"/>
            </div>

            <aside onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                   className={`fixed top-0 left-0 h-full text-white z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
                <div className={`h-full flex flex-col justify-between py-6 px-4`}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6 overflow-hidden" style={{
                            maxWidth: isOpen ? 250 : 0,
                            opacity: isOpen ? 1 : 0,
                            transition: 'max-width 0.3s ease, opacity 0.3s ease',
                        }}>
                            <Image
                                width={40}
                                height={40}
                                priority
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}images/users/avatar.webp`}
                                alt="User"
                                className="h-[40px] rounded-full object-cover flex-shrink-0"
                            />

                            <div className="whitespace-nowrap">
                                <p className="font-medium">Choi Su-bong</p>
                                <p className="text-xs text-gray-400">@Thanos</p>
                            </div>
                        </div>

                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 px-2 py-2 rounded cursor-pointer hover:bg-white/10 ${
                                    isOpen ? 'justify-start' : 'justify-center'
                                }`}
                            >
                                <span className="text-xl">{item.icon}</span>

                                <span
                                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                                    style={{
                                        maxWidth: isOpen ? 150 : 0,
                                        opacity: isOpen ? 1 : 0,
                                        transition: 'max-width 0.3s ease, opacity 0.3s ease',
                                        display: 'inline-block',
                                    }}
                                >
                  {item.label}
                </span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        {bottomItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 px-2 py-2 rounded cursor-pointer hover:bg-white/10 ${
                                    isOpen ? 'justify-start' : 'justify-center'
                                }`}
                            >
                                <span className="text-xl">{item.icon}</span>

                                <span
                                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                                    style={{
                                        maxWidth: isOpen ? 150 : 0,
                                        opacity: isOpen ? 1 : 0,
                                        transition: 'max-width 0.3s ease, opacity 0.3s ease',
                                        display: 'inline-block',
                                    }}
                                >
                  {item.label}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
