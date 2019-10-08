describe('ROT13 Website', function () {
    it('allows to encode text using rot13', function () {
        cy.visit('')


        var input = "abc 123 xyz"
        var expected = "nop 123 klm"
        cy.get('#input_encode').type(input)

        cy.get('#encode').click()

        cy.get('#input_decode').should('be', expected)
    })

    it('allows to decode text using rot13', function () {
        cy.visit('')

        var input = "nop 123 klm"
        var expected = "abc 123 xyz"
        cy.get('#input_decode').type(input)

        cy.get('#decode').click()

        cy.get('#input_encode').should('be', expected)
    })
})