import React from "react";
import { useCMS } from "tinacms";
import NextLink from "../components/NextLink.js";

export default function AddingTina() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    return (
        <>
            <p>See the icon on the left?</p>
            <p>Tina is an open-source content editing toolkit. And we've added it to this page.</p>
            <NextLink to="/forms">Cool, let's add a form!</NextLink>
        </>
    );
}