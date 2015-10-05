package br.unicamp.exemplo;

public class Endereco {
	
	private String cep;
	private String endereco;
	
	public Endereco(String cep) {
		this.cep = cep;
	}

    public void buscar() {
    	// TODO: utilizar o WireMock para fazer mock desse serviço. 	
        endereco = "{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\"}";
    }

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
        
}
