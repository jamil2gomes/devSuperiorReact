package com.devSuperior.devVendas.controllers;

import org.springframework.web.bind.annotation.*;
import com.devSuperior.devVendas.dto.*;

import com.devSuperior.devVendas.services.SaleService;
import org.springframework.http.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> sellers = service.findAll(pageable);
		return ResponseEntity.ok(sellers);
	}

	@GetMapping(value = "/sum-by-seller")
	public ResponseEntity<List<SellerSumDTO>> groupedBySeller() {
		List<SellerSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}

	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SuccessSellerDTO>> successBySeller() {
		List<SuccessSellerDTO> list = service.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}

}
