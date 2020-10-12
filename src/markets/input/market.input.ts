import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class MarketSignUpInput {
  @Field()
  readonly brand: string;
  
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field({ nullable: true })
  readonly phone?: string;

  @Field()
  readonly logo: string;

  @Field()
  readonly cnpj: string;

  @Field()
  readonly cep: string;

  @Field()
  readonly number: number;
}

@InputType()
export class MarketUpdateInput {
  @Field(() => ID)
  readonly id: string;

  @Field({ nullable: true })
  readonly brand?: string;
  
  @Field({ nullable: true })
  readonly email?: string;

  @Field({ nullable: true })
  readonly password?: string;

  @Field({ nullable: true })
  readonly phone?: string;

  @Field({ nullable: true })
  readonly logo?: string;

  @Field({ nullable: true })
  readonly cep?: string;

  @Field({ nullable: true })
  readonly number?: number;
}