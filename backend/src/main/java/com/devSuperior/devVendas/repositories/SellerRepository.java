package com.devSuperior.devVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devSuperior.devVendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
