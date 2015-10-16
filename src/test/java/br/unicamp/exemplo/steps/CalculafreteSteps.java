package br.unicamp.exemplo.steps;


import java.util.List;

import org.mockito.Matchers;
import org.mockito.Mockito;

import com.github.tomakehurst.wiremock.client.WireMock;

import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;
import br.unicamp.exemplo.Calculafrete;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;

public class CalculafreteSteps {

    private Throwable throwable;
    private Calculafrete calculafrete;
    private DadosDeEntregaDAO mock;
    private Boolean carrinhoNaoEstaVazio;
    
    @Before
    public void setUp() {
    	mock = mock(DadosDeEntregaDAO.class);
    	calculafrete = new Calculafrete(mock);
    	throwable = null;
    }
    
    @Dado("^Usuario ja adicionou ao carrinho no minimo um produto$")
    public void usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto() throws Throwable {
    	carrinhoNaoEstaVazio = true;
    }
    
    @Quando("^O sistema envia os dados aos Correios$")
    public void o_sistema_envia_os_dados_aos_Correios(List<Calculafrete> dados) throws Throwable {
    	try{
    		stubFor(get(WireMock.urlMatching("/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo.*"))
    				.withQueryParam("nCdServico", WireMock.equalTo("40010"))
    				/*.withQueryParam("sCepOrigem", WireMock.equalTo("11092899"))
    				.withQueryParam("sCepDestino", WireMock.equalTo("126003928"))
    				.withQueryParam("nVlPeso", WireMock.equalTo("0,5"))
    				.withQueryParam("nVlComprimento", WireMock.equalTo("23"))
    				.withQueryParam("nVlAltura", WireMock.equalTo("0"))
    				.withQueryParam("nVlLargura", WireMock.equalTo("6,7"))*/
    		        .willReturn(aResponse()
    		        .withHeader("Content-Type", "application/xml")
    		        .withStatus(200)
    		        .withBody("<?xml version=\"1.0\" encoding=\"utf-8\"?> <cResultado xmlns=\"http:/tempuri.org/\"> <Servicos> <cServico> <Codigo>41106</Codigo> <Valor>12,50</Valor> <PrazoEntrega>3</PrazoEntrega> <ValorMaoPropria>1</ValorMaoPropria> <ValorAvisoRecebimento>1</ValorAvisoRecebimento> <ValorValorDeclarado>0</ValorValorDeclarado> <EntregaDomiciliar>false</EntregaDomiciliar> <EntregaSabado>true</EntregaSabado> <Erro>0</Erro> <MsgErro>0</MsgErro> <ValorSemAdicionais>12,50</ValorSemAdicionais> <obsFim></obsFim> </cServico> </Servicos> </cResultado>")));
        	} catch(Throwable t){
        		throwable = t;
        	}
    	calculafrete.calculaPrazoFrete(dados);
    }

    @Entao("^O correios retorna os valores de Frete e Prazo de Entrega$")
    public void o_correios_retorna_os_valores_de_frete_e_prazo_de_entrega() throws Throwable {
    	
    }
    
    @E("^Exibe valor e prazo de entrega$")
    public void exibe_valor_e_prazo_de_entrega() throws Throwable {
    }

    @E("^Salva o valor do Frete e Prazo de Entrega$")
    public void salva_o_valor_do_Frete_e_Prazo_de_Entrega() throws Throwable {
    	calculafrete.salvar(calculafrete.getValorFrete(), calculafrete.getDiasEntrega());
    	Mockito.verify(mock, times(1)).saveDadosDeEntrega(Matchers.eq(calculafrete.getValorFrete()), Matchers.eq(calculafrete.getDiasEntrega()));
    }


}