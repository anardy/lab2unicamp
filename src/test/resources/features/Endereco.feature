# language: pt

Funcionalidade: Endereco
  Como sistema
  Quero buscar o endereco de um usuario a partir do seu CEP

Cenario: Buscar endereco
	Dado O CEP do usuario e conhecido pelo sistema 01001000
	Quando O sistema faz a busca do endereco nos correios
	Entao Os correios retorna o endereco completo do usuario
	"""
	{"cep": "01001-000", "logradouro": "Praça da Sé", "complemento": "lado ímpar", "bairro": "Sé", "localidade": "São Paulo", "uf": "SP", "ibge": "3550308"}
	"""
Cenario: Buscar endereco
	Dado O CEP do usuario nao é conhecido pelo sistema 8888888
	Quando O sistema faz a busca do endereco nos correios
	Entao Os correios retorna um erro com a mensagem
	"""
	/ cep invalido
	"""	
	
