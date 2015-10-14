package br.unicamp.exemplo.steps;


import br.unicamp.exemplo.Calculafrete;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;

public class CalculafreteSteps {

    private Throwable throwable;
    private Calculafrete calculafrete;
    
    @Before
    public void setUp() {
    	// não precisa desse Mock aqui.. mas só para deixar de exemplo de como faz.. vamos usar no calculo de frete
//    	calculafrete = new Calculafrete();
//    	throwable = null;
//    	
//    	LinkedList carrinho = mock(LinkedList.class);
//    	when(mockedList.get(0)).thenReturn("first");
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
    public void exibe_valor_e_prazo_de_entrega() throws Throwable {
        
        
    }

    @Entao("^Salva o valor do Frete$")
    public void salva_o_valor_do_Frete() throws Throwable {
        
        
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