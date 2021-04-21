import {Photo} from './photo';
import {Video} from './video';

export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  photoId: string;
  photo: Photo;
  video: Video[];
}
