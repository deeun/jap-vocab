'use client'
import React from 'react';
import Loading from "@/app/components/Loading/loading";
import Header from "@/app/components/Header/header";
import {useSelector} from "react-redux";
import Warning from "@/app/components/Warning/warning"

function LayoutWrapper({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const loading = useSelector(state => state.vocabReducer.loading)
    const error = useSelector(state => state.vocabReducer.isError)

    return (
        <div>
            <Header/>
            {loading && <Loading />}
            {error.state && error.contents === 'BLOCK PAGE' && <Warning />}
            {children}
        </div>
    );
}

export default LayoutWrapper;
