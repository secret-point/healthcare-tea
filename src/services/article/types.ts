export interface IArticle {
  id: number;
  title: string;
  image: string;
  content?: string;
  video?: string;
}

export interface ISummaryArticle {
  id: string;
  status: string;
  title: string;
  topic: string;
  topicId: string;
  coverImageUrl: string;
  createdBy: string;
}

export interface IContent {
  id: string;
  parentId: string;
  title: string;
  code: string;
}

export interface ITool {
  id: string;
  title: string;
  content: string;
  contentId: string;
}

export interface IDetailContent {
  id: string;
  age: string;
  content: string;
  coverImageUrl: string;
  createdBy: string;
  language: string;
  status: string;
  summary: string;
  title: string;
  topic: string;
  topicId: string;
  tools: ITool[];
}
