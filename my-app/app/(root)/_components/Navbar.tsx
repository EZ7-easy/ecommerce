"use client"

import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import {SignInButton, UserButton} from "@clerk/nextjs";
import Mobile from "@/app/(root)/_components/mobile";
import Image from "next/image";
import MenubarDemo from "@/app/(root)/_components/Menubar";

export function Navbar() {
    return (
        <div>
            <div className="bg-black text-white py-[20px]">
                <div className="flex items-center justify-between md:container mx-auto px-6 md:px-0">
                    <Image src={'/logo/azara.jpg'} alt={'logo'} width={150} height={900} className=" text-4xl max-sm:mt-2 my-auto mb-3"/>
                    <div className={'max-md:hidden md:hidden'}>
                        <MenubarDemo/>
                    </div>

                    <div className="flex gap-2">
                        <div className={'flex mr-4 max-sm:mr-0 max-sm:mt-[0.5px] max-sm:gap-0 h-8 w-8 bg-gray-200 rounded-full'}>
                            <CiSearch className={'text-2xl text-center mt-1 ml-1 text-black max-sm:mt-1 max-md:mt-1'}/>
                        </div>
                        <div>
                            <SignInButton>
                                <FaUser className={'mt-1 max-sm:hidden mr-3 text-2xl max-sm:mt-2'}/>
                            </SignInButton>
                        </div>
                        <div className="flex items-center max-sm:hidden">
                            <CiHeart className={'text-3xl mb-[7px]'}/>
                        </div>
                        <div>
                            <CiShoppingCart className={'max-sm:hidden text-3xl mt-[1px] max-md:mt-1'}/>
                        </div>
                        <div className={'mt-1 max-sm:ml-0 ml-2'}>
                            <UserButton/>
                        </div>
                        <Mobile/>
                    </div>
                </div>
            </div>
        </div>
    )
}