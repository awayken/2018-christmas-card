import React from 'react';
import ReactDOM from 'react-dom';
import Reward, { getEmbedSrc } from './Reward';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Reward />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders pending', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Reward show={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders preamble', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Reward show={false} preamble={<p>Preamble</p>} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders reward', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Reward image="https://placehold.it/800x600" show={true} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders reward with children', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Reward image="https://placehold.it/800x600" show={true}>
            <p>This year we saw this cool video!</p>
        </Reward>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('gets embed src from video', () => {
    expect(getEmbedSrc()).toBe('');
    expect(getEmbedSrc('fake url')).toBe('fake url');
    expect(getEmbedSrc('https://www.youtube.com/watch?v=6BR1TzU0xaE')).toBe(
        'https://www.youtube.com/embed/6BR1TzU0xaE'
    );
    expect(getEmbedSrc('https://youtu.be/6BR1TzU0xaE')).toBe(
        'https://www.youtube.com/embed/6BR1TzU0xaE'
    );
});
