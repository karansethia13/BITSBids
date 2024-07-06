package com.servicebid.apis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servicebid.apis.models.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long>{
    
}
