package com.devSuperior.devVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.devSuperior.devVendas.entities.Sale;
import com.devSuperior.devVendas.dto.SellerSumDTO;
import com.devSuperior.devVendas.dto.SuccessSellerDTO;
import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT new com.devSuperior.devVendas.dto.SellerSumDTO(obj.saler, SUM(obj.amount)) FROM Sale AS obj GROUP BY obj.saler")
	List<SellerSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.devSuperior.devVendas.dto.SuccessSellerDTO(obj.saler, SUM(obj.visited), SUM(obj.deals)) FROM Sale AS obj GROUP BY obj.saler")
	List<SuccessSellerDTO> successGroupedBySeller();

}
