import { Field, ObjectType } from 'type-graphql';
import Category from '../category/Category';

class FileInput implements Partial<any> {
  filename: string;
  mimetype: string;
  encoding: string;
}

@ObjectType()
class Movie {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  category: Category;
  @Field()
  cover: string;
  @Field()
  _id: string;
}

export default Movie;
