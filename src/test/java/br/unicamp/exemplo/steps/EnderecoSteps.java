package br.unicamp.exemplo.steps;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.assertj.core.api.Assertions;

import br.unicamp.exemplo.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnderecoSteps {

    private Endereco endereco;
    private Throwable throwable;

    @Before
    public void setUp() {
    	endereco = new Endereco("04802080");
    	throwable = null;
    }

    @Given("^O CEP do usuario e conhecido pelo sistema$")
    public void o_cep_do_usuario_e_conhecido_pelo_sistema() throws Throwable {
    	assertNotEquals(endereco.getCep(), "");
    }

    @When("^O sistema faz a busca do endereco nos correios$")
    public void o_sistema_faz_a_busca_do_endereco_nos_correios() throws Throwable {
    	endereco.buscar();
    }

    @Then("^Os correios retorna o endereco completo do usuario$")
    public void os_correios_retorna_o_endereco_completo_do_usuario(String endereco) throws Throwable {
        assertEquals(endereco, this.endereco.getEndereco());
    }
    
}