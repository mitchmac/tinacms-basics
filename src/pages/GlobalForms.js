import React from "react";
import {useCMS, useLocalForm, useGlobalForm } from 'tinacms'

export default function GlobalForms() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    const [_, globalForm] = useGlobalForm({
        id: 'site',
        label: 'Edit Site Settings',

        initialValues: {
            siteTitle: 'Hello Tina'
        },

        fields: [
            {
                name: 'text',
                label: 'Site Title',
                component: 'text'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    });

    let content = {
        text: "There's a menu in the sidebar now, we can access global forms there."
    };

    const [page, form] = useLocalForm({
        id: 'edit',
        label: 'Edit',

        initialValues: {
            ...content
        },

        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'textarea'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    });

    return (
        <>
            <p>{page.text}</p>
        </>
    );
}