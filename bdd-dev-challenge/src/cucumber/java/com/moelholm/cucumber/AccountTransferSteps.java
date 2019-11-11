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
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration // Don't ask
public class AccountTransferSteps {

  @Autowired
  private TestRestTemplate restTemplate;

  private String serviceEndPoint; // service end point
  
  private HttpHeaders headers;
  
  private JSONObject transferJsonObject;

  private ResponseEntity<Object> response; // output

  @Given("I Set POST account transfer service api endpoint")
  public void setServiceEndPoint() {
    this.serviceEndPoint = "http://localhost:8081/v1/accounts/transfer";
  }

  @When("Set transfer details")
  public void set_account_details() {
	  transferJsonObject = new JSONObject();
	  transferJsonObject.put("accountFromId", "Acc-9");
	  transferJsonObject.put("accountToId", "Acc-10");
	  transferJsonObject.put("amount", new BigDecimal(30.00));
  }
  
  @And("Send POST HTTP request")
  public void postHttpRequest(){
	  headers = new HttpHeaders();
	  headers.setContentType(MediaType.APPLICATION_JSON);
	  HttpEntity<String> request = new HttpEntity<String>(transferJsonObject.toString(), headers);
	  response = restTemplate.exchange(serviceEndPoint, HttpMethod.PUT, request, Object.class);
  }
  

  @Then("We receive valid Response(.*)")
  public void shouldGetResponseWithHttpStatusCode(int statusCode) {
    assertThat(response.getStatusCodeValue()).isEqualTo(statusCode);
  }   
  
}