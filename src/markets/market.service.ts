import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { MarketSignUpInput, MarketUpdateInput } from './input/market.input';

import Market from './market.entity';

@Injectable()
export class MarketService {
  public constructor(
    @InjectRepository(Market) public readonly marketRepository: Repository<Market>,
  ) {}

  async find(): Promise<Market[]> {
    return this.marketRepository.find();
  }

  async findOne(id: string): Promise<Market> {
    return this.marketRepository.findOne(id);
  }

  async create(input: MarketSignUpInput): Promise<Market> {
    this.marketRepository.create(input);

    const createdMarket = await this.marketRepository.save(input);

    return createdMarket;
  }

  async update(fieldsToUpdate: MarketUpdateInput): Promise<Market> {
    const marketToUpdate = await this.marketRepository.findOne(fieldsToUpdate.id);
    
    // Pegar todos os campos alterados para trocá-los no BD.
    console.log(Object.keys(fieldsToUpdate));

    return marketToUpdate;
  }

  async delete(id: string): Promise<boolean> {
    const checkIfMarketExists = await this.marketRepository.findOne(id);

    if(!checkIfMarketExists) {
      throw new Error('Mercado não encontrado');
    }

    await this.marketRepository.softDelete(id);

    return !!checkIfMarketExists;
  }

  async restore(id: string): Promise<Market> {
    const marketNotDeleted = await this.marketRepository.findOne(id);

    if(marketNotDeleted) {
      throw new UnauthorizedException();
    }

    await this.marketRepository.restore(id);

    const restoredMarket = this.marketRepository.findOne(id);

    return restoredMarket;
  }
}