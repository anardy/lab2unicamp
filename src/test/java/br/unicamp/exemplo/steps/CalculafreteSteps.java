package br.unicamp.exemplo.steps;


import java.util.List;

import org.mockito.Matchers;
import org.mockito.Mockito;

import com.github.tomakehurst.wiremock.client.WireMock;

import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;
import br.unicamp.exemplo.Calculafrete;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
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

    private Throwable throwable;
    private Calculafrete calculafrete;
    private DadosDeEntregaDAO mock;
    private Boolean carrinhoNaoEstaVazio;
    
    @Before
    public void setUp() {
    	calculafrete = new Calculafrete(mock);
    	throwable = null;
    }
    
    @Dado("^Usuario ja adicionou ao carrinho no minimo um produto$")
    public void usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto() throws Throwable {
    	carrinhoNaoEstaVazio = true;
    	assertNotNull(calculafrete);
        throw new PendingException();
    }
    
    @Dado("^Informou o tipo de servico de entrega (\\d+)$")
    public void informou_o_tipo_de_servico_de_entrega(String nCdServico) throws Throwable {
    	this.calculafrete.setnCdServico(nCdServico);
        throw new PendingException();
    }

    @Dado("^O CEP do usuario e conhecido pelo sistema (\\d+)$")
    public void o_CEP_do_usuario_e_conhecido_pelo_sistema(String sCepDestino) throws Throwable {
    	this.calculafrete.setsCepDestino(sCepDestino);
    	throw new PendingException();
    }

    @Dado("^O CEP da CompreFacil e conhecido pelo sistema$")
    public void o_CEP_da_CompreFacil_e_conhecido_pelo_sistema(String sCepOrigem) throws Throwable {
    	this.calculafrete.setsCepOrigem(sCepOrigem);
        throw new PendingException();
    }

    @Dado("^O peso do produto e conhecido pelo sistema$")
    public void o_peso_do_produto_e_conhecido_pelo_sistema(String nVlPeso) throws Throwable {
    	this.calculafrete.setnVlPeso(nVlPeso);
        throw new PendingException();
    }

    @Dado("^O comprimento dos produtos sao conhecidos pelo sistema$")
    public void o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema(double nVlComprimento) throws Throwable {
    	this.calculafrete.setnVlComprimento(nVlComprimento);
        throw new PendingException();
    }

    @Dado("^A altura dos produtos sao conhecidas pelo sistema$")
    public void a_altura_dos_produtos_sao_conhecidas_pelo_sistema(double nVlAltura) throws Throwable {
    	this.calculafrete.setnVlAltura(nVlAltura);
        throw new PendingException();
    }

    @Dado("^A largura dos produtos sao conhecidas pelos sistema$")
    public void a_largura_dos_produtos_sao_conhecidas_pelos_sistema(double nVlLargura) throws Throwable {
    	this.calculafrete.setnVlLargura(nVlLargura);
        throw new PendingException();
    }
    
    @Dado("^O diametro dos produtos sao conhecidos pelo sistema$")
    public void o_diametro_dos_produtos_sao_conhecidos_pelo_sistema(double nVlDiametro) throws Throwable {
    	this.calculafrete.setnVlDiametro(nVlDiametro);
        throw new PendingException();
    }
    
    @Quando("^O sistema envia os dados aos Correios$")
    public void o_sistema_envia_os_dados_aos_Correios() throws Throwable {
    	try{
    		stubFor(get(WireMock.urlMatching("/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo.*"))
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
    		        .withBody("<?xml version=\"1.0\" encoding=\"utf-8\"?> <cResultado xmlns=\"http:/tempuri.org/\"> <Servicos> <cServico> <Codigo>41106</Codigo> <Valor>12,50</Valor> <PrazoEntrega>3</PrazoEntrega> <ValorMaoPropria>1</ValorMaoPropria> <ValorAvisoRecebimento>1</ValorAvisoRecebimento> <ValorValorDeclarado>0</ValorValorDeclarado> <EntregaDomiciliar>false</EntregaDomiciliar> <EntregaSabado>true</EntregaSabado> <Erro>0</Erro> <MsgErro>0</MsgErro> <ValorSemAdicionais>12,50</ValorSemAdicionais> <obsFim></obsFim> </cServico> </Servicos> </cResultado>")));
        	} catch(Throwable t){
        		throwable = t;
        	}
    }

    @Entao("^O correios retorna os valores de Frete e Prazo de Entrega$")
    public void o_correios_retorna_os_valores_de_frrete_e_prazo_de_entrega(double valorFrete, int diasEntrega) throws Throwable {
    	this.calculafrete.setValorFrete(valorFrete);
    	this.calculafrete.setDiasEntrega(diasEntrega);
    }
    
    @Entao("^Exibe valor e prazo de entrega$")
    public void exibe_valor_e_prazo_de_entrega(List<Calculafrete> dados) throws Throwable {
        System.out.println(dados.get(0).getDiasEntrega());
    }

    @Entao("^Salva o valor do Frete e Prazo de Entrega$")
    public void salva_o_valor_do_Frete_e_Prazo_de_Entrega() throws Throwable {
    	Mockito.verify(mock, times(1)).saveDadosDeEntrega(Matchers.eq(calculafrete.getValorFrete()), Matchers.eq(calculafrete.getDiasEntrega()));
    }


}