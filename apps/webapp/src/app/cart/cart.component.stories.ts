import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CartComponent } from '../cart/cart.component';
import { CartModule } from '../cart/cart.module';

export default {
  title: 'Header/Cart',
  component: CartComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CartModule],
    })
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const EmptyCart = Template.bind({});

EmptyCart.args = {

};

export const FourItemsInCart = Template.bind({});

FourItemsInCart.args = {
  numberOfItemsInCart: 4,
};

export const TwentyFiveItemsInCart = Template.bind({});

TwentyFiveItemsInCart.args = {
  numberOfItemsInCart: 25,
};

export const HundredAndFiveItemsInCart = Template.bind({});

HundredAndFiveItemsInCart.args = {
  numberOfItemsInCart: 105,
};
