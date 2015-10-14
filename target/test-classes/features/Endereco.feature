Feature: Endereco
  Como sistema
  Quero buscar o endereco de um usuario a partir do seu CEP

Scenario: Buscar endereco
	Dado O CEP do usuario e conhecido pelo sistema
	Quando O sistema faz a busca do endereco nos correios
	Entao Os correios retorna o endereco completo do usuario {"cep": "01001-000", "logradouro": "Praï¿½a da Sï¿½", "complemento": "lado ï¿½mpar", "bairro": "Sï¿½", "localidade": "Sï¿½o Paulo", "uf": "SP", "ibge": "3550308"}