package br.unicamp.exemplo.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;
import br.unicamp.comprefacil.exception.CEPInvalidoException;
import br.unicamp.exemplo.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;


public class EnderecoSteps {

    private Endereco endereco;
    private Throwable throwable;
    
    @Before
    public void setUp() {
    	endereco = new Endereco();
    	throwable = null;
    }

    @Dado("^O CEP do usuario e conhecido pelo sistema$")
    public void o_cep_do_usuario_e_conhecido_pelo_sistema(String cep) throws Throwable {
    	endereco.setCep(cep);
    }

    @Quando("^O sistema faz a busca do endereco nos correios$")
    public void o_sistema_faz_a_busca_do_endereco_nos_correios() throws Throwable {
    	try{
    		stubFor(get(urlEqualTo("/viacep/ws/"+this.endereco.getCep()+"/json/"))
    		        .willReturn(aResponse()
    		        .withHeader("Content-Type", "text/plain")
    		        .withBody("{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\", \"complemento\": \"lado ímpar\", \"bairro\": \"Sé\", \"localidade\": \"São Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}")));
    		endereco.buscar();
        	} catch(Throwable t){
        		throwable = t;
        	}
    	
    }

    @Entao("^Os correios retorna o endereco completo do usuario$")
    public void os_correios_retorna_o_endereco_completo_do_usuario(String endereco) throws Throwable {
        assertEquals(endereco, this.endereco.getEndereco());
    }
    

    @Dado("^O CEP do usuario nao é conhecido pelo sistema$")
    public void o_CEP_do_usuario_nao_é_conhecido_pelo_sistema(String cep) throws Throwable {
    	endereco.setCep(cep);
    }

    @Entao("^Os correios retorna um erro com a mensagem$")
    public void os_correios_retorna_um_erro_com_a_mensagem(String arg1) throws Throwable {
    	throwable = new CEPInvalidoException();
    }
    
}