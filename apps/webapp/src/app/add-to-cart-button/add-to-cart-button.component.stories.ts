import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AddToCartButtonComponent } from './add-to-cart-button.component';
import { AddToCartButtonModule } from './add-to-cart-button.module';

export default {
  title: 'Product/Add To Cart Button',
  component: AddToCartButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AddToCartButtonModule],
    })
  ]
} as Meta;

const actionsData = {
  addToCart: action('addToCart'),
  removeFromCart: action('removeFromCart'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    ...actionsData
  },
});


export const Initial = Template.bind({});

Initial.args = {
};

export const AddedToCart = Template.bind({});

AddedToCart.args = {
  isInCart: true,
};
