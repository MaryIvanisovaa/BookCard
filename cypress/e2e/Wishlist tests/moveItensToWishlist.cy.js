import  WishlistPage  from '../../pages/wishlistPage';

describe('Wishlist spec', () => {
  let productId = 4;
  before(() => {
    WishlistPage.login("Maryyyyyy", "123123Mariia");
  });

  it('Post Wishlist item', () => {
    WishlistPage.postWishlistItem(productId);
  });
});
