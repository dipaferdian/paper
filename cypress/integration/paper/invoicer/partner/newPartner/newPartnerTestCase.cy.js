import { Given, And, Then, Before, After, When } from 'cypress-cucumber-preprocessor/steps'

class newPartnerTestCase {

      static step() {

            Before(() => {

                  cy.visit('https://paper.id/webappv1/#/login')

                  cy.get('*[data-cy^="identifier"]').type('dipaferdian2@gmail.com')

                  cy.contains('*[data-cy="submit"]', 'Selanjutnya').click()

                  cy.get('*[data-cy="password"]').type('Kartu743528@')

                  cy.contains('*[data-cy="submit"]', 'Masuk').then((button) => {
                        button.click()
                  })
            })


            Given('I am on the create new partner form', () => {

                  After(() => {

                        cy.url({timeout: 5000}).should('include', '/invoicer/dashboard').then(() => {

                              cy.visit('https://paper.id/webappv1/#/invoicer/partner')
                              cy.contains('button', 'Create New Partner').click()
                        })
                  })

            })

            When('I select partner type "Supplier"', () => {

                  After(() => {

                        cy.get('.ng-placeholder').contains('Select Partner Type').click()
                        cy.contains('*[role="option"]', 'Supplier').click()
                  })
            })

            And('I enters a partner no random value', () => {

                  After(() => {

                        cy.get('*[id="mat-input-0"]').clear()
                        cy.get('*[id="mat-input-0"]').type(`000${Math.floor(Math.random() * 1000)}`)
                  })
            })

            And('I select company type "Individual"', () => {

                  After(() => {

                        cy.get('.ng-value-container').contains('No Company Type Selected').click()
                        cy.contains('*[role="option"]', 'Individual').click()
                  })
            })

            And('I enters a name "dipa ferdian"', () => {

                  After(() => {

                        cy.get('*[id="mat-input-1"]').type('dipa ferdian')
                  })
            })

            And('I enters a email random value', () => {

                  After(() => {

                        cy.get('*[id="mat-input-2"]').type(`dipaferdian${Math.floor(Math.random() * 1000)}@gmail.com`)
                  })
            })

            And('I enters a phone number random value', () => {

                  After(() => {

                        cy.get('*[id="mat-input-3"]').type(`0821296278${Math.floor(Math.random() * 1000)}`)
                  })
            })

            And('I select save button', () => {

                  After(() => {

                        cy.contains('*[id="single-button"]', 'Save').then((button) => {
                              button.click()
                        })
                  })
            })

            And('I click button "save"', () => {

                  After(() => {

                        cy.contains('a', 'Save').click()
                  })
            })

            Then('Should able success create new partner', () => {

                  After(() => {
                        cy.contains('button', 'Sure. Continue').click()
                        cy.contains('Partner has been created', { Timeout: 10000 })
                  })
            })

      }

}

export default newPartnerTestCase