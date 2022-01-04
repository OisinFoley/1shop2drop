import { Types } from '../shared';
export interface DirectoryState {
  sections: Types.DirectoryItem[];
}

export interface DirectoryItem {
  title: string;
  imageUrl: string;
  id: number | null;
  linkUrl: string;
  size?: string;
}
