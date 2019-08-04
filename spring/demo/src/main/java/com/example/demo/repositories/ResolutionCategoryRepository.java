package com.example.demo.repositories;

import java.util.List;

import com.example.demo.entities.ResolutionCategory;

import org.springframework.data.jpa.repository.JpaRepository;


/**
 * ResolutionCategoryRepository
 */
public interface ResolutionCategoryRepository extends JpaRepository<ResolutionCategory, Long> {

    List<ResolutionCategory> findByName(String name);
}