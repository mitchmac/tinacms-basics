import React from "react";
import { Button } from 'bloomer';

export default function Cta(props) {

    return (
        <div style={{
            backgroundColor: '#f2fff1',
            marginTop: 20,
            marginBottom: 20,
            padding: 20,
            borderRadius: 10
        }}>
            <h3 className="title is-3">{props.headline}</h3>
            <Button isColor="primary">{props.buttonText}</Button>
        </div>
    );
}
