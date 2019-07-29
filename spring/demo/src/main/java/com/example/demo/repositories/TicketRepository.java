package com.example.demo.repositories;

import com.example.demo.entities.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;


/**
 * TicketRepository
 */
public interface TicketRepository extends JpaRepository<Ticket, Long> {


}