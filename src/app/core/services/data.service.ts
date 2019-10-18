import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IAuthor, ILanguage, IQuote, ITopic } from 'src/app/shared/helpers/Interfaces';
import { allAuthors, allLanguages, allQuotes, allTopics } from 'src/app/data/data';
import { environment } from './../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { SimpleError } from 'src/app/shared/helpers/Classes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  count = 0;
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  getAllAuthors(): Observable<IAuthor[] | SimpleError> {
    return this.http.get<IAuthor[]>(this.toTheUrlOf('authors'))
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
  getAuthorById(id: number): IAuthor {
    return allAuthors.find(a => a.id === id);
  }
  getAllLanguages(): Observable<ILanguage[] | SimpleError>  {
    return this.http.get<ILanguage[]>(this.toTheUrlOf('languages'))
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
  getLanguageById(id: number): ILanguage {
    return allLanguages.find(l => l.id === id);
  }
  getAllQuotes(): Observable<IQuote[] | SimpleError> {
    return this.http.get<IQuote[]>(this.toTheUrlOf('quotes', undefined, 'include=author'))
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
  getQuoteById(id: number): IQuote {
    return allQuotes.find(q => q.id === id);
  }
  getQuotesByAuthorId(id: number): Observable<IAuthor | SimpleError> {
    return this.http.get<IAuthor>(this.toTheUrlOf('authors', id, 'include=quotes'))
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
  getAllTopics(): Observable<ITopic[] | SimpleError> {
    return this.http.get<ITopic[]>(this.toTheUrlOf('categories'))
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
  handleHttpError(err: HttpErrorResponse): Observable<SimpleError> {
    const dataError = new SimpleError(this.count++, err.statusText, 'An error occured while retrieving data');
    return throwError(dataError);
  }
  getTopicById(id: number): ITopic {
    return allTopics.find(t => t.id === id);
  }
  toTheUrlOf(objectType: string, withId?: number, queryParams?: string): string {
    let url = this.apiBaseUrl + '/api/' + objectType;
    if (withId !== undefined) {
      url += '/' + withId;
    }
    if (queryParams !== undefined) {
      url += '?' + queryParams;
    }
    return url;
  }
}
