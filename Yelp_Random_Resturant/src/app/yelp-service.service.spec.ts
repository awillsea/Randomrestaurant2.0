import { TestBed } from '@angular/core/testing';

import { YelpServiceService } from './yelp-service.service';

describe('YelpServiceService', () => {
  let service: YelpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YelpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
