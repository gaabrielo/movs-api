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
  @Field({ nullable: true })
  category: string;
}

@InputType()
class UpdateMovieProps {
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  cover: string;
  @Field({ nullable: true })
  category: string;
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

  @Query(() => Movie)
  async getMovieById(@Arg('movieId') movieId: MovieId) {
    const movie = await MovieSchema.findById(movieId);
    return movie;
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

  @Mutation(() => Movie)
  async updateMovie(
    @Arg('movieId') movieId: MovieId,
    @Arg('movieInput') movieInput: UpdateMovieProps
  ) {
    const movie = await MovieSchema.findByIdAndUpdate(movieId._id, movieInput);

    return movie;
  }
}

export default MovieResolver;
