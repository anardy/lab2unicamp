package br.unicamp.exemplo;

import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;

public class Calculafrete {
	
	public DadosDeEntregaDAO dao;
	private double valorFrete;
	private int diasEntrega;
	
	public Calculafrete(DadosDeEntregaDAO dao) {
		this.dao = dao;		
	}
	
	public void salvar(double valorFrete, int diasEntrega){
		dao.saveDadosDeEntrega(valorFrete, diasEntrega);
	}

	public double getValorFrete() {
		return valorFrete;
	}

	public int getDiasEntrega() {
		return diasEntrega;
	}

	private void setDiasEntrega(int diasEntrega) {
		this.diasEntrega = diasEntrega;
	}

	private void setValorFrete(double valorFrete) {
		this.valorFrete = valorFrete;
	}
	
	
	
}
