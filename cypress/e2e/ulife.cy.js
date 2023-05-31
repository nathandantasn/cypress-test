
describe('logar ulife', () => {
    it('validar acesso', () => {
        cy.visit('https://www.ulife.com.br/login.aspx')
        cy.get('input[name="ctl00$b$txtLogin"]').type("125111367702")
        cy.get('input[name="ctl00$b$txtPassword"]').type("281298")
        cy.get('input[name="ctl00$b$imbLogin"]').click()
    })
})