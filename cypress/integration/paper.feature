@userflow
Feature: User create new partner

      Scenario: User create an new partner
            Given I am on the create new partner form
            When  I select partner type "Supplier"
            And   I enters a partner no random value
            And   I select company type "Individual"
            And   I enters a name "dipa ferdian"
            And   I enters a email random value
            And   I enters a phone number random value
            And   I select save button
            And   I click button "save"
            Then  Should able success create new partner

