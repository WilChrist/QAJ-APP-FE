import { Injectable } from '@angular/core';
import { IAuthor, ILanguage, IQuote, ITopic } from 'src/app/shared/helpers/Interfaces';
import { allAuthors, allLanguages, allQuotes, allTopics } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getAllAuthors(): IAuthor[] {
    return allAuthors;
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
  getAllTopics(): ITopic[] {
    return allTopics;
  }
  getTopicById(id: number): ITopic {
    return allTopics.find(t => t.id === id);
  }
  /*getQuotesByTopicId(id: number): IQuote[] {
    return allQuotes.filter((q) => {
      return q.topic_id === id;
    });
  }*/
}
