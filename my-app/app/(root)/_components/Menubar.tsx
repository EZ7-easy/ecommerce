import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenubarDemo() {
    return (
        <Menubar className={'bg-black border-none xl:space-x-12 sm:flex items-center hidden md:px-0'}>
            <MenubarMenu>
                <MenubarTrigger className="text-lg font-semibold cursor-pointer">Yangi kolleksiyalar</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Nike Air
                    </MenubarItem>
                    <MenubarItem>
                        Air Jordan 1
                    </MenubarItem>
                    <MenubarItem>
                        Air Force
                    </MenubarItem>
                    <MenubarItem>
                        Air Max
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="text-lg font-semibold cursor-pointer">Klassik</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Nike Air
                    </MenubarItem>
                    <MenubarItem>
                        Air Jordan 1
                    </MenubarItem>
                    <MenubarItem>
                        Air Force
                    </MenubarItem>
                    <MenubarItem>
                        Air Max
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="text-lg font-semibold cursor-pointer">Oyoq kiyim</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Nike Air
                    </MenubarItem>
                    <MenubarItem>
                        Air Jordan 1
                    </MenubarItem>
                    <MenubarItem>
                        Air Force
                    </MenubarItem>
                    <MenubarItem>
                        Air Max
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="text-lg font-semibold cursor-pointer">Futbolkalar</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Nike Air
                    </MenubarItem>
                    <MenubarItem>
                        Air Jordan 1
                    </MenubarItem>
                    <MenubarItem>
                        Air Force
                    </MenubarItem>
                    <MenubarItem>
                        Air Max
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}