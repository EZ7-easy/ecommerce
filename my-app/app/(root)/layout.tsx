import type { ChildProps } from '@/types'
import {Navbar} from "@/app/(root)/_components/Navbar";
import Footer from "@/app/(root)/_components/Footer";

const Layout = async ({ children } :ChildProps) => {
    return (
        <div className={"overflow-x-hidden"}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )};

export default Layout;
