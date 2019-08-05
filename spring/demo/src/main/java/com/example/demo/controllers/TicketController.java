package com.example.demo.controllers;

import java.util.List;

import com.example.demo.entities.Ticket;
import com.example.demo.repositories.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



/**
 * TicketController
 */
@RestController
public class TicketController {

    /**
     *
     */
    
    private static final String THIS_IS_A_REMARK = "This is a remark";
    @Autowired
    private TicketRepository repository;

    @GetMapping(value="/tickets")
    public List<Ticket> getTickets(@RequestParam String query) {
        if (query.equals("all")) {
            return repository.findAll();
        };
        {
        if (query.equals("updated")) {
            return repository.findUpdatedTickets();
        };
        {
            if(query.equals("notupdated")){
            return repository.findTicketsNotUpdated();
            };
           }
        return getTickets(query);
    }


        }
 
   //api/tickets?query=all
    //api/tickets?query=updated
    //api/tickets?query=notupdated
    //api/tickets/23
    @PostMapping(value="/tickets/{id}")
    public List<Ticket> getTicketsEditTickets(@PathVariable Long id) {
        Ticket ticket = repository.findById(id).orElse(null);
        ticket.setPriority(null);
        ticket.setRemark(THIS_IS_A_REMARK);
        repository.save(ticket);
        return repository.findEditTickets();
    }


}