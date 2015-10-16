# language: pt

Funcionalidade: CalculaFrete
  Como um sistema
  Quero calcular o preco e prazo de entrega do frete

  Esquema do Cenario: Calculo de Preco e Prazo de entrega do Frete
    Dado Usuario ja adicionou ao carrinho no minimo um produto
    E Informou o tipo de servico de entrega <nCdServico>
    E O CEP do usuario e conhecido pelo sistema <sCepDestino>
	E O CEP do usuario deve ser validado pelos correios <sCepDestino>
    E O CEP da CompreFacil e conhecido pelo sistema <sCepOrigem>
    E O peso do produto e conhecido pelo sistema <nVlPeso>
    E O comprimento dos produtos sao conhecidos pelo sistema <nVlComprimento>
    E A altura dos produtos sao conhecidas pelo sistema <nVlAltura>
    E A largura dos produtos sao conhecidas pelos sistema <nVlLargura>
    E O diametro dos produtos sao conhecidos pelo sistema <nVlDiametro>
    Quando O sistema envia os dados aos Correios
    Entao Exibe valor e prazo de entrega <valorFrete> <diasEntrega>
    E Salva o valor do Frete e Prazo de Entrega <valorFrete> <diasEntrega>

     Exemplos: 
      | nCdEmpresa | sDsSenha   | nCdServico  | sCepOrigem | sCepDestino | nVlPeso | nCdFormato   | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
      | null       | null       | 41106       | 11092899   | 126003928   | 1       | 3            | 15             | 0         | 2          | 0           | N             | 0                 | S                   |
      | null       | null       | 40010       | 11092899   | 134068466   | 0,5     | 3            | 23             | 0         | 6,7        | 1           | N             | 0                 | S                   |
	
