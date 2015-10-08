package br.unicamp.exemplo;

import br.unicamp.comprefacil.dao.DadosDeEnderecoDAO;

public class Endereco {
	
	private String cep;
	private String endereco;
	private DadosDeEnderecoDAO dao;
	
	public Endereco(DadosDeEnderecoDAO dadosDeEnderecoDAO) {
		this.dao = dadosDeEnderecoDAO;
	}

    public void buscar() {
    	// TODO: utilizar o WireMock para fazer mock desse serviço. 	
        endereco = "Praça da Se";
    }
    
    public void salvarEndereco() {
    	this.dao.saveDadosEndereco(endereco, cep);
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
