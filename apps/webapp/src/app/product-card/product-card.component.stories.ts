import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ProductCardModule } from './product-card.module';
import { ProductCardComponent } from './product-card.component';
import { ProductStatus } from '../product/ProductStatus';


export default {
  title: 'Product/Card',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ProductCardModule],
    }),
    componentWrapperDecorator(story => `<div style="background-color: grey; height: 800px; padding: 8px; width: 280px;">${story}</div>`),
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


export const ShortName = Template.bind({});

ShortName.args = {
  product: {
    sku: "671695659-X",
    name: "Veal Inside - Provimi",
    price: 166,
    rrp: 223,
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    productStatus: ProductStatus.AvailableForCart,
  },
};

export const LongName = Template.bind({});

LongName.args = {
  product: {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    name: "Appetizer - Mini Egg Roll, Shrimp",
    price: 113,
    rrp: 222,
    sku: "809687564-7",
    productStatus: ProductStatus.AvailableForCart,
  },
};

export const ProductInCart = Template.bind({});

ProductInCart.args = {
  product: {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    name: "Appetizer - Mini Egg Roll, Shrimp",
    price: 113,
    rrp: 222,
    sku: "809687564-7",
    productStatus: ProductStatus.InCart,
  },
};
