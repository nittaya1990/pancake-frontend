export interface AdPlayerProps {
  isDismissible?: boolean

  /** Force mobile behavior.
   * For example,
   * 1) Expandable content opening in a Modal
   * 2) Placement of Close Button inside the card
   */
  forceMobile?: boolean
}

export interface AdTextConfig {
  text: string
  highlights?: string[]
  link?: string
}
export interface BtnConfig {
  text: string
  link: string
}
export interface AdsConfig {
  img: string
  texts: AdTextConfig[]
  btn: BtnConfig
  options?: {
    imagePadding?: string
  }
}

export interface InfoStripeConfig {
  img: string
  texts: AdTextConfig[]
  btns: BtnConfig[]
}

export interface AdsCampaignConfig {
  id: string
  ad: AdsConfig
  infoStripe: InfoStripeConfig
}
