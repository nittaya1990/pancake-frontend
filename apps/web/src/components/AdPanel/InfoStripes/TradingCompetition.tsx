import { useTranslation } from '@pancakeswap/localization'
import { ArrowForwardIcon, Box, Link, Text } from '@pancakeswap/uikit'
import { VerticalDivider } from '@pancakeswap/widgets-internal'

export const tradingCompetitionConfig = {
  aitech: {
    imgUrl: 'aitech_competition',
    swapUrl:
      'https://pancakeswap.finance/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x2D060Ef4d6BF7f9e5edDe373Ab735513c0e4F944&utm_source=Website&utm_medium=infostripe&utm_campaign=AITECH&utm_id=TradingCompetition',
    learnMoreUrl:
      'https://blog.pancakeswap.finance/articles/pancake-swap-x-solidus-ai-tech-trading-competition-50-000-in-rewards?utm_source=Website&utm_medium=infostripe&utm_campaign=AITECH&utm_id=TradingCompetition',
    reward: '50,000',
    unit: '$',
  },
  bfg: {
    imgUrl: 'bfg_competition',
    swapUrl:
      'https://pancakeswap.finance/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xBb46693eBbEa1aC2070E59B4D043b47e2e095f86&utm_source=Website&utm_medium=infostripe&utm_campaign=BFG&utm_id=TradingCompetition',
    learnMoreUrl:
      'https://blog.pancakeswap.finance/articles/pancake-swap-x-bet-fury-trading-competition-50-000-in-rewards?utm_source=Website&utm_medium=infostripe&utm_campaign=BFG&utm_id=TradingCompetition',
    reward: '50,000',
    unit: '$',
  },
  apt: {
    imgUrl: 'apt_competition',
    swapUrl: ' https://aptos.pancakeswap.finance/swap',
    learnMoreUrl:
      'https://blog.pancakeswap.finance/articles/aptos-pancake-swap-trading-competition-win-from-8-000-apt?utm_source=Website&utm_medium=infostripe&utm_campaign=APT&utm_id=TradingCompetition',
    reward: '8,000',
    unit: 'APT',
  },
  vinu: {
    imgUrl: 'vinu_competition',
    swapUrl:
      'https://pancakeswap.finance/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xfEbe8C1eD424DbF688551D4E2267e7A53698F0aa&utm_source=Website&utm_medium=infostripe&utm_campaign=VINU&utm_id=TradingCompetition',
    learnMoreUrl:
      'https://blog.pancakeswap.finance/articles/pancake-swap-x-vita-inu-trading-competition-100-000-in-rewards?utm_source=Website&utm_medium=infostripe&utm_campaign=VINU&utm_id=TradingCompetition',
    reward: '100,000',
    unit: '$',
  },
  andy: {
    imgUrl: 'andy_competition',
    swapUrl:
      'https://pancakeswap.finance/?outputCurrency=0x01CA78a2B5F1a9152D8A3A625bd7dF5765eeE1D8&utm_source=Website&utm_medium=banner&utm_campaign=ANDY&utm_id=TradingCompetition',
    learnMoreUrl:
      'https://blog.pancakeswap.finance/articles/pancake-swap-x-andy-trading-competition-50-000-in-rewards?utm_source=Website&utm_medium=banner&utm_campaign=ANDY&utm_id=TradingCompetition',
    reward: '50,000',
    unit: '$',
  },
}

export const TradingCompetition: React.FC<{ token: 'aitech' | 'bfg' | 'apt' | 'vinu' | 'andy' }> = ({ token }) => {
  const { t } = useTranslation()

  const { unit, reward } = tradingCompetitionConfig[token]

  return (
    <Box mr={['6px']}>
      <Text bold as="span" color="#FFFFFF" fontSize={['12px', '12px', '14px']}>
        {t('Swap %token% to win a share of', { token: token.toUpperCase() })}{' '}
      </Text>
      <Text bold as="span" color="#FCC631" fontSize={['12px', '12px', '14px']}>
        {unit === '$' ? `$${reward}` : `${reward} ${unit}`},
      </Text>
      <Text bold as="span" color="#FFFFFF" fontSize={['12px', '12px', '14px']}>
        {t('with daily prizes and leaderboard rewards!')}
      </Text>

      <Link
        external
        display="inline-flex !important"
        verticalAlign="baseline"
        showExternalIcon
        fontSize={['12px', '12px', '14px']}
        href={tradingCompetitionConfig[token].swapUrl}
      >
        {t('Swap Now')}
        <ArrowForwardIcon
          style={{
            fill: '#53DEE9',
          }}
        />
      </Link>
      <VerticalDivider
        bg="#53DEE9"
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '18px',
          opacity: 0.4,
          width: '1px',
          marginLeft: '0px',
          marginRight: '8px',
        }}
      />
      <Link
        external
        display="inline !important"
        showExternalIcon
        fontSize={['12px', '12px', '14px']}
        href={tradingCompetitionConfig[token].learnMoreUrl}
      >
        {t('Learn More')}
      </Link>
    </Box>
  )
}

export const TradingCompetitionInfoStripeAndy = () => {
  return <TradingCompetition token="andy" />
}
