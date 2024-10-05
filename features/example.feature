Feature: Example WebdriverIO test with Cucumber

  Scenario: Open Google and verify the title
    Given I open the Google page
    Then the title should be "Google"
    