import { Component, OnInit } from '@angular/core';
import { TicketlistService } from '../ticketlist.service'
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {
  [x: string]: any;

  resolutionCategory = new FormControl(
    'None', 
    [Validators.required]
  )

  remark = new FormControl(
    ''
  )

  tickets = []
  title = '';
  isEdit = false;

  constructor(private route: ActivatedRoute, private ticketListService: TicketlistService) {}

  ngOnInit() {
    const type = this.route.snapshot.params.type

    if(type === 'all'){
      this.title = 'All Tickets';
      this.tickets = this.ticketListService.getTicketListAll();
    }
    else if(type === 'updated')
    {
      this.title = 'Updated Tickets';
      this.tickets = this.ticketListService.getTicketListUpdated();
    }
    if(type === 'notupdated')
    {
      this.title = 'Not Updated Tickets';
      this.isEdit = true;
      this.tickets = this.ticketListService.getTicketListNotUpdated();
    }

    
      
  }

  onSubmit(){
    
  }

}
