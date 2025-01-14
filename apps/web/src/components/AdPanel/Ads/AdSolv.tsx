import { useTranslation } from '@pancakeswap/localization'
import { BodyText } from '../BodyText'
import { AdButton } from '../Button'
import { AdCard } from '../Card'
import { Countdown } from '../Countdown'
import { AdPlayerProps } from '../types'
import { getImageUrl } from '../utils'

export const AdSolv = (props: AdPlayerProps) => {
  const { t } = useTranslation()

  return (
    <AdCard imageUrl={getImageUrl('solv')} {...props}>
      <BodyText mb="8px">
        {t('%token% IFO starts in', {
          token: 'SOLV',
        })}
      </BodyText>

      <Countdown
        targetTime={new Date('2025-01-16T10:00:00Z').getTime() / 1000}
        subtleColor="rgba(0,0,0,.6)"
        background="linear-gradient(180deg, #FCC631 0%, #FF9D00 100%)"
        color="black"
        mb="8px"
      />

      <AdButton variant="text" isExternalLink href="https://pancakeswap.finance/ifo">
        {t('Get Started')}
      </AdButton>
    </AdCard>
  )
}
