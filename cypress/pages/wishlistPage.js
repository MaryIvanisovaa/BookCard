
class WishlistPage {
    login(username, password) {
      cy.request({
        method: "POST",
        url: "https://bookcart.azurewebsites.net/api/login",
        body: {
          "username": username,
          "password": password
        }
      }).then((response) => {
        let token = response.body.token;
        let userId = response.body.userDetails.userId;
        cy.log(userId);
        Cypress.env('userId', userId);
        cy.log(Cypress.env('userId'));
        Cypress.env('token', token);
        cy.log(response.status);
      });
    }
  
    deleteWishlistItem() {
      cy.api({
        method: "DELETE",
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${Cypress.env('userId')}`,
        headers: {
          'accept': 'text/plain',
          'Authorization': 'Bearer ' + Cypress.env('token'),
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.eq(200);
      });
    }
  
    getWishlistItem() {
      cy.api({
        method: "GET",
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${Cypress.env('userId')}`,
        headers: {
          'accept': 'text/plain',
          'Authorization': 'Bearer ' + Cypress.env('token'),
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.eq(200);
      });
    }
    postWishlistItem(productId) {
        cy.api({
          method: "POST",
          url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${Cypress.env('userId')}/${productId}`,
          headers: {
            'accept': 'text/plain',
            'Authorization': 'Bearer ' + Cypress.env('token'),
          },
        }).then((response) => {
          cy.log(response.body);
          expect(response.status).to.eq(200);
        });
      }
  }
  
  export default new WishlistPage();
  
  