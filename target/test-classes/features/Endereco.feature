Feature: Endereco
  Como sistema
  Quero buscar o endereco de um usuario a partir do seu CEP

Scenario: Buscar endereco
	Given O CEP do usuario e conhecido pelo sistema
	When O sistema faz a busca do endereco nos correios
	Then Os correios retorna o endereco completo do usuario "Praça da Se"