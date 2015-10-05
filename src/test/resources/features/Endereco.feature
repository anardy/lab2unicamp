Feature: Endereco
  Como sistema
  Quero obter o endereco de um usuario a partir do seu CEP

Scenario: Obter endereco
	Given O CEP do usuario e conhecido pelo sistema
	When O sistema faz a busca do endereco nos correios
	Then Os correios retorna o endereco completo do usuario