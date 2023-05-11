describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Fills the form name', () => {
        cy.get('#name')
            .type("John Doe").should("have.value", "John Doe")
        cy.get('#email')
            .type("email@example.com").should("have.value", "email@example.com")
        cy.get('#phone')
            .type("123456789").should("have.value", "123456789")
    })

    it('submit a form', () => {
        cy.get('#name')
            .type("John Doe")
        cy.get('#email')
            .type("email@example.com")
        cy.get('#phone')
            .type("1234567890")

        cy.get('#slideButton').click()
        cy.contains("Select your plan").should("have.class", "text-primary-marineBlue")
    })

    it('Verify second slide', () => {
        cy.get('#name')
            .type("John Doe")
        cy.get('#email')
            .type("email@example.com")
        cy.get('#phone')
            .type("1234567890")

        cy.get('#slideButton').click()

        cy.get('#Arcade').click().should("have.class", "border-primary-purplishBlue")
        cy.get('#Advanced').click().should("have.class", "border-primary-purplishBlue")
        cy.get('#Pro').click().should("have.class", "border-primary-purplishBlue")
        cy.get('#customSlider').click().should("have.class", "peer-checked:bg-primary-marineBlue")
        // .not('[disabled]').check().should("be.checked")

    })

    it('Verify third slide', () => {
        cy.get('#name')
            .type("John Doe")
        cy.get('#email')
            .type("email@example.com")
        cy.get('#phone')
            .type("1234567890")

        cy.get('#slideButton').click()
        cy.get('#slideButton').click()


        cy.get("#onlineservice").not('[disabled]').check().should('be.checked')
        cy.get("#largerstorage").not('[disabled]').check().should('be.checked')
        cy.get("#custom").not('[disabled]').check().should('be.checked')
    })

    it('Verify final slide', () => {
        cy.get('#name')
            .type("John Doe")
        cy.get('#email')
            .type("email@example.com")
        cy.get('#phone')
            .type("1234567890")

        cy.get('#slideButton').click()
        cy.get('#Advanced').click()
        cy.get('#customSlider').click()

        cy.get('#slideButton').click()
        cy.get("#onlineservice").not('[disabled]').check()
        cy.get("#largerstorage").not('[disabled]').check()
        cy.get("#custom").not('[disabled]').check()

        cy.get('#slideButton').click()

        cy.get("#totalAmount").should(($lis) => {
            expect($lis).to.contain("$170/yr")
        })
        // $170/yr
    })
})