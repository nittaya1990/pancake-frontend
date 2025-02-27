import { ChainId } from '@pancakeswap/chains'
import { Trans } from '@pancakeswap/localization'
import { ASSET_CDN } from 'config/constants/endpoints'
import { ReactNode } from 'react'
import type { Address } from 'viem'

export type IDOConfig = {
  id: string
  version: number
  projectUrl: string
  chainId: ChainId
  bannerUrl: string
  tgeTitle: ReactNode
  tgeSubtitle: ReactNode
  description: ReactNode
  contractAddress: Address
}

export const idoConfigDict: Record<string, IDOConfig> = {
  myshell: {
    id: 'myshell',
    version: 8,
    projectUrl: 'https://myshell.ai/',
    chainId: ChainId.BSC,
    bannerUrl: `${ASSET_CDN}/web/ido/myshell-banner.png`,
    contractAddress: '0x0D54115eF8474C48103A1e3b41464BF3dB00E4B2',
    // eslint-disable-next-line react/no-unescaped-entities
    tgeTitle: <Trans>MyShell's Token Generation Event</Trans>,
    tgeSubtitle: <Trans>Exclusively via Binance Keyless Wallet</Trans>,
    description: (
      <Trans>
        MyShell is an AI creator platform for everyone to build, share, and own AI agents. Our vision is to create a
        unified platform that provides product-driven value for web2 users and offers the crypto community participating
        ownership in practical AI applications, bridging the gap between frontier AI applications and blockchain
        technology.
      </Trans>
    ),
  },
}
