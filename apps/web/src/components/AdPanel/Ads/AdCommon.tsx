import { Link } from '@pancakeswap/uikit'
import { BodyText } from '../BodyText'
import { AdButton } from '../Button'
import { AdCard } from '../Card'
import { AdsIds, useAdsConfig } from '../hooks/useAdsConfig'
import { AdTextConfig } from '../types'
import { getImageUrl } from '../utils'

export const AdCommon = (props: { id: AdsIds }) => {
  const config = useAdsConfig(props.id)
  const { img, texts, btn, options } = config.ad

  return (
    <AdCard imageUrl={getImageUrl(img)} imgPadding={options?.imagePadding}>
      <BodyText mb="0">
        {texts.map((textConfig, i) => {
          const key = `${textConfig.text}-${i}`
          return <TextRender key={key} config={textConfig} />
        })}
      </BodyText>
      <AdButton mt="16px" href={btn.link} externalIcon isExternalLink>
        {btn.text}
      </AdButton>
    </AdCard>
  )
}

const TextRender = (props: { config: AdTextConfig }) => {
  const { config } = props
  if (config.link) {
    return (
      <Link fontSize="inherit" href={config.link} color="secondary" bold>
        {config.text}
      </Link>
    )
  }
  return <>{config.text}</>
}
