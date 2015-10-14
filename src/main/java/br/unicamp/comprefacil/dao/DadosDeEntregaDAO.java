package br.unicamp.comprefacil.dao;

public interface DadosDeEntregaDAO {

	public void saveDadosDeEntrega(Double valorFrete, Integer diasEntrega);
	
	public void saveDadosDeEntrega(Integer diasEntrega);
	
}
