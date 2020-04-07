describe('The Home Page of our Project',function(){

    it('successfully loads',function(){
        cy.visit('/')
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
        //cy.screenshot();
    })
})

describe('Click Button to register and register user',function(){

    beforeEach(function(){
        cy.server();
        cy.route({
            method: "POST",
            url: "/register",
            response: "fixture:register-users.json"
        })
    })

    it('fill and submit register page',function(){
        cy.visit('/');
        cy.contains('Register').click();
        cy.url().should('include','/')
        //cy.screenshot();

        cy.get('input[name="name"]').type('dummy')
        cy.get('input[name="username"]').type('dummy')
        cy.get('input[name="email"]').type('dummy@dum.net')
        cy.get('input[name="password"]').type('dummy')
        cy.get('input[name="re-password"]').type('dummy')

        //cy.screenshot();

        cy.server();
        cy.route({
            method: "POST",
            url: "/register",
            response: {status: true}
        })
        //cy.screenshot();
        cy.contains('Register').click();
        //cy.screenshot();
        cy.contains('Back').click();
        //cy.screenshot();
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
    })
})

describe('Sign In user and Log Out',function(){
    beforeEach(function(){
        cy.server();
            cy.route({
                method: "POST",
                url: "/signIn",
                response:"fixture:sign-users.json"
        })
    })

    it('successfully loads the sign in page', function(){
        cy.visit('/');
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
    })

    it('fills the user details to sign in',function(){
        cy.visit('/');
        cy.get('input[name="username"]').type('kriti')
        cy.get('input[name="password"]').type('kriti')
        //cy.screenshot();
        cy.contains('Sign in').click();
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
    })
    it('tests the logout button',function(){
        cy.contains('Logout').click();
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
    })
})




