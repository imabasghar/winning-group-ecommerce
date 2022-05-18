import { ProductDiscountPipe } from './product-discount.pipe';

describe('ProductDiscountPipe', () => {
  const pipe = new ProductDiscountPipe();
  it('should return discount value 100 for price 200 and rrp 300', () => {
    const discount = pipe.transform({price: 200, rrp: 300});
    expect(discount).toBe(100);
  })

  it('should return discount value 50 for price 200 and rrp 250', () => {
    const discount = pipe.transform({price: 200, rrp: 250});
    expect(discount).toBe(50);
  })
});
