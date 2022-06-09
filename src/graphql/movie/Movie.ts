import { Field, ObjectType } from 'type-graphql';

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
  // @Field()
  // category: string;
  @Field()
  cover: string;
  @Field()
  _id: string;
}

export default Movie;
