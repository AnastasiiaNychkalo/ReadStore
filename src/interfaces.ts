export interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  formats: { [key: string]: string };
  subjects: string[];
  languages: string;
  summaries: string;
  download_count: number;
}