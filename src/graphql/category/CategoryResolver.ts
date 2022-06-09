import { Query, Resolver, InputType, Arg, Mutation, Field } from 'type-graphql';
import Category from './Category';
import CategorySchema from '../../model/CategorySchema';

@InputType()
class CategoryInput {
  @Field()
  description: string;
  @Field()
  name: string;
}

@InputType()
class CategoryUpdateInput {
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  name: string;
  @Field()
  _id: string;
}

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();
    return categories;
  }

  @Mutation(() => Category)
  async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    const category = await CategorySchema.create(categoryInput);
    return category;
  }

  @Mutation(() => Category)
  async updateCategory(
    @Arg('categoryInput') categoryInput: CategoryUpdateInput
  ) {
    const category = await CategorySchema.findByIdAndUpdate(
      categoryInput._id,
      categoryInput
    );

    return category;
  }
}

export default CategoryResolver;
