package br.unicamp.exemplo.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import com.github.tomakehurst.wiremock.client.WireMock;

import br.unicamp.exemplo.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;


public class EnderecoSteps {

    private Endereco endereco;
    
    @Before
    public void setUp() {
    	endereco = new Endereco();
    }

    @Dado("^O CEP do usuario e conhecido pelo sistema$")
    public void o_cep_do_usuario_e_conhecido_pelo_sistema(String arg1) throws Throwable {
    	stubFor(get(WireMock.urlMatching("/viacep/ws/.*/json/"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "application/json")
		        .withBody("{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\", \"complemento\": \"lado ímpar\", \"bairro\": \"Sé\", \"localidade\": \"São Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}")));
    }
    
    @Dado("^O CEP do usuario nao é conhecido pelo sistema$")
    public void o_CEP_do_usuario_nao_é_conhecido_pelo_sistema(String arg1) throws Throwable {
    	stubFor(get(WireMock.urlMatching("/viacep/ws/.*/json/"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "application/json")
		        .withStatus(400)
		        .withBody("{\"erro\": \"endereco invalido\"}")));
    }

    @Quando("^O sistema faz a busca do endereco nos correios$")
    public void o_sistema_faz_a_busca_do_endereco_nos_correios() throws Throwable {
    	StringBuffer result = new StringBuffer();
		HttpClient client = HttpClientBuilder.create().build();
		String url = "http://localhost:8089/viacep/ws/01001000/json/";
		HttpGet request = new HttpGet(url);
		try {
			HttpResponse response = client.execute(request);
			BufferedReader rd = new BufferedReader(new InputStreamReader(
					response.getEntity().getContent()));

			
			String line = "";
			while ((line = rd.readLine()) != null) {
				result.append(line);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		endereco.setEndereco(result.toString());
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