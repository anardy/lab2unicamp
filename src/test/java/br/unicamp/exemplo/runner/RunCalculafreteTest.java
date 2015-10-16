package br.unicamp.exemplo.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import com.github.tomakehurst.wiremock.WireMockServer;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber" }, glue = "br.unicamp.exemplo.steps", features = "classpath:features/Calculafrete.feature")
public class RunCalculafreteTest {
	private static WireMockServer wireMockServer;

	@BeforeClass
	public static void runBeforeClass() {
		wireMockServer = new WireMockServer(wireMockConfig()
				.port(8089));
		configureFor(8089);
		wireMockServer.start();
	}

	@AfterClass
	public static void runAfterClass() {
		wireMockServer.stop();
	}
}
