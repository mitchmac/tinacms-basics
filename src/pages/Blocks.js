import React from "react";
import {useCMS, useLocalForm} from 'tinacms'
import { LocationFormBlock, CTAFormBlock } from '../fields/Blocks.js';
import Location from '../components/Location.js';
import Cta from '../components/Cta.js';
import NextLink from "../components/NextLink";

export default function Blocks() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    let content = {
        blocks: [
            {headline: 'New Product Launch', buttonText: 'Subscribe now', '_template': 'CTAFormBlock' },
            {city: 'Toronto', lat: 43.70011, lon: -79.4163, zoom: 12,  '_template': 'LocationFormBlock'}
        ],
    };

    const [page, form] = useLocalForm({
        id: 'edit',
        label: 'Edit',

        initialValues: {
            ...content
        },

        fields: [
            {
                label: 'Location Landing Page',
                name: 'blocks',
                component: 'blocks',
                templates: {
                    LocationFormBlock,
                    CTAFormBlock
                },
                description: 'Blocks can be used edit structured content of mixed types. Each can be edited, reordered, or deleted.'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    })

    return (
        <>
            {page.blocks &&
            page.blocks.map(({ _template, ...data }, i) => {
                switch (_template) {
                    case 'LocationFormBlock':
                        return ( <Location key={i} {...data} /> );
                    case 'CTAFormBlock':
                        return ( <Cta key={i} {...data} /> );
                    default:
                        return true
                }
            })}

            <NextLink to="/inline">Can we edit inline?</NextLink>
        </>
    );
}