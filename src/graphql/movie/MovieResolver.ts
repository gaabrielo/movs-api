import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import MovieSchema from '../../model/MovieSchema';
import Movie from './Movie';

@InputType()
class MovieInput {
  @Field()
  description: string;
  @Field()
  name: string;
  @Field()
  cover: string;
  // @Field()
  // category: string;
}

@InputType()
class MovieId {
  @Field()
  _id: string;
}

@Resolver(Movie)
class MovieResolver {
  @Query(() => [Movie])
  async movies() {
    const movies = await MovieSchema.find();
    return movies;
  }

  @Mutation(() => Movie)
  async createMovie(@Arg('movieInput') movieInput: MovieInput) {
    const movie = await MovieSchema.create(movieInput);
    return movie;
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg('movieId') movieId: MovieId) {
    try {
      await MovieSchema.deleteOne({ _id: movieId });
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default MovieResolver;
