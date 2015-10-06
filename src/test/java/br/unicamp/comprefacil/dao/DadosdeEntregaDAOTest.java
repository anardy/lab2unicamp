package br.unicamp.comprefacil.dao;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;

public class DadosdeEntregaDAOTest {
	@Mock
	private DadosDeEntregaDAO dao;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void saveDadosDeEntrega() {
		when(dao.saveDadosDeEntrega(10.0, 2)).thenReturn(true);
	}
}
