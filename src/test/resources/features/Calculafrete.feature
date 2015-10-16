# language: pt

Funcionalidade: CalculaFrete
  Como um sistema
  Quero calcular o preco e prazo de entrega do frete

Cenario: Calculo de Preco e Prazo de entrega do Frete
    Dado Usuario ja adicionou ao carrinho no minimo um produto
    E Informou o tipo de servico de entrega 41106
	E O CEP do usuario e conhecido pelo sistema
    E O CEP da CompreFacil e conhecido pelo sistema
    E O peso do produto e conhecido pelo sistema
    E O comprimento dos produtos sao conhecidos pelo sistema
    E A altura dos produtos sao conhecidas pelo sistema
    E A largura dos produtos sao conhecidas pelos sistema
    E O diametro dos produtos sao conhecidos pelo sistema
    Quando O sistema envia os dados aos Correios
    Entao O correios retorna os valores de Frete e Prazo de Entrega 
    E Salva o valor do Frete e Prazo de Entrega
    E Exibe valor e prazo de entrega
	  | nCdServico  | sCepOrigem | sCepDestino | nVlPeso | nCdFormato   | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento | valorFrete | diasEntrega | 
      | 41106       | 11092899   | 126003928   | 1       | 3            | 15             | 0         | 2          | 0           | N             | 0                 | S                   | 12         | 3           |
      | 40010       | 11092899   | 134068466   | 0,5     | 3            | 23             | 0         | 6,7        | 1           | N             | 0                 | S                   | 80         | 4           |