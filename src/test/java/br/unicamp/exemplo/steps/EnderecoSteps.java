package br.unicamp.exemplo.steps;


import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.mockito.Mockito;

import br.unicamp.exemplo.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;

public class EnderecoSteps {

    private Endereco endereco;
    private Throwable throwable;
    
    @Before
    @Dado("^O CEP do usuario e conhecido pelo sistema$")
    public void setUp() {
    	// não precisa desse Mock aqui.. mas só para deixar de exemplo de como faz.. vamos usar no calculo de frete
    	endereco = new Endereco();
    	throwable = null;
    }

    public void o_cep_do_usuario_e_conhecido_pelo_sistema() throws Throwable {
    	assertNotEquals(endereco.getCep(), "");
    }

    @Quando("^O sistema faz a busca do endereco nos correios$")
    public void o_sistema_faz_a_busca_do_endereco_nos_correios() throws Throwable {
		endereco.buscar();
    }

    @Entao("^Os correios retorna o endereco completo do usuario \"([^\"]*)\"$")
    public void os_correios_retorna_o_endereco_completo_do_usuario(String endereco) throws Throwable {
        assertEquals(endereco, this.endereco.getEndereco());
    }
    
    // o sistema salva o endereco na base de dados chamando o metodo que esta no DAO
    // fazer um teste passando um CEP invalido e lança a classe CEPInvalidoException 
    
    
}