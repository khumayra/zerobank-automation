@account_summary
Feature: Account summary events

  Background: open login page
    Given user is on login page
    And user logs in with valid credentials

  Scenario: Account summary page should have the title Zero – Account Summary.
    Then user should verify that title is Zero – Account Summary

  Scenario: Account Summary page should have: Cash Accounts, Investment Accounts, Credit Accounts, Loan Accounts
    Then user should verify that page should have following types
      | Cash Accounts       |
      | Investment Accounts |
      | Credit Accounts     |
      | Loan Accounts       |

  Scenario: Credit Accounts table must have columns Account, Credit Card and Balance
    Then user should verify that Credit Accounts have following options
      | Account     |
      | Credit Card |
      | Balance     |




