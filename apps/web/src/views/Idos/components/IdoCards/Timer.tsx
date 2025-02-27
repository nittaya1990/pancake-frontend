import { IfoStatus } from '@pancakeswap/ifos'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import getTimePeriods from '@pancakeswap/utils/getTimePeriods'
import useTheme from 'hooks/useTheme'
import { styled } from 'styled-components'

interface Props {
  plannedStartTime: number
  startTime: number
  endTime: number
  ifoStatus: IfoStatus
  dark?: boolean
}

const FlexGap = styled(Flex)<{ gap: string }>`
  gap: ${({ gap }) => gap};
`

const USE_BLOCK_TIMESTAMP_UNTIL = 3

export const SoonTimer: React.FC<React.PropsWithChildren<Props>> = ({ startTime, ifoStatus, plannedStartTime }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  const now = Math.floor(Date.now() / 1000)
  const hoursLeft = plannedStartTime && now ? (plannedStartTime - Number(now)) / 3600 : 0
  const fallbackToBlockTimestamp = hoursLeft > USE_BLOCK_TIMESTAMP_UNTIL
  let timeUntil: ReturnType<typeof getTimePeriods> | undefined
  if (fallbackToBlockTimestamp) {
    timeUntil = getTimePeriods((plannedStartTime || Number(now)) - Number(now))
  } else {
    timeUntil = getTimePeriods(startTime - now)
  }
  const textColor = theme.colors.secondary

  const countdownDisplay =
    ifoStatus !== 'idle' ? (
      <>
        <FlexGap gap="8px" alignItems="center">
          <Text fontSize="16px" color={textColor}>
            {t('Starts in')}:
          </Text>
          <FlexGap gap="4px" alignItems="baseline">
            {timeUntil.days ? (
              <Text fontSize="20px" bold color={textColor}>
                {timeUntil.days}
                {t('d')} :
              </Text>
            ) : null}
            {timeUntil.days || timeUntil.hours ? (
              <Text fontSize="20px" bold color={textColor}>
                {timeUntil.hours}
                {t('h')} :
              </Text>
            ) : null}
            <Text fontSize="20px" bold color={textColor}>
              {!timeUntil.days && !timeUntil.hours && timeUntil.minutes === 0 ? '< 1' : timeUntil.minutes}
              {t('m')}
            </Text>
          </FlexGap>
        </FlexGap>
      </>
    ) : null

  const countdown = countdownDisplay

  return (
    <Flex justifyContent="center" position="relative">
      {ifoStatus === 'idle' ? <Skeleton animation="pulse" variant="rect" width="100%" height="48px" /> : countdown}
    </Flex>
  )
}

const LiveTimer: React.FC<React.PropsWithChildren<Pick<Props, 'endTime' | 'ifoStatus'>>> = ({ endTime, ifoStatus }) => {
  const { t } = useTranslation()
  const now = Math.floor(Date.now() / 1000)
  const timeUntil = getTimePeriods(endTime - now)

  const timeDisplay =
    ifoStatus !== 'idle' ? (
      <>
        <FlexGap gap="8px" alignItems="center">
          <Text textTransform="uppercase" fontSize="16px" bold color="#FBCB01">{`${t('Live Now')}!`}</Text>
          <Text color="white">{t('Ends in')}:</Text>
          <FlexGap gap="4px" alignItems="baseline">
            {timeUntil.days ? (
              <Text fontSize="20px" bold color="white">
                {timeUntil.days}
                {t('d')} :
              </Text>
            ) : null}
            {timeUntil.days || timeUntil.hours ? (
              <Text fontSize="20px" bold color="white">
                {timeUntil.hours}
                {t('h')} :
              </Text>
            ) : null}
            <Text fontSize="20px" bold color="white">
              {!timeUntil.days && !timeUntil.hours && timeUntil.minutes === 0 ? '< 1' : timeUntil.minutes}
              {t('m')}
            </Text>
          </FlexGap>
        </FlexGap>
      </>
    ) : null

  const timeNode = timeDisplay

  return (
    <Flex justifyContent="center" position="relative">
      {ifoStatus === 'idle' ? <Skeleton animation="pulse" variant="rect" width="100%" height="48px" /> : timeNode}
    </Flex>
  )
}

export default LiveTimer
