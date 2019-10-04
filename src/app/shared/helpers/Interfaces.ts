export interface IAuthor {
  id: number;
  full_name: string;
  popular_name: string;
  biography: string;
  link_to_full_biography: string;
  image_url: string;
  created_at: string;
  updated_at: string;
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
  author: string;
  author_id: number;
  author_img: string;
  language_id: number;
  user_id: number;
}
