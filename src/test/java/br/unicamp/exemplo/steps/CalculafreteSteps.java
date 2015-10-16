package br.unicamp.exemplo.steps;


import org.mockito.Matchers;
import org.mockito.Mockito;

import com.github.tomakehurst.wiremock.client.WireMock;

import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;
import br.unicamp.exemplo.Calculafrete;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.anyDouble;
import static org.mockito.Matchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

public class CalculafreteSteps {

	private double valorFrete;
	private int diasEntrega;
    private Throwable throwable;
    private Calculafrete calculafrete;
    private DadosDeEntregaDAO mock;
    
    @Before
    public void setUp() {
    	calculafrete = new Calculafrete(mock);
    	throwable = null;
    }

    @Dado("^Usuario ja adicionou ao carrinho no minimo um produto$")
    public void usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^Informou o tipo de servico de entrega (\\d+)$")
    public void informou_o_tipo_de_servico_de_entrega(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O CEP do usuario e conhecido pelo sistema (\\d+)$")
    public void o_CEP_do_usuario_conhecido_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O CEP do usuario deve ser validado pelos correios (\\d+)$")
    public void o_CEP_do_usuario_deve_ser_validado_pelos_correios(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O CEP da CompreFacil e conhecido pelo sistema (\\d+)$")
    public void o_CEP_da_CompreFacil_conhecido_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O peso do produto e conhecido pelo sistema (\\d+)$")
    public void o_peso_do_produto_conhecido_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O comprimento dos produtos sao conhecidos pelo sistema (\\d+)$")
    public void o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^A altura dos produtos sao conhecidas pelo sistema (\\d+)$")
    public void a_altura_dos_produtos_sao_conhecidas_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^A largura dos produtos sao conhecidas pelos sistema (\\d+)$")
    public void a_largura_dos_produtos_sao_conhecidas_pelos_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^O diametro dos produtos sao conhecidos pelo sistema (\\d+)$")
    public void o_diametro_dos_produtos_sao_conhecidos_pelo_sistema(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Quando("^O sistema envia os dados aos Correios$")
    public void o_sistema_envia_os_dados_aos_Correios() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Entao("^Exibe valor e prazo de entrega <valorFrete> <diasEntrega>$")
    public void exibe_valor_e_prazo_de_entrega_valorFrete_diasEntrega() throws Throwable {
    	try{
		stubFor(get(urlEqualTo("/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo.*"))
				.withQueryParam("nCdServico", WireMock.equalTo("40010"))
				.withQueryParam("sCepOrigem", WireMock.equalTo("11092899"))
				.withQueryParam("sCepDestino", WireMock.equalTo("126003928"))
				.withQueryParam("nVlPeso", WireMock.equalTo("0,5"))
				.withQueryParam("nVlComprimento", WireMock.equalTo("23"))
				.withQueryParam("nVlAltura", WireMock.equalTo("0"))
				.withQueryParam("nVlLargura", WireMock.equalTo("6,7"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "application/xml")
		        .withStatus(200)
		        .withBody("</?xml version=\"1.0\" encoding=\"utf-8\"?> </cResultado xmlns=\"http:/tempuri.org/\"> </Servicos> </cServico> </Codigo>41106</Codigo> </Valor>12,50</Valor> </PrazoEntrega>3</PrazoEntrega> </ValorMaoPropria>1</ValorMaoPropria> </ValorAvisoRecebimento>1</ValorAvisoRecebimento> </ValorValorDeclarado>0</ValorValorDeclarado> </EntregaDomiciliar>false</EntregaDomiciliar> </EntregaSabado>true</EntregaSabado> </Erro>0</Erro> </MsgErro>0</MsgErro> </ValorSemAdicionais>12,50</ValorSemAdicionais> </obsFim></obsFim> </cServico> </cServico> </cResultado>")));
    	} catch(Throwable t){
    		throwable = t;
    	}
    }

    @Entao("^Salva o valor do Frete e Prazo de Entrega <valorFrete> <diasEntrega>$")
    public void salva_o_valor_do_Frete_e_Prazo_de_Entrega_valorFrete_diasEntrega() throws Throwable {
        Mockito.verify(mock, times(1)).saveDadosDeEntrega(Matchers.eq(calculafrete.getValorFrete()), Matchers.eq(calculafrete.getDiasEntrega()));
    }

    @Dado("^O peso do produto e conhecido pelo sistema (\\d+),(\\d+)$")
    public void o_peso_do_produto_conhecido_pelo_sistema(int arg1, int arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dado("^A largura dos produtos sao conhecidas pelos sistema (\\d+),(\\d+)$")
    public void a_largura_dos_produtos_sao_conhecidas_pelos_sistema(int arg1, int arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }
    
    
}