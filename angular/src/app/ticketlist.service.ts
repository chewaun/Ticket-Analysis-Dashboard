import { Injectable } from '@angular/core';

export interface Ticket {
  number: string
  description: string
  priority: string
  open_date: string
  closed_date: string
  resolution_category: string
  remark: string
}

@Injectable({
  providedIn: 'root'
})
export class TicketlistService {

  constructor() { }

  tickets: Ticket[] = [
    {
      number: 'INC8627103',
      description: 'SPLUNK_OTC_DASHBOARD_MQ_GAFT.QL.ORDER_STATUS_APJ age msg higher than 30min not consuming',
      priority: '3 - Medium',
      open_date: '2019-04-07 12:47:26',
      closed_date: '2019-04-08 12:47:26',
      resolution_category: 'Self-Recovery',
      remark: 'No IT action'
    },
    {
      number: 'INC9354295',
      description: 'This case relates to ANZ and not EMEA but had no option in drop down to select EBOSS ANZ/ APJ',
      priority: '4 - Low',
      open_date: '2019-06-26 21:45:30',
      closed_date: '2019-06-27 11:44:00',
      resolution_category: 'Release Defect',
      remark: 'Code component missed'
    },
    {
      number: 'INC9467484',
      description: 'AR_Autoinvoice Errors_-_Interface Autoinvoice_-_OMEGA (34653)',
      priority: '3 - Medium',
      open_date: '2019-07-12 12:12:08',
      closed_date: '2019-07-12 22:22:28',
      resolution_category: '',
      remark: ''
    },
  ]

  getTicketListAll() {
    let result = []
    for (let ticket of this.tickets) {
        result.push(ticket)
    }
    return result
  }

  getTicketListUpdated() {
    let result = []
    for (let ticket of this.tickets) {
      if (ticket.resolution_category !== '') {
        result.push(ticket)
      }
    }
    return result
  }

  getTicketListNotUpdated() {
    let result = []
    for (let ticket of this.tickets) {
      if (ticket.resolution_category === '') {
        result.push(ticket)
      }
    }
    return result
  }

}
