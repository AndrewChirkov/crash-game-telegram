import { BaccaratField } from './baccarat.types.ts'

export const COUNT_SHOES = 8

export function getBaccaratShoe() {
  const shoe = [
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'CJ',
    'CQ',
    'CK',
    'CA',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'DJ',
    'DQ',
    'DK',
    'DA',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
    'HJ',
    'HQ',
    'HK',
    'HA',
    'S2',
    'S3',
    'S4',
    'S5',
    'S6',
    'S7',
    'S8',
    'S9',
    'S10',
    'SJ',
    'SQ',
    'SK',
    'SA'
  ]

  return Array(COUNT_SHOES).fill(shoe).flat()
}

export function getCardScore(card: string) {
  const rank = card.slice(1)

  if (['J', 'Q', 'K'].includes(rank)) {
    return 10
  } else if (rank === 'A') {
    return 1
  } else {
    return parseInt(rank, 10)
  }
}

export function getCardsScore(cards: string[]) {
  let score = 0

  cards.forEach((card) => {
    const cardScore = getCardScore(card)
    let scoreSum = score + cardScore

    if (scoreSum >= 10) {
      scoreSum -= 10
    }

    score = scoreSum
  })

  return score
}

export function getPairs(bankerCards: string[], playerCards: string[]) {
  const hasBankerPair = new Set(bankerCards).size !== bankerCards.length
  const hasPlayerPair = new Set(playerCards).size !== playerCards.length

  return {
    hasBankerPair,
    hasPlayerPair
  }
}

export function getWinMultiplier(field: BaccaratField) {
  switch (field) {
    case BaccaratField.Banker:
      return 1.95
    case BaccaratField.Player:
      return 2
    case BaccaratField.Tie:
      return 8
    case BaccaratField.BankerPair:
    case BaccaratField.PlayerPair:
      return 10
  }
}
