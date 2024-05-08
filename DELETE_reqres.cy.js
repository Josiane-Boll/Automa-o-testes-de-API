/// <reference types="cypress" />

it('Validar DELETE retornando 204', () => {
  cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
  }).then((Response) => {
     expect(response.status).to.eq(204);
  })
})