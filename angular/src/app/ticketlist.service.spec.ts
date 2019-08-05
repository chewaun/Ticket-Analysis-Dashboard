import { TestBed } from '@angular/core/testing';

import { TicketlistService } from './ticketlist.service';

describe('TicketlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketlistService = TestBed.get(TicketlistService);
    expect(service).toBeTruthy();
  });
});
