# language: pt

Funcionalidade: Endereco
  Como sistema
  Quero buscar o endereco de um usuario a partir do seu CEP

Cenario: Buscar endereco
	Dado O CEP do usuario e conhecido pelo sistema
	Quando O sistema faz a busca do endereco nos correios
	Entao Os correios retorna o endereco completo do usuario
	"""
	{"cep": "01001-000", "logradouro": "Praça da Sé", "complemento": "lado ímpar", "bairro": "Sé", "localidade": "São Paulo", "uf": "SP", "ibge": "3550308"}
	"""