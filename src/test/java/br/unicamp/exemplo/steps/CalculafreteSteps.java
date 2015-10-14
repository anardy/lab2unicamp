package br.unicamp.exemplo.steps;


import org.mockito.Matchers;
import org.mockito.Mockito;

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
        
        
    }

    @Dado("^Informou o tipo de servico de entrega (\\d+) \\(PAC Varejo\\)$")
    public void informou_o_tipo_de_servico_de_entrega_PAC_Varejo(int arg1) throws Throwable {
        
        
    }

    @Dado("^O CEP do usuario eh conhecido pelo sistema (\\d+)$")
    public void o_CEP_do_usuario_eh_conhecido_pelo_sistema(int arg1) throws Throwable {
        
        
    }

    @Dado("^O CEP da CompreFacil eh conhecido pelo sistema (\\d+)$")
    public void o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int arg1) throws Throwable {
        return;
        
    }

    @Dado("^O peso eh inferior ou igual a (\\d+)kg (\\d+)kg$")
    public void o_peso_eh_inferior_ou_igual_a_kg_kg(int arg1, int arg2) throws Throwable {
        
        
    }

    @Dado("^O formato do envio eh envelope (\\d+) \\(Envelope\\)$")
    public void o_formato_do_envio_eh_envelope_Envelope(int arg1) throws Throwable {
        
        
    }

    @Dado("^O comprimento dos produtos sao conhecidos pelo sistema (\\d+)cm$")
    public void o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int arg1) throws Throwable {
        
        
    }

    @Dado("^A altura dos produtos sao conhecidas pelo sistema (\\d+)cm$")
    public void a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int arg1) throws Throwable {
        
        
    }

    @Dado("^A largura dos produtos sao conhecidas pelos sistema (\\d+)cm$")
    public void a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int arg1) throws Throwable {
        
        
    }

    @Dado("^O diametro dos produtos sao conhecidos pelo sistema (\\d+)cm$")
    public void o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int arg1) throws Throwable {
        
        
    }

    @Quando("^O sistema envia os dados aos Correios$")
    public void o_sistema_envia_os_dados_aos_Correios() throws Throwable {
        
    }

    @Entao("^Exibe valor e prazo de entrega$")
    public void exibe_valor_e_prazo_de_entrega(double valorFrete, int diasEntrega) throws Throwable {
    	try{
		stubFor(get(urlEqualTo("/calculafrete/ValorePrazo"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "text/plain")
		        .withBody("Hello world!")));
    	} catch(Throwable t){
    		throwable = t;
    	}
    	assertEquals(valorFrete, this.calculafrete.getValorFrete());
    	assertEquals(diasEntrega, this.calculafrete.getDiasEntrega());
    }

    @Entao("^Salva o valor do Frete e Prazo de Entrega$")
    public void salva_o_valor_do_Frete_e_Prazo_de_Entrega(double valorFrete, int diasEntrega) throws Throwable {
        Mockito.verify(mock, times(1)).saveDadosDeEntrega(Matchers.eq(calculafrete.getValorFrete()), Matchers.eq(calculafrete.getDiasEntrega()));
    }
    
    @Entao("^Exibe prazo de entrega$")
    public void exibe_prazo_de_entrega(int diasEntrega) throws Throwable {
    	try{
		stubFor(get(urlEqualTo("/calculafrete/Prazo"))
		        .willReturn(aResponse()
		        .withHeader("Content-Type", "text/plain")
		        .withBody("Hello world!")));
    	} catch(Throwable t){
    		throwable = t;
    	}
    	assertEquals(diasEntrega, this.calculafrete.getDiasEntrega());
    }
    
    @Entao("^Salva o Prazo de Entrega$")
    public void salva_o_Prazo_de_Entrega(int diasEntrega) throws Throwable {
        Mockito.verify(mock, times(1)).saveDadosDeEntrega(Matchers.eq(calculafrete.getDiasEntrega()));
    }


    @Dado("^Informou o tipo de servico de entrega (\\d+) \\(SEDEX Varejo\\)$")
    public void informou_o_tipo_de_servico_de_entrega_SEDEX_Varejo(int arg1) throws Throwable {
        
        
    }

    @Dado("^O peso eh inferior ou igual a (\\d+)kg (\\d+),(\\d+)kg$")
    public void o_peso_eh_inferior_ou_igual_a_kg_kg(int arg1, int arg2, int arg3) throws Throwable {
        
        
    }

    @Dado("^A largura dos produtos sao conhecidas pelos sistema (\\d+),(\\d+)cm$")
    public void a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int arg1, int arg2) throws Throwable {
        
        
    }

    @Dado("^O peso dos produtos sao conhecidos pelo sistema (\\d+)kg$")
    public void o_peso_dos_produtos_sao_conhecidos_pelo_sistema_kg(int arg1) throws Throwable {
        
        
    }

    @Dado("^O formato do envio eh diferente de envelope (\\d+)\\(Pacote/Caixa\\)$")
    public void o_formato_do_envio_eh_diferente_de_envelope_Pacote_Caixa(int arg1) throws Throwable {
        
        
    }

    @Dado("^O formato do envio eh diferente de envelope (\\d+)\\(Rolo/Prisma\\)$")
    public void o_formato_do_envio_eh_diferente_de_envelope_Rolo_Prisma(int arg1) throws Throwable {
        
        
    }

    @Dado("^A altura dos produtos sao conhecidas pelo sistema (\\d+),(\\d+)cm$")
    public void a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int arg1, int arg2) throws Throwable {
        
        
    }

    @Dado("^O peso eh inferior ou igual eh (\\d+)kg (\\d+)kg$")
    public void o_peso_eh_inferior_ou_igual_eh_kg_kg(int arg1, int arg2) throws Throwable {
        
        
    }

    @Entao("^Exibe valor do frete$")
    public void exibe_valor_do_frete() throws Throwable {
        
        
    }

    @Dado("^O peso eh inferior ou igual eh (\\d+)kg (\\d+),(\\d+)kg$")
    public void o_peso_eh_inferior_ou_igual_eh_kg_kg(int arg1, int arg2, int arg3) throws Throwable {
        
        
    }

    @Dado("^Informou o tipo de servico de entrega <nCdServico >$")
    public void informou_o_tipo_de_servico_de_entrega_nCdServico() throws Throwable {
        
        
    }
    
}