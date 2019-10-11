import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAuthor, ILanguage, IQuote, ITopic } from 'src/app/shared/helpers/Interfaces';
import { allAuthors, allLanguages, allQuotes, allTopics } from 'src/app/data/data';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  getAllAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.toTheUrlOf('authors'));
  }
  getAuthorById(id: number): IAuthor {
    return allAuthors.find(a => a.id === id);
  }
  getAllLanguages(): ILanguage[] {
    return allLanguages;
  }
  getLanguageById(id: number): ILanguage {
    return allLanguages.find(l => l.id === id);
  }
  getAllQuotes(): IQuote[] {
    return allQuotes;
  }
  getQuoteById(id: number): IQuote {
    return allQuotes.find(q => q.id === id);
  }
  getQuotesByAuthorId(id: number): IQuote[] {
    return allQuotes.filter(q => q.author_id === id);
  }
  getAllTopics(): Observable<ITopic[]> {
    return this.http.get<ITopic[]>(this.toTheUrlOf('categories'));
  }
  getTopicById(id: number): ITopic {
    return allTopics.find(t => t.id === id);
  }
  /*getQuotesByTopicId(id: number): IQuote[] {
    return allQuotes.filter((q) => {
      return q.topic_id === id;
    });
  }*/
  toTheUrlOf(objectType: string, withId?: number, forAction?: string): string {
    let url = this.apiBaseUrl + '/api/' + objectType;
    if (withId !== undefined) {
      url += '/' + withId;
      if (forAction !== undefined) {
        url += '/' + forAction;
      }
    }
    return url;
  }
}
