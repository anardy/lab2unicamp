# encoding: UTF-8
Feature: CalculaFrete
  Como sistema
  Quero calcular o pre�o e prazo de entrega do frete, incluindo embalagem
  
  Scenario: C�lculo de Pre�o e Prazo de entrega do Frete, formato da encomenda em envelope.
     Given Informo o tipo de servi�o
     And O CEP do usuario � conhecido pelo sistema
     And O CEP da CompreFacil � conhecido pelo sistema
     And O peso � inferior ou igual � 1kg
	 And O formato do envio � envelope
     And O comprimento dos produtos s�o conhecidos pelo sistema
     And A altura dos produtos s�o conhecidas pelo sistema
     And A largura dos produtos s�o conhecidas pelos sistema
     And O di�metro dos produtos s�o conhecidos pelo sistema 
     When O sistema envia os dados aos Correios
     Then Exibe valor e prazo de entrega

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |   1kg   |3 (Envelope)|     15cm		  |    0cm    | 	2cm	   |     0cm     |   N (fixo)	 |       0 (fixo)    |      S (fixo)	   |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |   0,5kg	|3 (Envelope)| 	   23cm		  |    0cm    |	   6,7cm   |     1cm     |   N (fixo)    |       0 (fixo)    |	  S (fixo)		   |
		

  Scenario: C�lculo de Pre�o e Prazo de entrega do Frete, formato da encomenda diferente de envelope.
     Given Informo o tipo de servi�o
     And O CEP do usuario � conhecido pelo sistema
     And O CEP da CompreFacil � conhecido pelo sistema
     And O peso dos produtos s�o conhecidos pelo sistema 
	 And O formato do envio � diferente de envelope
     And O comprimento dos produtos s�o conhecidos pelo sistema
     And A altura dos produtos s�o conhecidas pelo sistema
     And A largura dos produtos s�o conhecidas pelos sistema
     And O di�metro dos produtos s�o conhecidos pelo sistema 
     When O sistema envia os dados aos Correios
     Then Exibe valor e prazo de entrega

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato    | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |  23kg   |2(Pacote/Caixa)|     105cm		 |    12cm   | 	  21cm	  |     0cm	    |   N (fixo)	|       0 (fixo)    |      S (fixo)	      |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |  0,8kg	|1(Rolo/Prisma) | 	   32cm		 |    0,6cm  |	 36,7cm   |     4cm     |   N (fixo)    |       0 (fixo)    |	   S (fixo)		  |
		

 Scenario: C�lculo de Pre�o do Frete, formato da encomenda em envelope.
     Given Informo o tipo de servi�o
     And O CEP do usuario � conhecido pelo sistema
     And O CEP da CompreFacil � conhecido pelo sistema
     And O peso � inferior ou igual � 1kg
	 And O formato do envio � envelope
     And O comprimento dos produtos s�o conhecidos pelo sistema
     And A altura dos produtos s�o conhecidas pelo sistema
     And A largura dos produtos s�o conhecidas pelos sistema
     And O di�metro dos produtos s�o conhecidos pelo sistema 
     When O sistema envia os dados aos Correios
     Then Exibe valor do frete

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |   1kg   |3 (Envelope)|     15cm		  |    0cm    | 	2cm	   |     0cm     |   N (fixo)	 |       0 (fixo)    |      S (fixo)	   |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |   0,5kg	|3 (Envelope)| 	   23cm		  |    0cm    |	   6,7cm   |     1cm     |   N (fixo)    |       0 (fixo)    |	  S (fixo)		   |
		

  Scenario: C�lculo de Pre�o do Frete, formato da encomenda diferente de envelope.
     Given Informo o tipo de servi�o
     And O CEP do usuario � conhecido pelo sistema
     And O CEP da CompreFacil � conhecido pelo sistema
     And O peso dos produtos s�o conhecidos pelo sistema 
	 And O formato do envio � diferente de envelope
     And O comprimento dos produtos s�o conhecidos pelo sistema
     And A altura dos produtos s�o conhecidas pelo sistema
     And A largura dos produtos s�o conhecidas pelos sistema
     And O di�metro dos produtos s�o conhecidos pelo sistema 
     When O sistema envia os dados aos Correios
     Then Exibe valor do frete

     Examples: 
		| nCdEmpresa  | sDsSenha | nCdServico          | sCepOrigem | sCepDestino | nVlPeso | nCdFormato    | nVlComprimento | nVlAltura | nVlLargura | nVlDiametro | sCdMaoPropria | nVlValorDeclarado | sCdAvisoRecebimento |
		| null(fixo)  |null(fixo)| 41106 (PAC Varejo)  |  11092899  | 126003928	  |  23kg   |2(Pacote/Caixa)|     105cm		 |    12cm   | 	  21cm	  |     0cm	    |   N (fixo)	|       0 (fixo)    |      S (fixo)	      |
		| null(fixo)  |null(fixo)| 40010 (SEDEX Varejo)|  11092899  | 134068466	  |  0,8kg	|1(Rolo/Prisma) | 	   32cm		 |    0,6cm  |	 36,7cm   |     4cm     |   N (fixo)    |       0 (fixo)    |	   S (fixo)		  |
		
 Scenario: C�lculo de Prazo de entrega do Frete
     Given Informo o tipo de servi�o
     And O CEP do usuario � conhecido pelo sistema
     And O CEP da CompreFacil � conhecido pelo sistema
     When O sistema envia os dados aos Correios
     Then Exibe valor e prazo de entrega

     Examples: 
		| sCepOrigem  | sCepDestino | nCdServico               | 
		|  11092899   |  126003928  | 40215 (SEDEX 10 Varejo)  | 
		|  11092899   |  134068466  | 40290 (SEDEX Hoje Varejo)| 
		
								