# Spring Boot 1.4 BDD testing

This project shows how you can implement BDD tests with Spring Boot.

### Inspect
Checkout the Gherkin tests here:

    ./src/cucumber/resources/restapitransfersource.feature

See the steps implementations here:

    ./src/cucumber/java/com/moelholm/cucumber/AccountTransferSteps.java

Curious about the RESTful(ish) resource? See it here:

    ./src/main/java/com\db\awmd\challenge\web\AccountsController.java -- from "dev-challenge" project

### Run
Run the cucumber tests like this:

    ./gradlew clean cucumber
    
Observe the console for test result. Also find cucumber test reports in directory `build/cucumber`.
