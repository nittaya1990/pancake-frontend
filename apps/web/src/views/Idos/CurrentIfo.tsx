import type { IDOConfig } from './config'

import { IDoCurrentCard } from './components/IdoCards/IdoCards'
import IdoContainer from './components/IdoContainer'
import IdoQuestions from './components/IdoQuestions'
import { SectionBackground } from './components/SectionBackground'

interface TypeProps {
  idoConfig: IDOConfig
}

const CurrentIdo: React.FC<React.PropsWithChildren<TypeProps>> = ({ idoConfig }) => {
  const steps = <></>

  const faq = (
    <SectionBackground padding="32px 0">
      <IdoQuestions />
    </SectionBackground>
  )

  return (
    <IdoContainer
      idoSection={<IDoCurrentCard idoId={idoConfig.id} bannerUrl={idoConfig.bannerUrl} />}
      idoSteps={steps}
      faq={faq}
    />
  )
}

export default CurrentIdo
