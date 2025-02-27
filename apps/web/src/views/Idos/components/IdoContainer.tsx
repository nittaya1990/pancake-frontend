import { Container } from '@pancakeswap/uikit'
import { ReactNode } from 'react'
import { Address } from 'viem'

import IdoLayout, { IdoLayoutWrapper } from './IfoLayout'
import { SectionBackground } from './SectionBackground'

interface TypeProps {
  idoSection: ReactNode
  idoSteps: ReactNode
  faq?: ReactNode
  idoAddress?: Address
}

const IdoContainer: React.FC<React.PropsWithChildren<TypeProps>> = ({ idoSection }) => {
  return (
    <IdoLayout id="current-ido">
      <SectionBackground>
        <Container px="0">
          <IdoLayoutWrapper>{idoSection}</IdoLayoutWrapper>
        </Container>
      </SectionBackground>
    </IdoLayout>
  )
}

export default IdoContainer
