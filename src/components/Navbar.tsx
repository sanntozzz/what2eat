import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useEscape } from 'hooks'
import { ForkKnife, List, X } from 'phosphor-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navbarLinks = [
    { text: 'Home', href: '/' },
    { text: 'Meal', href: '/meal' },
]

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    return (
        <>
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                <Link to="/" className="flex  items-center space-x-1">
                    <span className="rounded-full bg-orange-400 p-1.5 text-xl text-white">
                        <ForkKnife weight="bold" />
                    </span>
                    <span className="select-none text-xl font-bold uppercase">
                        What2Eat
                    </span>
                </Link>

                <div className="hidden items-center space-x-6 text-xl lg:flex">
                    {navbarLinks.map((navItem, index) => {
                        return (
                            <Link
                                key={index}
                                to={navItem.href}
                                className={clsx(
                                    location.pathname === navItem.href &&
                                        'text-orange-400 underline ',
                                    'font-bold uppercase hover:text-orange-400 hover:underline'
                                )}
                            >
                                {navItem.text}
                            </Link>
                        )
                    })}
                </div>
                <List
                    onClick={() => setMenuOpen(true)}
                    className="cursor-pointer text-3xl lg:hidden"
                    weight="bold"
                />
            </div>

            <OffsideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    )
}

function OffsideMenu({
    menuOpen,
    setMenuOpen,
}: {
    menuOpen: boolean
    setMenuOpen: any
}) {
    if (typeof window !== 'undefined') {
        if (menuOpen) {
            window.document.body.style.overflow = 'hidden'
        } else {
            window.document.body.style.overflow = 'auto'
        }
    }
    useEscape(() => setMenuOpen(false))

    return (
        <>
            <Transition show={menuOpen}>
                <Transition.Child
                    enter="transition-all duration-500"
                    enterTo="bg-neutral-900/75"
                    leave="transition-all 500"
                    leaveFrom="bg-neutral-900/75"
                    className="fixed inset-0 z-10 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                />
                <Transition.Child
                    enter="transition-all duration-500"
                    enterFrom="-right-full"
                    enterTo="right-0"
                    leave="transition-all duration-500"
                    leaveFrom="right-0"
                    leaveTo="-right-full"
                    className="fixed top-0 z-50 h-full w-full overflow-y-auto bg-orange-400 px-4 md:max-w-md"
                >
                    <div className="flex h-full flex-col items-center justify-center space-y-8 py-4">
                        <X
                            weight="bold"
                            className="ml-auto cursor-pointer text-4xl text-white"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div className="flex h-full flex-col items-center justify-center space-y-8 py-4">
                            {navbarLinks.map((navItem, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={navItem.href}
                                        className={clsx(
                                            location.pathname ===
                                                navItem.href && 'underline',
                                            'block text-2xl font-bold uppercase text-white duration-150 hover:underline'
                                        )}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {navItem.text}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </>
    )
}
