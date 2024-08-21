export interface BaccaratState {
  bets: BaccaratBet[]
  wins: BaccaratBet[]
  cards: BaccaratCardFields[]
  winners: BaccaratField[]
}

export interface BaccaratBet {
  field: BaccaratField
  amount: number
}

export interface BaccaratCardFields {
  field: BaccaratField
  cards: string[]
  score: number
}

export interface DealCard {
  to: BaccaratField
  card: string
}

export const enum BaccaratField {
  Player,
  Banker,
  Tie,
  PlayerPair,
  BankerPair
}
