import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule, TestRequest} from '@angular/common/http/testing';

import { IAuthor, ILanguage, IQuote, ITopic } from 'src/app/shared/helpers/Interfaces';
import { allAuthors, allLanguages, allQuotes, allTopics } from 'src/app/data/data';
import { DataService } from './data.service';
import { from } from 'rxjs';
import { SimpleError } from 'src/app/shared/helpers/Classes';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});

describe('DataService Topics related tests', () => {
  let dataService: DataService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    dataService = TestBed.get(DataService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return all topics', () => {
    dataService.getAllTopics().subscribe((data: ITopic[]) => {
      expect(data.length).toBe(4);
    });

    const topicsRequest: TestRequest = httpTestingController.expectOne(dataService.toTheUrlOf('categories'));

    expect(topicsRequest.request.method).toEqual('GET');

    topicsRequest.flush(allTopics);
  });

  it('should return a SimpleError', () => {
    dataService.getAllTopics().subscribe(
      (data: ITopic[]) => { fail('this should have beenan error'); },
      (error: SimpleError) => {
        expect(error.errorNumber).toEqual(0);
        expect(error.userFriendlyMessage).toEqual('An error occured while retrieving data');
      });

    const topicsRequest: TestRequest = httpTestingController.expectOne(dataService.toTheUrlOf('categories'));

    expect(topicsRequest.request.method).toEqual('GET');

    topicsRequest.flush('error', {status: 500, statusText: 'Server Error'});
  });
});
