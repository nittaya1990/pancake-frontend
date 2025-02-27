import dynamic from 'next/dynamic'
import { CHAIN_IDS } from 'utils/wagmi'
import Page from 'views/Page'
import SwapLayout from 'views/Swap/SwapLayout'

const TwapAndLimitSwap = dynamic(() => import('views/Swap/Twap/TwapSwap'), { ssr: false })

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Page showExternalLink={false} showHelpLink={false}>
      {children}
    </Page>
  )
}

const LimitPage = () => (
  <SwapLayout>
    <TwapAndLimitSwap limit />
  </SwapLayout>
)

LimitPage.chains = CHAIN_IDS
LimitPage.screen = true
LimitPage.Layout = Layout

export default LimitPage
