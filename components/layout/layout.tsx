import React from "react";
import Head from "next/head";
import {Children} from "../../types/types";
import Header from "../header/header";

const Layout: React.FunctionComponent<Children> = ({children}) => {
    return (
        <>
            <Head>
                <title>Test assignment application</title>
            </Head>
            <Header />
            {children}
        </>
    )
}
export default Layout;