package br.unicamp.exemplo.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.exemplo.steps",
        features = "classpath:features/Calculadora.feature"
)
public class RunCalculadoraTest {	
}

