import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {SignInButton, SignOutButton, UserButton} from "@clerk/nextjs";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {HiUser} from "react-icons/hi";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import {className} from "postcss-selector-parser";

const Mobile = () => {
    const pathName = usePathname()

    return (
            <Sheet>
                <SheetTrigger asChild className={'flex text-2xl'}>
                    <Button size={'icon'} variant={'ghost'}>
                        <GiHamburgerMenu/>
                    </Button>
                </SheetTrigger>
                <SheetContent side={'bottom'} className={'rounded-t-3xl '}>
                    <div className={'md:container justify-between flex'}>
                        <div className={'w-[80px] mx-auto'}>
                            <div className={'text-center'}>
                                <GiHamburgerMenu className={'mx-auto text-4xl mb-3'}/>
                                <h1 className={'mt-2 text-md md:text-2xl'}>Kataloglar</h1>
                            </div>
                        </div>
                        <div className={'w-[80px] mx-auto'}>
                            <div className={'text-center'}>
                                <CiShoppingCart className={'mx-auto text-4xl mb-3'}/>
                                <h1 className={'mt-2 text-md md:text-2xl'}>Savat</h1>
                            </div>
                        </div>
                        <div className={'w-[80px] mx-auto'}>
                            <div className={'text-center'}>
                                    <CiHeart className={'mx-auto text-4xl mb-3'}/>
                                <h1 className={'mt-2 text-md md:text-2xl'}>Tanlangan</h1>
                            </div>
                        </div>
                        <div className={'w-[80px] mx-auto'}>
                            <div className={'text-center'}>
                                <Menubar className={'border-none'}>
                                    <MenubarMenu>
                                        <MenubarTrigger  className={'mx-auto text-4xl p-2'}><HiUser/></MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem>
                                                <SignInButton/>
                                            </MenubarItem>
                                            <MenubarItem>
                                                <SignOutButton/>
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                                <h1 className={'mt-2 text-md md:text-2xl'}>Profil</h1>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
    )
}

export default Mobile