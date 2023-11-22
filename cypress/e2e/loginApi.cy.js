import { loginViaApi, token, login, setLocalStorageForLogin } from "../models/APIHelpers"

describe('Login Via API', () => {
  it('Login to account and check that user was logged in', () => {
  loginViaApi();
  setLocalStorageForLogin()
  cy.get('.mat-button-wrapper').eq(3).should('contain',' Maryyyyyy ')
})
})
