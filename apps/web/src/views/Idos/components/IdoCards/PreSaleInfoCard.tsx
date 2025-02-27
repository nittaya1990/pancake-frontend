import { useTranslation } from '@pancakeswap/localization'
import { CheckmarkCircleIcon, CloseCircleIcon, FlexGap, Text } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const CardWrapper = styled.div`
  background: ${({ theme }) => (theme.isDark ? '#13393C' : '#EEFBFC')};
  border: 1px solid ${({ theme }) => (theme.isDark ? '#094D53' : '#C1EDF0')};
  border-radius: 20px;

  padding: 12px;
`

export const FailureCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.failure33};
  border: 1px solid ${({ theme }) => theme.shadows.danger};
  border-radius: 20px;

  padding: 12px;
`

export const PreSaleInfoCard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CardWrapper>
      <Text>
        💡{' '}
        {t(
          'Please make sure you have a keyless Binance Wallet in order to participate in this sale when the IDO goes live.',
        )}
      </Text>
    </CardWrapper>
  )
}

export const PreSaleEligibleCard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CardWrapper>
      <FlexGap gap="8px" alignItems="flex-start">
        <FlexGap>
          <CheckmarkCircleIcon color="success" width="24px" />
        </FlexGap>
        <Text>{t('You are eligible to join this sale when IDO goes live!')}</Text>
      </FlexGap>
    </CardWrapper>
  )
}

export const ComplianceCard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FailureCardWrapper>
      <FlexGap gap="8px" alignItems="flex-start">
        <FlexGap>
          <CloseCircleIcon color="failure" width="24px" />
        </FlexGap>
        <Text>{t('Due to regulatory requirements, you are not eligible to participate in.')}</Text>
      </FlexGap>
    </FailureCardWrapper>
  )
}
