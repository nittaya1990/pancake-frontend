import { ChainId } from '@pancakeswap/chains'
import { Gauge } from '@pancakeswap/gauges'
import { useQuery } from '@tanstack/react-query'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { stringify } from 'qs'

type Response = {
  data: Gauge[]
  lastUpdated: number
}

export const useGauges = (showKilled: boolean = false) => {
  const { chainId } = useActiveChainId()

  const { data, isPending } = useQuery({
    queryKey: ['gaugesVoting', chainId, showKilled],

    queryFn: async (): Promise<Gauge[]> => {
      const query = stringify({ testnet: chainId === ChainId.BSC_TESTNET ? 1 : undefined, killed: showKilled })
      const response = await fetch(`/api/gauges/getAllGauges?${query}`)
      if (response.ok) {
        const result = (await response.json()) as Response

        const gauges = result.data
          .filter((g) => !!g.hash)
          .map((gauge) => ({
            ...gauge,
            weight: BigInt(gauge.weight),
          }))

        return gauges
      }
      return [] as Gauge[]
    },

    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return {
    data,
    isLoading: isPending || data?.length === 0,
  }
}
