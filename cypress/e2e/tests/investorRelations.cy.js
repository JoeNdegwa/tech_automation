// Navigate to Home Page
describe('Visits the Home page', () => {
    it('Visits the Investor Relations Page', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        cy.title().should("eq", "Personal & Business Banking in Kenya | Co-operative Bank");
        cy.url().should("include", "https://www.co-opbank.co.ke/");
        cy.get("h1").contains("Welcome to the Co-operative Bank of Kenya.")
        .should("be.visible");
        cy.get("a").contains("Investor Relations").click();
        //  Investor Relations 
        cy.get("p").contains("Investor Relations")
        .should("be.visible");
        cy.get('a [href="https://www.co-opbank.co.ke/investor_categories/press-releases/"]')
        .click();
        // Press Releases
        cy.get("h3")
        .contains("Press Release – Co-op Bank Q1 2024 Financial Results")
        .should("be.visible");
        cy.get("h3")
        .contains("Share Register Closure Date Clarification")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Co-op Bank reports Sh 32.4B for Full year 2023")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Co-op Bank named Overall Winner in KBA Customer Satisfaction Survey 2023")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release Co-op Bank Q3 2023 Financials")
        .should("be.visible");
        cy.get("h3")
        .contains("Public Announcement")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Q2 2023 Financial Results")
        .should("be.visible");
        cy.get("h3")
        .contains("Co-op Bank receives $100M Facility from DEG-led Consortium")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Co-op Bank reports a 5pc rise in Q1-2023 profit to KSh8.15Bn")
        .should("be.visible");
        cy.get("h3")
        .contains("Co-op Bank Reports a 30pc Rise in Full Year 2022 Profit to Ksh 29.4Bn")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Co-op Bank Q3 2022 Financial Results")
        .should("be.visible");
        cy.get("h3")
        .contains("Press Release – Co-op Bank reports a 45% rise in half year 2022 profit to Sh15.3Bn")
        .should("be.visible");


    })
})