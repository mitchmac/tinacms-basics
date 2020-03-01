import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useCMS} from "tinacms";
import NextLink from "../components/NextLink";


export default function Home() {
    const cms = useCMS();
    cms.sidebar.hidden = true;

    return (
        <>
            <p>Hi! This is a simple page created with React.</p>
            <p>Wouldn't it be neat if we could edit pages like this in real time?</p>
            <NextLink to="/adding-tina">Yeah!</NextLink>
        </>
    );
}