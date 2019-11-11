Feature: Rest API testing Transfer

Scenario: Transfer amount between accounts
    Given I Set POST account transfer service api endpoint
When Set transfer details
    And Send POST HTTP request
Then We receive valid Response200
