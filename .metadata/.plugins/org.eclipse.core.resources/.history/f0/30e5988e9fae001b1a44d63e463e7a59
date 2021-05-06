package com.devSuperior.devVendas.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devSuperior.devVendas.repositories.SaleRepository;
import com.devSuperior.devVendas.entities.Sale;
import com.devSuperior.devVendas.dto.SaleDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repo;
	
	public Page<SaleDTO> findAll(Pageable pageable){
		Page<Sale> sellers =  repo.findAll(pageable);
		
		return sellers.map(seller -> new SaleDTO(seller));
	}

}
