class Utils {

    static validateTextVisible(item, text) {
        cy.get(item)
        .contains(text)
        .should('be.visible')
    }

}

export default Utils;