package com.devSuperior.devVendas.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devSuperior.devVendas.repositories.SellerRepository;
import com.devSuperior.devVendas.entities.Seller;
import java.util.List;
import com.devSuperior.devVendas.dto.SellerDTO;
import java.util.stream.Collectors;
@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repo;
	
	public List<SellerDTO> findAll(){
		List<Seller> sellers =  repo.findAll();
		
		return sellers.stream().map(seller -> new SellerDTO(seller)).collect(Collectors.toList());
	}

}
