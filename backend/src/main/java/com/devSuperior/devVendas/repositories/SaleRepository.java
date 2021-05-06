package com.devSuperior.devVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devSuperior.devVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
