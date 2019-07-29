package com.example.demo.controllers;

import java.util.List;

import com.example.demo.entities.ResolutionCategory;
import com.example.demo.repositories.ResolutionCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ResolutionCategoryController
 */
@RestController
public class ResolutionCategoryController {

    @Autowired
    private ResolutionCategoryRepository repository;

    @GetMapping(value="/resolutionacategories")
    public List<ResolutionCategory> getResolutionCategories() {
        return repository.findAll();
    }

}