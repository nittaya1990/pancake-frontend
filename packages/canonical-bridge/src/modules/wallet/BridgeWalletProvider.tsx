import {
  ConnectionProvider as SolanaConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletProvider as TronWalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks'
import { env } from '../../configs'

export function BridgeWalletProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <SolanaConnectionProvider endpoint={env.SOLANA_RPC_ENDPOINT}>
      <SolanaWalletProvider wallets={[]} autoConnect={false}>
        <TronWalletProvider adapters={[]} autoConnect={false}>
          {children}
        </TronWalletProvider>
      </SolanaWalletProvider>
    </SolanaConnectionProvider>
  )
}
