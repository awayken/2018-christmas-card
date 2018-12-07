import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './Progress';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Progress />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders renders simple, step 5, without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Progress current={4} totalSteps={10} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders renders simple, step 5, without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Progress current={4} showSteps={true} totalSteps={10} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
