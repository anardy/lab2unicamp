package br.unicamp.comprefacil.dao;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;

public class DadosDeEnderecoDAOTest {
	@Mock
	private DadosDeEnderecoDAO dao;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void saveDadosDeEntrega() {
		when(dao.saveDadosEndereco("01001-000", "Praça da Sé")).thenReturn(true);
	}
}
