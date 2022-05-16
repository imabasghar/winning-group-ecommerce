import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';
import { IHeaderItem } from './HeaderItem';
import { action } from '@storybook/addon-actions';

export default {
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HeaderModule],
    })
  ]
} as Meta;

const actionsData = {
  headerItemClick: action('headerItemClick'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    ...actionsData
  },
});

const headerItemList: IHeaderItem[] = [
  {
    label: 'Product List',
    path: '/product-list',
  },
  {
    label: 'Item 2',
    path: '/yet-another-item',
  },
]

export const HomeActive = Template.bind({});

HomeActive.args = {
  headerItemList,
  numberOfItemsInCart: 10,
  activeHeaderItemPath: '/home',
};

export const ProductListActive = Template.bind({});
ProductListActive.args = {
  headerItemList,
  numberOfItemsInCart: 5,
  activeHeaderItemPath: '/product-list',
};

export const CartActive = Template.bind({});
CartActive.args = {
  headerItemList,
  numberOfItemsInCart: 10,
  activeHeaderItemPath: '/cart',
};
