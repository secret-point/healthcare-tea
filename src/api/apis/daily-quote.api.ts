import { BaseApi } from './base.api';
import * as Contracts from '../contracts';

class DailyQuoteApiClass extends BaseApi {
  public async getTodaysQuote(): Promise<
    Contracts.ItemData<Contracts.DailyQuote>
  > {
    return await this.client.get('daily-quotes/today');
  }
}

export const DailyQuoteApi = new DailyQuoteApiClass();
