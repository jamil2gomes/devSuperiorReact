package com.devSuperior.devVendas.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devSuperior.devVendas.repositories.*;
import com.devSuperior.devVendas.entities.Sale;
import com.devSuperior.devVendas.dto.*;

import org.springframework.transaction.annotation.*;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repo;
	
	@Autowired
	private SellerRepository sellerRepo;
	
	@Transactional(readOnly= true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepo.findAll();
		Page<Sale> sellers =  repo.findAll(pageable);
		return sellers.map(seller -> new SaleDTO(seller));
	}
	
	@Transactional(readOnly= true)
	public List<SellerSumDTO> amountGroupedBySeller(){
		return repo.amountGroupedBySeller();
	}
	
	@Transactional(readOnly= true)
	public List<SuccessSellerDTO> successGroupedBySeller(){
		return repo.successGroupedBySeller();
	}

}
