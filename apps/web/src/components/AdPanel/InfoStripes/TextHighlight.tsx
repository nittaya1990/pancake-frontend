import { Text } from '@pancakeswap/uikit'

export const TextHighlight = ({ text, highlights }: { text: string; highlights: string[] }) => {
  let prts: string[] = [text]
  if (highlights.length > 0) {
    prts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'))
  }

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
