import { useRouter } from 'next/router'
import { idoConfigDict } from '../../config'

export const useCurrentIDOConfig = () => {
  const { query } = useRouter()
  const currentIdo = query.ido as string
  return idoConfigDict[currentIdo] ?? idoConfigDict.myshell
}
