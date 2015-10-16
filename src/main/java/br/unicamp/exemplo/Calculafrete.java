package br.unicamp.exemplo;

import br.unicamp.comprefacil.dao.DadosDeEntregaDAO;

public class Calculafrete {
	
	public DadosDeEntregaDAO dao;
	private String nCdServico;
	private String sCepOrigem;
	private String sCepDestino;
	private String nVlPeso;
	private int nCdFormato;
	private Double nVlComprimento;
	private Double nVlAltura;
	private Double nVlLargura;
	private Double nVlDiametro;
	private String sCdMaoPropria;
	private Double nVlValorDeclarado;
	private String sCdAvisoRecebimento;
	private double valorFrete; // tem que entrar na tabela de retorno no feature
	private int diasEntrega; // tem que entrar na tabela de retorno no feature
	
	public Calculafrete(DadosDeEntregaDAO dao) {
		this.dao = dao;		
	}
	
	public void salvar(Double valorFrete, Integer diasEntrega){
		dao.saveDadosDeEntrega(valorFrete, diasEntrega);
	}
	
	public String getnCdServico() {
		return nCdServico;
	}

	public void setnCdServico(String nCdServico) {
		this.nCdServico = nCdServico;
	}

	public String getsCepOrigem() {
		return sCepOrigem;
	}

	public void setsCepOrigem(String sCepOrigem) {
		this.sCepOrigem = sCepOrigem;
	}

	public String getsCepDestino() {
		return sCepDestino;
	}

	public void setsCepDestino(String sCepDestino) {
		this.sCepDestino = sCepDestino;
	}

	public String getnVlPeso() {
		return nVlPeso;
	}

	public void setnVlPeso(String nVlPeso) {
		this.nVlPeso = nVlPeso;
	}

	public int getnCdFormato() {
		return nCdFormato;
	}

	public void setnCdFormato(int nCdFormato) {
		this.nCdFormato = nCdFormato;
	}

	public Double getnVlComprimento() {
		return nVlComprimento;
	}

	public void setnVlComprimento(Double nVlComprimento) {
		this.nVlComprimento = nVlComprimento;
	}

	public Double getnVlAltura() {
		return nVlAltura;
	}

	public void setnVlAltura(Double nVlAltura) {
		this.nVlAltura = nVlAltura;
	}

	public Double getnVlLargura() {
		return nVlLargura;
	}

	public void setnVlLargura(Double nVlLargura) {
		this.nVlLargura = nVlLargura;
	}

	public Double getnVlDiametro() {
		return nVlDiametro;
	}

	public void setnVlDiametro(Double nVlDiametro) {
		this.nVlDiametro = nVlDiametro;
	}

	public String getsCdMaoPropria() {
		return sCdMaoPropria;
	}

	public void setsCdMaoPropria(String sCdMaoPropria) {
		this.sCdMaoPropria = sCdMaoPropria;
	}

	public Double getnVlValorDeclarado() {
		return nVlValorDeclarado;
	}

	public void setnVlValorDeclarado(Double nVlValorDeclarado) {
		this.nVlValorDeclarado = nVlValorDeclarado;
	}

	public String getsCdAvisoRecebimento() {
		return sCdAvisoRecebimento;
	}

	public void setsCdAvisoRecebimento(String sCdAvisoRecebimento) {
		this.sCdAvisoRecebimento = sCdAvisoRecebimento;
	}

	public double getValorFrete() {
		return valorFrete;
	}

	public int getDiasEntrega() {
		return diasEntrega;
	}

	public void setDiasEntrega(int diasEntrega) {
		this.diasEntrega = diasEntrega;
	}

	public void setValorFrete(double valorFrete) {
		this.valorFrete = valorFrete;
	}
	
	
	
}
