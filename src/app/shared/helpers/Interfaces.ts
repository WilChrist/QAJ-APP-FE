export interface IAuthor {
  id: number;
  full_name: string;
  popular_name: string;
  biography: string;
  link_to_full_biography: string;
  image_url: string;
  created_at: string;
  updated_at: string;

  quotes?: IQuote[];
}
export interface ILanguage {
  id: number;
  name: string;
}
export interface IQuote {
  id: number;
  content: string;
  link_to_the_source: string;
  approuved: boolean;
  created_at: string;
  updated_at: string;
  language_id: number;
  user_id: number;

  author?: IAuthor;
  topics?: ITopic[];
  language?: ILanguage;
}
export interface ITopic {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;

  quotes?: IQuote[];
}
