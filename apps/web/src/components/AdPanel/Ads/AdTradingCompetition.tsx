import { useTranslation } from '@pancakeswap/localization'
import { Link } from '@pancakeswap/uikit'
import { BodyText } from '../BodyText'
import { AdButton } from '../Button'
import { AdCard } from '../Card'

import { tradingCompetitionConfig } from '../InfoStripes/TradingCompetition'
import { AdPlayerProps } from '../types'
import { getImageUrl } from '../utils'

export const AdTradingCompetition = (props: AdPlayerProps & { token: 'aitech' | 'apt' | 'vinu' | 'bfg' | 'andy' }) => {
  const { t } = useTranslation()
  const { token, ...rest } = props
  const { unit, reward } = tradingCompetitionConfig[token]

  return (
    <AdCard imageUrl={getImageUrl(tradingCompetitionConfig[token].imgUrl)} {...rest}>
      <BodyText mb="0">
        {t('Swap %token% to win a share of', { token: token.toUpperCase() })}{' '}
        {unit === '$' ? `$${reward}` : `${reward} ${unit}`}.{' '}
        <Link fontSize="inherit" href={tradingCompetitionConfig[token].swapUrl} color="secondary" bold>
          {t('Swap Now')}
        </Link>
      </BodyText>
      <AdButton mt="16px" href={tradingCompetitionConfig[token].learnMoreUrl} externalIcon isExternalLink>
        {t('Learn More')}
      </AdButton>
    </AdCard>
  )
}

export const AdTradingCompetitionAiTech = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="aitech" {...props} />
}

export const AdTradingCompetitionApt = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="apt" {...props} />
}

export const AdTradingCompetitionBfg = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="bfg" {...props} />
}

export const AdTradingCompetitionVinu = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="vinu" {...props} />
}

export const AdTradingCompetitionAndy = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="andy" {...props} />
}
