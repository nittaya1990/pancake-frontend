import { useTranslation } from '@pancakeswap/localization'
import getTimePeriods from '@pancakeswap/utils/getTimePeriods'

export const useIDODuration = (duration: number) => {
  const { days, hours } = getTimePeriods(duration)
  const { t } = useTranslation()

  if (days > 1) {
    return `${days} ${t('days')}`
  }

  if (hours > 1) {
    return `${hours} ${t('hours')}`
  }

  return `${t('< 1 hour')}`
}
