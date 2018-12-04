import React from 'react';
import ReactDOM from 'react-dom';
import SplitScreen from './SplitScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SplitScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 1 child without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SplitScreen>
      <p>Panel 1</p>
    </SplitScreen>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 2 children without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SplitScreen>
      <p>Panel 1</p>
      <p>Panel 2</p>
    </SplitScreen>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders more children without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SplitScreen>
      <p>Panel 1</p>
      <p>Panel 2</p>
      <p>Panel 3</p>
      <p>Panel 4</p>
    </SplitScreen>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
