describe('Test IS F341 Hotel-Allotment Website', function(){
    it('Home page contains login page', function(){
        cy.visit('/');
        cy.contains('Sign In')
        .invoke('attr', 'href')
        .then(href=>{
            expect(href).to.equal('/');
        })
    })
})