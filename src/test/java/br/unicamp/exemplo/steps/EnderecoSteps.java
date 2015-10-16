
package br.unicamp.exemplo.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static org.junit.Assert.assertEquals;

import com.github.tomakehurst.wiremock.client.WireMock;

import br.unicamp.exemplo.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;


public class EnderecoSteps {

	private Throwable throwable;
    private Endereco endereco;
    
    @Before
    public void setUp() {
    	endereco = new Endereco();
    }

    @Dado("^O CEP do usuario e conhecido pelo sistema$")
    public void o_cep_do_usuario_e_conhecido_pelo_sistema(String arg1) throws Throwable {
    	try{
    	stubFor(get(WireMock.urlMatching("/viacep/ws/.*/json/"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "application/json")
		        .withBody("{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\", \"complemento\": \"lado ímpar\", \"bairro\": \"Sé\", \"localidade\": \"São Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}")));
    	} catch(Throwable t){
    		throwable = t;
    	}
    }
    
    @Dado("^O CEP do usuario nao é conhecido pelo sistema$")
    public void o_CEP_do_usuario_nao_é_conhecido_pelo_sistema(String arg1) throws Throwable {
    	try{
    	stubFor(get(WireMock.urlMatching("/viacep/ws/.*/json/"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "application/json")
		        .withStatus(400)
		        .withBody("{\"erro\": \"endereco invalido\"}")));
    	} catch(Throwable t){
    		throwable = t;
    	}
    }

    @Quando("^O sistema faz a busca do endereco nos correios$")
    public void o_sistema_faz_a_busca_do_endereco_nos_correios() throws Throwable {
    	endereco.buscarEndereco();
    }

    @Entao("^Os correios retorna o endereco completo do usuario$")
    public void os_correios_retorna_o_endereco_completo_do_usuario(String endereco) throws Throwable {
        assertEquals(endereco, this.endereco.getEndereco());
    }
    

    @Entao("^Os correios retorna um erro com a mensagem$")
    public void os_correios_retorna_um_erro_com_a_mensagem(String endereco) throws Throwable {
    	assertEquals(endereco, this.endereco.getEndereco());
    }
}