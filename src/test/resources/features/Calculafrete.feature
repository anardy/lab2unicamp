# encoding: UTF-8
Feature: CalculaFrete
  Como sistema
  Quero calcular o preco e prazo de entrega do frete, incluindo embalagem
  
  Scenario Outline: Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.
	Given Usuario ja adicionou ao carrinho no minimo um produto 
	And Informou o tipo de servico de entrega <nCdServico>
	And O CEP do usuario eh conhecido pelo sistema <sCepDestino>
	And O CEP da CompreFacil eh conhecido pelo sistema <sCepOrigem>
	And O peso eh inferior ou igual a 1kg <nVlPeso>
	And O formato do envio eh envelope <nCdFormato>
	And O comprimento dos produtos sao conhecidos pelo sistema <nVlComprimento>
	And A altura dos produtos sao conhecidas pelo sistema <nVlAltura>
	And A largura dos produtos sao conhecidas pelos sistema <nVlLargura>
	And O diametro dos produtos sao conhecidos pelo sistema <nVlDiametro>
	When O sistema envia os dados aos Correios
	Then Exibe valor e prazo de entrega

	Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |   1kg   |3 (Envelope)|     15cm		  |    0cm    | 	2cm	   |     0cm     |   N (fixo)	 |       0 (fixo)    |      S (fixo)	   |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |   0,5kg	|3 (Envelope)| 	   23cm		  |    0cm    |	   6,7cm   |     1cm     |   N (fixo)    |       0 (fixo)    |	  S (fixo)		   |
		

  Scenario Outline: Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.
     Given Usuario ja adicionou ao carrinho no minimo um produto 
     And Informou o tipo de servico de entrega <nCdServico>
     And O CEP do usuario eh conhecido pelo sistema <sCepDestino>
     And O CEP da CompreFacil eh conhecido pelo sistema <sCepOrigem>
     And O peso dos produtos sao conhecidos pelo sistema <nVlPeso> 
	 And O formato do envio eh diferente de envelope <nCdFormato>
     And O comprimento dos produtos sao conhecidos pelo sistema <nVlComprimento>
     And A altura dos produtos sao conhecidas pelo sistema <nVlAltura>
     And A largura dos produtos sao conhecidas pelos sistema <nVlLargura>
     And O diametro dos produtos sao conhecidos pelo sistema <nVlDiametro>
     When O sistema envia os dados aos Correios
     Then Exibe valor e prazo de entrega

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato    | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |  23kg   |2(Pacote/Caixa)|     105cm		 |    12cm   | 	  21cm	  |     0cm	    |   N (fixo)	|       0 (fixo)    |      S (fixo)	      |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |  0,8kg	|1(Rolo/Prisma) | 	   32cm		 |    0,6cm  |	 36,7cm   |     4cm     |   N (fixo)    |       0 (fixo)    |	   S (fixo)		  |
		

 Scenario Outline: Calculo de Preco do Frete, formato da encomenda em envelope.
     Given Usuario ja adicionou ao carrinho no minimo um produto 
     And Informou o tipo de servico de entrega <nCdServico>
     And O CEP do usuario eh conhecido pelo sistema <sCepDestino>
     And O CEP da CompreFacil eh conhecido pelo sistema <sCepOrigem>
     And O peso eh inferior ou igual eh 1kg <nVlPeso> 
	 And O formato do envio eh envelope <nCdFormato>
     And O comprimento dos produtos sao conhecidos pelo sistema <nVlComprimento>
     And A altura dos produtos sao conhecidas pelo sistema <nVlAltura>
     And A largura dos produtos sao conhecidas pelos sistema <nVlLargura>
     And O diametro dos produtos sao conhecidos pelo sistema <nVlDiametro>
     When O sistema envia os dados aos Correios
     Then Exibe valor do frete

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |   1kg   |3 (Envelope)|     15cm		  |    0cm    | 	2cm	   |     0cm     |   N (fixo)	 |       0 (fixo)    |      S (fixo)	   |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |   0,5kg	|3 (Envelope)| 	   23cm		  |    0cm    |	   6,7cm   |     1cm     |   N (fixo)    |       0 (fixo)    |	  S (fixo)		   |
		

  Scenario Outline: Calculo de Preco do Frete, formato da encomenda diferente de envelope.
     Given Usuario ja adicionou ao carrinho no minimo um produto 
     And Informou o tipo de servico de entrega <nCdServico>
     And O CEP do usuario eh conhecido pelo sistema <sCepDestino>
     And O CEP da CompreFacil eh conhecido pelo sistema <sCepOrigem>
     And O peso dos produtos sao conhecidos pelo sistema  <nVlPeso>
	 And O formato do envio eh diferente de envelope <nCdFormato>
     And O comprimento dos produtos sao conhecidos pelo sistema <nVlComprimento>
     And A altura dos produtos sao conhecidas pelo sistema <nVlAltura>
     And A largura dos produtos sao conhecidas pelos sistema <nVlLargura>
     And O diametro dos produtos sao conhecidos pelo sistema <nVlDiametro> 
     When O sistema envia os dados aos Correios
     Then Exibe valor do frete

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato    | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |  23kg   |2(Pacote/Caixa)|     105cm		 |    12cm   | 	  21cm	  |     0cm	    |   N (fixo)	|       0 (fixo)    |      S (fixo)	      |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |  0,8kg	|1(Rolo/Prisma) | 	   32cm		 |    0,6cm  |	 36,7cm   |     4cm     |   N (fixo)    |       0 (fixo)    |	   S (fixo)		  |
		
 Scenario Outline: Calculo de Prazo de entrega do Frete
     Given Usuario ja adicionou ao carrinho no minimo um produto 
     And Informou o tipo de servico de entrega <nCdServico >
     And O CEP do usuario eh conhecido pelo sistema <sCepDestino>
     And O CEP da CompreFacil eh conhecido pelo sistema <sCepOrigem>
     When O sistema envia os dados aos Correios
     Then Exibe valor e prazo de entrega

     Examples: 
		| sCepOrigem  | sCepDestino | nCdServico               | 
		|  11092899   |  126003928  | 40215 (SEDEX 10 Varejo)  | 
		|  11092899   |  134068466  | 40290 (SEDEX Hoje Varejo)| 
		
								