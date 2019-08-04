package com.example.demo.controllers;

import java.util.List;

import com.example.demo.entities.Ticket;
import com.example.demo.repositories.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TicketController
 */
@RestController
public class TicketController {

    @Autowired
    private TicketRepository repository;

    @GetMapping(value="/tickets/all")
    public List<Ticket> getTickets() {
        return repository.findAll();
    }

    @GetMapping(value="/tickets/updated")
    public List<Ticket> getUpdatedTickets() {
        return repository.findUpdatedTickets();
    }

    @GetMapping(value="/tickets/not-updated")
    public List<Ticket> getTicketsNotUpdated() {
        return repository.findTicketsNotUpdated();
    }

}