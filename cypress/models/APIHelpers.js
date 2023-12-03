
// create account
export class CreateUserHelper {
  signupUser(user) {
    cy.api({
      method: 'POST',
      url: 'https://bookcart.azurewebsites.net/api/User',
      body: user
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
}



// login to account via cypress.env
export let token;
export function loginViaApi(){

const username = Cypress.env('username');
const password = Cypress.env('password')

cy.api({
    method: "POST",
    url: "https://bookcart.azurewebsites.net/api/login",
    body: {
        username: username,
        password: password,
      }
}).then((response)=>{
    token = response.body.token
cy.log(response),
cy.log(response.body.token),
cy.log(response.status)
})
}

export function setLocalStorageForLogin(){
    cy.visit ('https://bookcart.azurewebsites.net/login', {
        onBeforeLoad(content) {
          content.window.localStorage.setItem('authToken', token)
        }
    })
}



