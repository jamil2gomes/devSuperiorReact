package com.devSuperior.devVendas.dto;

import java.io.Serializable;

import com.devSuperior.devVendas.entities.Seller;

public class SuccessSellerDTO implements Serializable  {
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Long deals;
	private Long visited;
	
	public SuccessSellerDTO() {}

	public SuccessSellerDTO(Seller seller, Long deals, Long visited) {
		
		sellerName = seller.getName();
		this.deals = deals;
		this.visited = visited;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

	public Long getVisited() {
		return visited;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

}
