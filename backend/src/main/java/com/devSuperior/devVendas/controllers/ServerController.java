package com.devSuperior.devVendas.controllers;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.devSuperior.devVendas.dto.SellerDTO;
import com.devSuperior.devVendas.services.SellerService;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value="/sellers")
public class ServerController {
	
	@Autowired
	private SellerService service;
	
	public ResponseEntity<List<SellerDTO>> findAll(){
		List<SellerDTO> sellers = service.findAll();
		return ResponseEntity.ok(sellers);
	}

}
