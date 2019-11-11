package com.moelholm.cucumber;

import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;

import com.moelholm.cucumber.domain.Account;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration // Don't ask
public class AccountCreateSteps_bak {

  @Autowired
  private TestRestTemplate restTemplate;

  private String serviceEndPoint; // service end point
  
  private HttpHeaders headers;
  
  private Account account;
  
  private JSONObject accountJsonObject;

  private ResponseEntity<Object> response; // output

  @Given("I Set POST account service api endpoint")
  public void setServiceEndPoint() {
    this.serviceEndPoint = "http://localhost:8081/v1/accounts";
  }

  @When("Set account details")
  public void set_account_details() {
	  accountJsonObject = new JSONObject();
	  accountJsonObject.put("accountId", "Acc-9");
	  accountJsonObject.put("balance", new BigDecimal(330.00));
	  account = new Account("Acc-1", new BigDecimal(330.00));
  }
  
  @And("Send a POST HTTP request")
  public void postHttpRequest(){
	  headers = new HttpHeaders();
	  headers.setContentType(MediaType.APPLICATION_JSON);
	  HttpEntity<String> request = new HttpEntity<String>(accountJsonObject.toString(), headers);
	  response = restTemplate.postForEntity(serviceEndPoint, request, Object.class);
  }
  

  @Then("I receive valid Response(.*)")
  public void shouldGetResponseWithHttpStatusCode(int statusCode) {
    assertThat(response.getStatusCodeValue()).isEqualTo(statusCode);
  }   
  
}