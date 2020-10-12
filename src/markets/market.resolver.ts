import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import Market from './market.entity';
import { MarketService } from './market.service';

import { MarketSignUpInput, MarketUpdateInput } from './input/market.input';

@Resolver(() => Market)
export class MarketResolver {
  constructor(private marketService: MarketService) {};

  @Query(() => Market)
  async market(@Args('id') id: string): Promise<Market> {
    return this.marketService.findOne(id);
  }

  @Query(() => [Market])
  async markets(): Promise<Market[]> {
    return this.marketService.find();
  }

  @Mutation(() => Market)
  async createMarket(@Args('data') input: MarketSignUpInput): Promise<Market> {
    return this.marketService.create({ ...input });
  }

  @Mutation(() => Market)
  async updateMarket(@Args('data') input: MarketUpdateInput): Promise<Market> {
    return this.marketService.update({ ...input });
  }

  @Mutation(() => Boolean)
  async deleteMarket(@Args('id') id: string): Promise<boolean> {
    return this.marketService.delete(id);
  }

  @Mutation(() => Market)
  async restoreMarket(@Args('id') id: string): Promise<Market> {
    return this.marketService.restore(id);
  }
}