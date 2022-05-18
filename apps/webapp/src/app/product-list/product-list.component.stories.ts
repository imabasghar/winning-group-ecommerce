import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ProductListModule } from './product-list.module';
import { ProductListComponent } from './product-list.component';
import { ProductStatus } from '../product/ProductStatus';


export default {
  title: 'Product/List',
  component: ProductListComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ProductListModule],
    }),
    componentWrapperDecorator(story => `<div style="background-color: lightgrey;">${story}</div>`),
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


export const FourProducts = Template.bind({});

FourProducts.args = {
  products: [
    {
      "sku": "671695659-X",
      "name": "Veal Inside - Provimi",
      "price": 166,
      "rrp": 223,
      "image": "http://dummyimage.com/300x300.png/ff4444/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "740799661-X",
      "name": "Milk - Condensed",
      "price": 165,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "296764728-4",
      "name": "Juice - Ocean Spray Kiwi",
      "price": 131,
      "rrp": 222,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "910412149-X",
      "name": "Island Oasis - Banana Daiquiri",
      "price": 160,
      "rrp": 232,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "039035536-4",
      "name": "Tortillas - Flour, 8",
      "price": 83,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
  ]
};

export const FiveProducts = Template.bind({});

FiveProducts.args = {
  products: [
    {
      "sku": "671695659-X",
      "name": "Veal Inside - Provimi",
      "price": 166,
      "rrp": 223,
      "image": "http://dummyimage.com/300x300.png/ff4444/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "740799661-X",
      "name": "Milk - Condensed",
      "price": 165,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "296764728-4",
      "name": "Juice - Ocean Spray Kiwi",
      "price": 131,
      "rrp": 222,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "910412149-X",
      "name": "Island Oasis - Banana Daiquiri",
      "price": 160,
      "rrp": 232,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "039035536-4",
      "name": "Tortillas - Flour, 8",
      "price": 83,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "841935264-0",
      "name": "Champagne - Brights, Dry",
      "price": 121,
      "rrp": 238,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
  ]
};

export const TenProducts = Template.bind({});

TenProducts.args = {
  products: [
    {
      "sku": "671695659-X",
      "name": "Veal Inside - Provimi",
      "price": 166,
      "rrp": 223,
      "image": "http://dummyimage.com/300x300.png/ff4444/ffffff",
      productStatus: ProductStatus.InCart,
    },
    {
      "sku": "740799661-X",
      "name": "Milk - Condensed",
      "price": 165,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "296764728-4",
      "name": "Juice - Ocean Spray Kiwi",
      "price": 131,
      "rrp": 222,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "910412149-X",
      "name": "Island Oasis - Banana Daiquiri",
      "price": 160,
      "rrp": 232,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "039035536-4",
      "name": "Tortillas - Flour, 8",
      "price": 83,
      "rrp": 220,
      "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "841935264-0",
      "name": "Champagne - Brights, Dry",
      "price": 121,
      "rrp": 238,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "848338752-2",
      "name": "Sobe - Green Tea",
      "price": 119,
      "rrp": 230,
      "image": "http://dummyimage.com/300x300.png/dddddd/000000",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "214359502-6",
      "name": "Energy Drink - Franks Pineapple",
      "price": 119,
      "rrp": 236,
      "image": "http://dummyimage.com/300x300.png/ff4444/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "522567481-X",
      "name": "Red Currant Jelly",
      "price": 160,
      "rrp": 226,
      "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
    {
      "sku": "143876903-2",
      "name": "Chinese Foods - Chicken",
      "price": 205,
      "rrp": 221,
      "image": "http://dummyimage.com/300x300.png/cc0000/ffffff",
      productStatus: ProductStatus.AvailableForCart,
    },
  ]
};

export const NoProducts = Template.bind({});

NoProducts.args = {
  products: []
};
