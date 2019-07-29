package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Ticket
 */
@Entity
@Table(name="ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="number")
    private int number;

    @Column(name="description")
    private String description;

    @Column(name="priority")
    private String priority;

    @Column(name="open_date")
    private String openDate;

    @Column(name="closed_date")
    private String closedDate;

    @Column(name="remark")
    private String remark;
    
    @ManyToOne
    @JoinColumn(name="resolution_category_id")
    public Set<ResolutionCategory> resolutionCategory; // use singular here
    

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return this.priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getOpenDate() {
        return this.openDate;
    }

    public void setOpenDate(String openDate) {
        this.openDate = openDate;
    }

    public String getClosedDate() {
        return this.closedDate;
    }

    public void setClosedDate(String closedDate) {
        this.closedDate = closedDate;
    }

    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Set<ResolutionCategory> getResolutionCategory() {
        return this.resolutionCategory;
    }

    public void setResolutionCategory(Set<ResolutionCategory> resolutionCategory) {
        this.resolutionCategory = resolutionCategory;
    }

}