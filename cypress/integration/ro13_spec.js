describe('ROT13 Website', function () {
    it('is reachable and contains a headline', function () {
        cy.visit('./index.html')

        cy.get('h1').should('contain', 'ROT13')
    })

    it('allows to clear the input fields', function () {
        cy.visit('./index.html')

        var input = "abc"
        cy.get('#input_encode').type(input)
        cy.get('#input_decode').type(input)

        cy.get('#clear').click()

        cy.get('#input_encode').should('be.empty')
        cy.get('#input_decode').should('be.empty')
    })


    it('allows to encode text using rot13', function () {
        cy.visit('./index.html')

        var input = "abc 123 xyz"
        var expected = "nop 123 klm"
        cy.get('#input_encode').type(input)

        cy.get('#encode').click()

        cy.get('#input_decode').should('equal', expected)
    })


    it('allows to decode text using rot13', function () {
        cy.visit('./index.html')

        var input = "nop 123 klm"
        var expected = "abc 123 xyz"
        cy.get('#input_decode').type(input)

        cy.get('#decode').click()

        cy.get('#input_encode').should('equal', expected)
    })
})