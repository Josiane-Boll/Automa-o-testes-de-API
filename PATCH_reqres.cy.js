/// <reference types="cypress" />

it('Validar UPDATE retornando 200', () => {

    const dados = {
        
        "name": "morpheus",
        "job": "zion resident"
    }

    cy.request({
        //payload
        method: 'PATCH',
        url:'https://reqres.in/api/users/2'
        .body= dados,
        failOnStatusCode: false
    }).then((Response) => {

        // Validação de Status code
       expect(response.status).to.eq(200);

       //Validação de body
       let retorno = response.body
       cy.log(JSON.stringify(retorno, null, 2))

       //Validação do token
       expect (retorno.updatedAt).to.eq("2024-05-07T15:16:28.320Z")
    })
})