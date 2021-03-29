import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// export default {
//   title: 'Storybook Knobs',
//   decorators: [withKnobs],
// };

// export const withAButton = ({ slice }) => (
//   <FoldSection slice={ slice }/>
// );

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
});
