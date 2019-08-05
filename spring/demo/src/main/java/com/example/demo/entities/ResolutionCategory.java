package com.example.demo.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

// @JsonIdentityInfo(
//     generator = ObjectIdGenerators.PropertyGenerator.class,
//     property = "id"
// )

/**
 * ResolutionCategory
 */
@Entity
@Table(name="resolution_category")
public class ResolutionCategory {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // One resolution category can be used by many incidents
    @JsonManagedReference
    @OneToMany(mappedBy="resolutionCategoryId")
    public List<Ticket> tickets;
    //= new ArrayList<>()
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ticket> getTickets() {
        return this.tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    
}