# language: pt

Funcionalidade: CalculaFrete
  Como um sistema
  Quero calcular o preco e prazo de entrega do frete

Cenario: Calculo de Preco e Prazo de entrega do Frete
    Dado Usuario ja adicionou ao carrinho no minimo um produto
    Quando O sistema envia os dados aos Correios
    | nCdServico  | sCepOrigem | sCepDestino | nVlPeso | nCdFormato   | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento | 
    | 41106       | 11092899   | 126003928   | 1       | 3            | 15             | 0         | 2          | 0           | N             | 0                 | S                   |
    Entao O correios retorna os valores de Frete e Prazo de Entrega
    """
    <?xml version="1.0" encoding="utf-8"?> <cResultado xmlns="http:/tempuri.org/"> <Servicos> <cServico> <Codigo>41106</Codigo> <Valor>12,50</Valor> <PrazoEntrega>3</PrazoEntrega> <ValorMaoPropria>1</ValorMaoPropria> <ValorAvisoRecebimento>1</ValorAvisoRecebimento> <ValorValorDeclarado>0</ValorValorDeclarado> <EntregaDomiciliar>false</EntregaDomiciliar> <EntregaSabado>true</EntregaSabado> <Erro>0</Erro> <MsgErro>0</MsgErro> <ValorSemAdicionais>12</ValorSemAdicionais> <obsFim></obsFim> </cServico> </Servicos> </cResultado>
    """
    E Salva o valor do Frete e Prazo de Entrega
    E Exibe valor e prazo de entrega 12 3