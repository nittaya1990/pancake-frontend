import { isInBinance } from '@binance/w3w-utils'
import { useTranslation } from '@pancakeswap/localization'
import {
  Button,
  type ButtonProps,
  FlexGap,
  Modal,
  ModalBody,
  ModalV2,
  SwapLoading,
  Text,
  WalletFilledV2Icon,
  useToast,
} from '@pancakeswap/uikit'
import { useCallback, useState } from 'react'
import { useChainIdByQuery } from 'state/info/hooks'
import { binanceWeb3WalletConnector } from 'utils/wagmi'
import { useConnect, useDisconnect } from 'wagmi'
import Trans from './Trans'

interface ConnectWalletButtonProps extends ButtonProps {
  withIcon?: boolean
}

export const getBinanceDeepLink = (url: string, chainId = 1) => {
  const base = 'bnc://app.binance.com/mp/app'
  const appId = 'yFK5FCqYprrXDiVFbhyRx7'

  const startPagePath = btoa('/pages/browser/index')
  const startPageQuery = btoa(`url=${url}&defaultChainId=${chainId}`)
  const deeplink = `${base}?appId=${appId}&startPagePath=${startPagePath}&startPageQuery=${startPageQuery}`
  const dp = btoa(deeplink)
  const http = `https://app.binance.com/en/download?_dp=${dp}`
  return { http, bnc: deeplink }
}

const InstallModal = () => {
  const { t } = useTranslation()

  return (
    <Modal title={t('Connect Binance Wallet')}>
      <ModalBody maxWidth={['100%', '100%', '100%', '360px']}>
        <FlexGap gap="16px" flexDirection="column">
          <Text>
            {t(
              'This IDO is exclusively available on the Binance Wallet. It seems you do not have the Binance App installed. Please download it on your mobile device to proceed.',
            )}
          </Text>
          <Text color="textSubtle">
            {t(
              'To participate, please create a wallet using the Binance Wallet, as importing wallets with seed phrases is not supported for this sale.',
            )}
          </Text>
          <Button as="a" href="https://www.binance.com/en/download" target="_blank" rel="noopener noreferrer">
            <Text bold fontSize="16px" color="invertedContrast">
              {t('Download Now')}
            </Text>
          </Button>
        </FlexGap>
      </ModalBody>
    </Modal>
  )
}

const ConnectW3WButton = ({ children, withIcon, onClick, ...props }: ConnectWalletButtonProps) => {
  const [open, setOpen] = useState(false)
  const handleOnDismiss = useCallback(() => setOpen(false), [])
  const { connectAsync } = useConnect()
  const chainId = useChainIdByQuery()

  const handleClick = (e) => {
    if (isInBinance()) {
      console.debug('debug connect w3w chainId', chainId)
      connectAsync({
        // connector: binanceWeb3WalletConnector({ shimDisconnect: false }),
        connector: binanceWeb3WalletConnector(),
        chainId,
      })
      if (onClick) {
        onClick(e)
      }
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <Button onClick={handleClick} {...props}>
        <FlexGap gap="8px" justifyContent="center" alignItems="center">
          {children || <Trans>Connect Wallet</Trans>} {withIcon && <WalletFilledV2Icon color="invertedContrast" />}
        </FlexGap>
      </Button>
      <ModalV2 isOpen={open} onDismiss={handleOnDismiss}>
        <InstallModal />
      </ModalV2>
    </>
  )
}

export const DisconnectW3WButton: React.FC<ButtonProps> = (props) => {
  const { disconnectAsync, status } = useDisconnect()
  const { t } = useTranslation()
  const { toastError, toastSuccess } = useToast()
  const disconnect = useCallback(async () => {
    try {
      await disconnectAsync(
        {},
        {
          onError: (error) => toastError(error.message),
          onSuccess: () => toastSuccess(t('Disconnected from Binance Wallet')),
        },
      )
      if (window.ethereum) {
        // await window.ethereum.request({
        //   method: 'wallet_revokePermissions',
        //   params: [
        //     {
        //       eth_accounts: {},
        //     },
        //   ],
        // })
        // @ts-expect-error
        await window.ethereum.request({
          method: 'eth_requestAccounts',
          params: [{ eth_accounts: {} }],
        })
      }
    } catch (error) {
      console.error('debug disconnect w3w', error)
    }
  }, [disconnectAsync, toastError, toastSuccess, t])

  return (
    <Button onClick={disconnect} {...props}>
      {t('Disconnect')} {status === 'pending' ? <SwapLoading ml="3px" /> : null}
    </Button>
  )
}

export default ConnectW3WButton
