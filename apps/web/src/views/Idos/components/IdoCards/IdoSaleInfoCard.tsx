import { useTranslation } from '@pancakeswap/localization'
import { Card, CardBody, FlexGap, Text } from '@pancakeswap/uikit'
import { CurrencyLogo, NumberDisplay } from '@pancakeswap/widgets-internal'
import dayjs from 'dayjs'
import useTheme from 'hooks/useTheme'
import { useIDOConfig } from 'views/Idos/hooks/ido/useIDOConfig'
import { useIDOCurrencies } from 'views/Idos/hooks/ido/useIDOCurrencies'
import { useIDODuration } from 'views/Idos/hooks/ido/useIDODuration'

export const IdoSaleInfoCard: React.FC = () => {
  const { t } = useTranslation()
  const { theme, isDark } = useTheme()
  const { offeringCurrency, stakeCurrency0, stakeCurrency1 } = useIDOCurrencies()
  const { totalSalesAmount, status, duration, startTimestamp, endTimestamp } = useIDOConfig()
  const durationText = useIDODuration(duration)

  return (
    <Card background={isDark ? '#18171A' : theme.colors.background} mb="16px">
      <CardBody>
        <FlexGap gap="8px">
          {offeringCurrency ? <CurrencyLogo size="40px" currency={offeringCurrency} /> : null}
          <FlexGap flexDirection="column">
            <Text fontSize="12px" bold color="secondary" lineHeight="18px" textTransform="uppercase">
              {t('Total Sale')}
            </Text>
            <NumberDisplay
              bold
              fontSize="20px"
              lineHeight="30px"
              value={totalSalesAmount?.toSignificant(6)}
              suffix={` ${offeringCurrency?.symbol}`}
            />
          </FlexGap>
        </FlexGap>
        <FlexGap flexDirection="column" gap="8px" mt="16px">
          <FlexGap justifyContent="space-between">
            <Text color="textSubtle" style={{ whiteSpace: 'nowrap' }}>
              {t('Project Duration')}
            </Text>
            <Text textAlign="right">
              {status !== 'finished' ? (
                <>{durationText}</>
              ) : (
                <>
                  {dayjs.unix(startTimestamp).format('DD-MM-YYYY')} {t('to')} <br />
                  {dayjs.unix(endTimestamp).format('DD-MM-YYYY')}
                </>
              )}
            </Text>
          </FlexGap>
        </FlexGap>
        {status !== 'finished' && (
          <Text color="textSubtle" mt="16px">
            {stakeCurrency0 && stakeCurrency1
              ? t('You can subscribe to the sale by depositing %stakeCurrency0% and %stakeCurrency1% half in ratio.', {
                  stakeCurrency0: stakeCurrency0.symbol,
                  stakeCurrency1: stakeCurrency1.symbol,
                })
              : stakeCurrency0 || stakeCurrency1
              ? t('You can subscribe to the sale by depositing %stakeCurrency%.', {
                  stakeCurrency: stakeCurrency0?.symbol ?? stakeCurrency1?.symbol,
                })
              : null}
          </Text>
        )}
      </CardBody>
    </Card>
  )
}
