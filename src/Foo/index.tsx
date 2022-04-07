import React from 'react';

function Foo() {
    const state = {
        name: '',
    };
    return <div>Hello World</div>;
}

export default ({ title }: { title: string }) => <h1>{title}</h1>;
