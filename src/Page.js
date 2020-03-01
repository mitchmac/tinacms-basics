import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useCMS, useLocalForm } from 'tinacms';
import { ContentBlock } from './Blocks';

export default function Page() {
    useCMS();

    let rawPage = {
        title: 'This is a page title',
        markdownBody: 'This is a page body',
        blocks: [
            {content: 'This is block 1!', '_template': 'ContentBlock'},
            {content: 'This is block 2!', '_template': 'ContentBlock'}
        ],
        publish: true,
    };

    const [post, form] = useLocalForm({
        id: 'foo',
        label: 'Edit Page',

        initialValues: {
            ...rawPage
        },

        fields: [
            {
                name: 'title',
                label: 'Title',
                component: 'text'
            },
            {
                name: 'markdownBody',
                label: 'Body',
                component: 'markdown'
            },
            {
                label: 'Blocks',
                name: 'blocks',
                component: 'blocks',
                templates: {
                    ContentBlock,
                },
            },
            {
                name: 'fontcolor',
                component: 'color',
                label: 'Font Color',
                description: 'Edit the font color here',
                colorFormat: 'hex',
                colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
                widget: 'sketch',
            },
            {
                name: 'publish',
                component: 'toggle',
                label: 'Publish this page?',
            },
        ],

        onSubmit(data, form) {
            alert('Form submitted!');
        }
    });

    return (
        <>
            <div style={{color: post.fontcolor}}>
                <h2>{post.title}</h2>
                <ReactMarkdown source={post.markdownBody}/>
                <h3>Blocks</h3>

                {post.blocks &&
                post.blocks.map(({ _template, ...data }, i) => {
                    switch (_template) {
                        case 'ContentBlock':
                            return ( <div>{data.content}</div> );
                            break;
                        default:
                            return true
                    }
                })}
            </div>

            <div style={{fontSize: 16, marginTop: 60, borderTop: '1px dashed'}}>
                <p>Hi! This is a simple static web page built with React to demonstrate <a href='https://tinacms.org/docs/fields/text' target='_blank' rel='noopener noreferrer'>TinaCMS fields</a>.</p>
                <p>You can find the code for this page at <a href='https://github.com/mitchmac/tinacms-fields-cra/blob/master/src/Page.js' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
            </div>
        </>
    );
}