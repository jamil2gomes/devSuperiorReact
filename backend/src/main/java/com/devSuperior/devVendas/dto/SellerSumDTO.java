package com.devSuperior.devVendas.dto;

import java.io.Serializable;

import com.devSuperior.devVendas.entities.Seller;

public class SellerSumDTO implements Serializable  {
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double sum;
	
	public SellerSumDTO() {}

	public SellerSumDTO(Seller sellerName, Double sum) {
		this.sellerName = sellerName.getName();
		this.sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}

}
