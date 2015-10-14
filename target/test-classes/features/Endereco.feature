Feature: Endereco
  Como sistema
  Quero buscar o endereco de um usuario a partir do seu CEP

Scenario: Buscar endereco
	Dado O CEP do usuario e conhecido pelo sistema
	Quando O sistema faz a busca do endereco nos correios
	Entao Os correios retorna o endereco completo do usuario "Praça da Se"