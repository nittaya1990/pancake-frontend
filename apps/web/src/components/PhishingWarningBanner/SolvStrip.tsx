import { useTranslation } from '@pancakeswap/localization'
import { Box, Link, Text } from '@pancakeswap/uikit'
import { VerticalDivider } from '@pancakeswap/widgets-internal'

const TextHighlight = ({ text, highlights }: { text: string; highlights: string[] }) => {
  const prts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'))
  return prts.map((prt, i) => {
    const key = `${prt}-${i}`
    if (highlights.includes(prt)) {
      return (
        <Text bold as="span" color="#FCC631" fontSize={['12px', '12px', '14px']} key={key}>
          {prt}
        </Text>
      )
    }
    return (
      <Text bold as="span" color="#FFFFFF" fontSize={['12px', '12px', '14px']} key={key}>
        {prt}
      </Text>
    )
  })
}
export const SolvStrip = () => {
  const { t } = useTranslation()

  return (
    <Box mr={['6px']}>
      <TextHighlight
        text={t('Join the SOLV Token Launch (IFO) on BNB Chain PancakeSwap')}
        highlights={['SOLV', 'PancakeSwap']}
      />{' '}
      <Link
        external
        display="inline !important"
        fontSize={['12px', '12px', '14px']}
        href="https://pancakeswap.finance/ifo"
      >
        {t('Join Now')}
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
        fontSize={['12px', '12px', '14px']}
        href="https://forum.pancakeswap.finance/t/solv-ifo-discussion-thread/993"
      >
        {t('Learn More')}
      </Link>
    </Box>
  )
}
