/// <reference types="cypress" />

describe('Get Reqres', () => {

    it('Validar LIST USERS retornando 200', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/users?page=2'
        }).then((Response) => {
           expect(response.status).to.eq(200);
        })
    })

    it('Validar body retornando no LIST USERS', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((Response) => {
            let retorno = Response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })


    it('Validar SINGLE USER retornando 200', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/users/2'
        }).then((Response) => {
           expect(response.status).to.eq(200);
        })
    })

    it('Validar body retornando no SINGLE USER', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        }).then((Response) => {
            let retorno = Response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })


    it('Validar SINGLE USER NOT FOUND retornando 404', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then((Response) => {
           expect(response.status).to.eq(404);
        })
    })


    it('Validar LIST <RESOURCE> retornando 200', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/unknown'
        }).then((Response) => {
           expect(response.status).to.eq(200);
        })
    })

    it('Validar body retornando no LIST <RESOURCE>', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown'
        }).then((Response) => {
            let retorno = Response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })


    it('Validar SINGLE <RESOURCE> retornando 200', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/unknown/2'
        }).then((Response) => {
           expect(response.status).to.eq(200);
        })
    })

    it('Validar body retornando no SINGLE <RESOURCE>', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2'
        }).then((Response) => {
            let retorno = Response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })
     

    it('Validar SINGLE <RESOURCE> NOT FOUND retornando 404', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/unknown/23'
        }).then((Response) => {
           expect(response.status).to.eq(404);
        })
    })


    it('Validar DELAYED RESPONSE retornando 200', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/users?delay=3'
        }).then((Response) => {
           expect(response.status).to.eq(200);
        })
    })

    it('Validar body retornando no DELAYED RESPONSE', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3'
        }).then((Response) => {
            let retorno = Response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

})