import { ArrowForwardIcon } from '@pancakeswap/uikit'
import { useEffect, useRef } from 'react'
import { styled } from 'styled-components'

const CountdownContainer = styled.div`
  position: relative;
  margin-left: auto;
  height: 20px;
  width: 20px;
  min-width: 20px;
  cursor: pointer;

  > svg:first-child {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: rotateY(-180deg) rotateZ(-90deg);
    stroke-width: 2px;
    > circle {
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-dasharray: 120px;
    }
    > circle:first-child {
      stroke-dashoffset: 0px;
      stroke: ${({ theme }) => theme.colors.cardBorder};
    }
    > circle:nth-child(2) {
      stroke: ${({ theme }) => theme.colors.primaryBright};
    }
  }

  > svg:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.75);
  }
`
const circumference = 2 * Math.PI * 9

export const Countdown = ({ step, duration, onClick }: { step: number; duration: number; onClick?: () => void }) => {
  const circleRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return undefined

    circle.style.strokeDasharray = `${circumference}px`
    circle.style.strokeDashoffset = '0px'
    circle.style.transition = 'none'

    circle.getBoundingClientRect()

    circle.style.transition = `stroke-dashoffset ${duration}ms linear`
    circle.style.strokeDashoffset = `${circumference}px`

    return () => {
      circle.style.transition = 'none'
    }
  }, [step, duration])

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return undefined

    const handleTransitionEnd = () => onClick?.()
    circle.addEventListener('transitionend', handleTransitionEnd)
    return () => circle.removeEventListener('transitionend', handleTransitionEnd)
  }, [onClick])

  return (
    <CountdownContainer onClick={onClick}>
      <svg>
        <circle r="9" cx="10" cy="10" />
        <circle ref={circleRef} r="9" cx="10" cy="10" />
      </svg>
      <ArrowForwardIcon color="primary" />
    </CountdownContainer>
  )
}
