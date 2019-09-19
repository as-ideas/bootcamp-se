describe('ROT13 Website', function () {
    it('is reachable and contains a headline', function () {
        cy.visit('')

        cy.get('h1').should('contain', 'ROT13')
    })

    it('allows to clear the input fields', function () {
        cy.visit('')

        var input = "abc"
        cy.get('#input_encode').type(input)
        cy.get('#input_decode').type(input)

        cy.get('#clear').click()

        cy.get('#input_encode').should('be.empty')
        cy.get('#input_decode').should('be.empty')
    })
})