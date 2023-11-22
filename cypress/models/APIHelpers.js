export let token;
export function loginViaApi(){

const username = Cypress.env('username');
const password = Cypress.env('password')

cy.request({
    method: "POST",
    url: "https://bookcart.azurewebsites.net/api/login",
    headers: {
        Authorization: `Bearer ${token}`,
      },
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