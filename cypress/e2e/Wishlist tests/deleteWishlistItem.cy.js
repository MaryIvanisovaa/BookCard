import WishlistPage from '../../pages/wishlistPage';

describe('Wishlist spec', () => {
  before(() => {
    WishlistPage.login("Maryyyyyy", "123123Mariia");
  });

  it('Delete Wishlist item', () => {
    WishlistPage.deleteWishlistItem();
  });
});
