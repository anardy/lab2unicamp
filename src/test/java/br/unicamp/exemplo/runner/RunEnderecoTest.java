package br.unicamp.exemplo.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static com.github.tomakehurst.wiremock.client.WireMock.*;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;


import com.github.tomakehurst.wiremock.client.WireMock;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.exemplo.steps",
        features = "classpath:features/Endereco.feature"
)
public class RunEnderecoTest {
	
	private static WireMockServer wireMockServer;
	
	 @BeforeClass
		public static void runBeforeClass(){
	    	wireMockServer = new WireMockServer(wireMockConfig().port(8089));
			configureFor(8089);
			wireMockServer.start();
		
			stubFor(get(urlEqualTo("/viacep/ws/01001000/json/"))
			        .willReturn(aResponse()
			        .withHeader("Content-Type", "text/plain")
			        .withBody("Praca da Se")));
			       // .withBody("{\"cep\": \"01001-000\", \"logradouro\": \"Pra�a da S�\", \"complemento\": \"lado �mpar\", \"bairro\": \"S�\", \"localidade\": \"S�o Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}")));
	 }
	 
		@AfterClass
		public static void runAfterClass(){
			wireMockServer.stop();
		}
}

