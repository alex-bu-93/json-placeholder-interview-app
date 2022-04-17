import { Photo } from '@widgets/paginated-photos';

export type LastPhoto = Photo;

export interface LastPost {
  id: number;
  title: string;
  body: string;
}

export interface Dashboard {
  lastPhotos: LastPhoto[],
  lastPosts: LastPost[]
}
