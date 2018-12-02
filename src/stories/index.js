import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.css';
import App from '../App';
import SplitScreen from '../SplitScreen';

storiesOf('App', module).add('renders', () => <App />);

storiesOf("SplitScreen", module)
  .add("renders 2 children", () => (
    <SplitScreen>
      <p>Panel 1</p>
      <p>Panel 2</p>
    </SplitScreen>
  ))
  .add("renders 1 child", () => (
    <SplitScreen>
      <p>Panel 1</p>
    </SplitScreen>
  ))
  .add("renders more children", () => (
    <SplitScreen>
      <p>Panel 1</p>
      <p>Panel 2</p>
      <p>Panel 3</p>
      <p>Panel 4</p>
    </SplitScreen>
  ));
