import { useTranslation } from '@pancakeswap/localization'
import { Flex, Link, useToast } from '@pancakeswap/uikit'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { isAddressEqual } from 'utils'
import dayjs from 'dayjs'
import optionsSunsetAddresses from '../config/constants/options-sunset-addresses.json'

const SUNSET_DEADLINE = dayjs.utc('2025-03-11T08:00:00Z')

const useOptionsSunsetNotification = () => {
  const { t } = useTranslation()
  const { toastWarning } = useToast()
  const { address: account } = useAccount()

  useEffect(() => {
    const now = dayjs()

    if (
      now.isBefore(SUNSET_DEADLINE) &&
      account &&
      optionsSunsetAddresses.some((sunsetAddress) => isAddressEqual(sunsetAddress, account))
    ) {
      toastWarning(
        t('Warning'),
        <>
          {t(
            'PancakeSwap Options will officially be retired on March 11th, 2025, at 08:00 UTC, please withdraw liquidity by the deadline or migrate to PancakeSwap V3 pools.',
          )}{' '}
          <Flex style={{ gap: 2 }} alignItems="center">
            {t('For more details,')}
            <Link external href="https://blog.pancakeswap.finance/articles/retirement-options">
              {t('read here.')}
            </Link>
          </Flex>
        </>,
      )
    }
  }, [account, toastWarning, t])
}

export default useOptionsSunsetNotification
