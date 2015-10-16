# language: pt

Funcionalidade: CalculaFrete
  Como um sistema
  Quero calcular o preco e prazo de entrega do frete

Cenario: Calculo de Preco e Prazo de entrega do Frete
    Dado Usuario ja adicionou ao carrinho no minimo um produto
    Quando O sistema envia os dados aos Correios
    | nCdServico  | sCepOrigem | sCepDestino | nVlPeso | nCdFormato   | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento | valorFrete | diasEntrega | 
    | 41106       | 11092899   | 126003928   | 1       | 3            | 15             | 0         | 2          | 0           | N             | 0                 | S                   | 12         | 3           |
    Entao O correios retorna os valores de Frete e Prazo de Entrega
    E Salva o valor do Frete e Prazo de Entrega
    E Exibe valor e prazo de entrega
    
