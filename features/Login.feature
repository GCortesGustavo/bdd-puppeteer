Feature: Login

Scenario: Iniciar secion en la pagina 

Given Im on the right page
When I fill the form with my email and my password
Then I should see the dashboard page