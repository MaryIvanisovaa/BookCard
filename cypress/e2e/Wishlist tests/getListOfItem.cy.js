import WishlistPage from '../../pages/wishlistPage';
describe('Wishlist spec', () => {
  before(() => {
    WishlistPage.login("Maryyyyyy", "123123Mariia");
  });

  it('Get Wishlist item', () => {
    WishlistPage.getWishlistItem();
  });
});