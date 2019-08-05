package com.example.demo.repositories;

import java.util.List;

import com.example.demo.entities.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


/**
 * TicketRepository
 */
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByNumber(String number);
    List<Ticket> findByDescription(String description);
    List<Ticket> findByPriority(String priority);
    List<Ticket> findByOpenDate(String openDate);
    List<Ticket> findByClosedDate(String closedDate);
    List<Ticket> findByremark(String remark);

    @Query("SELECT t FROM Ticket t WHERE t.remark != ''")
    List<Ticket> findUpdatedTickets();
 
    // with variables
    @Query("SELECT t FROM Ticket t WHERE t.remark = ''")
    List<Ticket> findTicketsNotUpdated();

    @Query("SELECT t FROM Ticket t WHERE t.remark = ''")
    List<Ticket> findEditTickets();
 
}