// Navigate to Home Page
describe('Visits the Home page', () => {
    it('Visits the First Header', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        // Headers
        cy.get('.submenu-heade').first().click();
    
    })
    it('Visits the Second Header', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        // Headers
        cy.get('header').eq(1).click();
    
    })
    it('Visits the Third Header', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        // Headers
        cy.get('header').eq(2).click();
    
    })
    it('Visits the Fourth Header', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        // Headers
        cy.get('header').eq(3).click();
    
    })
})