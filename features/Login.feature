Feature: Login

Scenario: Iniciar secion en la pagina 

Given Im on the right page
When I fill the form with my email: "Gustiplatzi934@gmail.com" and my password: "puppeteer2024"
Then I should see the dashboard page

@probando
Scenario Outline: Scenario Outline for login

Given Im on the right page
When I fill the form with my <Email> and my <Password>
Then I should see the dashboard page

Examples:
    | Email | Password |
    | Gustiplatzi934@gmail.com  | puppeteer2024  |
    | asdasd@gmail.com  | asdasda  |
    | qweqwe@gmail.com  | qweqweq  |
    | zxczxc@gmail.com  | zxczxcx  |