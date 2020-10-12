import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Market from './market.entity';
import { MarketResolver } from './market.resolver';
import { MarketService } from './market.service';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  providers: [MarketResolver, MarketService],
  exports: [MarketService],
})

export class MarketModule {}
