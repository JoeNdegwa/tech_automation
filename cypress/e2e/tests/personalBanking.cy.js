// Navigate to Home Page
describe('Visits the Home page', () => {
    it('Visits the Personal Banking', () => {
        cy.visit("https://www.co-opbank.co.ke/");
        cy.title().should("eq", "Personal & Business Banking in Kenya | Co-operative Bank");
        cy.url().should("include", "https://www.co-opbank.co.ke/");
        cy.get("h1").contains("Welcome to the Co-operative Bank of Kenya.")
        .should("be.visible");
        cy.get("a").contains("Personal Banking").click();
        // cards sub menu
        cy.get("h1").contains("What are your financial aspirations?")
        .should("be.visible");
        cy.get("a").contains("Cards").click();
        // Scroll to the bottom
        cy.scrollTo("bottom");
        cy.get("p").contains(" Platinum Card ")
        .should("be.visible");
        // Click on Platinum Tell me More button
        cy.get("[aria-describedby=tier-standard]").last()
        .contains("Tell Me More").click();
        cy.get("p")
        .contains("Enjoy the benefit of accessing airport VIP lounges globally at a highly discounted rate")
        .should("be.visible")
        cy.scrollTo("bottom");
        cy.get("h1")
        .contains("Do you have an enquiry? Talk to Us")
        .should("be.visible")
        // Fill in the form
        //Name
        cy.get("#input_1_1")
        .clear()
        .type("Joseph N");
        // Phone
        cy.get("#input_1_2")
        .clear()
        .type("+254700100200");
         //Town
         cy.get("#input_1_4")
         .clear()
         .type("Kiambu");
         // Email
         cy.get("#input_1_3")
         .clear()
         .type("test001@test.com");
         // Text Area
         cy.get("# input_1_5")
         .clear()
         .type("How do I get a Platinum Card?");
         // Click on the Captcha
         cy.get(".usr").click();
        


    
    })

})