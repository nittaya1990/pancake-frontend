import { useQuery } from '@tanstack/react-query'
import useAccountActiveChain from 'hooks/useAccountActiveChain'
import { useGaugesVotingContract } from 'hooks/useContract'

export const useVotedPower = () => {
  const { account } = useAccountActiveChain()
  const contract = useGaugesVotingContract()
  const { data } = useQuery({
    queryKey: ['/vecake/vote-power', contract.address, account],

    queryFn: async (): Promise<number> => {
      const power = (await contract.read.voteUserPower([account!])) ?? 0n

      return Number(power)
    },

    enabled: !!account,
  })
  return data
}
