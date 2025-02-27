import { useEffect, useRef } from 'react'

export const useDrawCanvas = (
  videoRef: React.MutableRefObject<HTMLVideoElement | undefined> | React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  intervalRef: React.MutableRefObject<number>,
  width: number,
  height: number,
  onVideoStartCallback?: () => void,
  onVideoVideoEnd?: () => void,
  additionalVideoRefs?: React.RefObject<HTMLVideoElement>[],
) => {
  const isElementReady = videoRef?.current && canvasRef?.current
  const isVideoPlaying = useRef(false)

  const drawImage = () => {
    isVideoPlaying.current = false
    const context = canvasRef?.current?.getContext('2d')
    if (!canvasRef?.current || !videoRef?.current || !context) return
    context.clearRect(0, 0, width, height)
    context.drawImage(videoRef?.current, 0, 0, width, height)
    additionalVideoRefs?.forEach((ref) => {
      const additionalVideo = ref.current
      if (!additionalVideo) return
      context.drawImage(additionalVideo, 0, 0, width, height)
    })
    onVideoStartCallback?.()
  }

  useEffect(() => {
    if (!videoRef?.current) return
    const video = videoRef.current
    video.onpause = () => {
      cancelAnimationFrame(intervalRef.current)
      isVideoPlaying.current = false
    }
    video.onended = () => {
      cancelAnimationFrame(intervalRef.current)
      onVideoVideoEnd?.()
      isVideoPlaying.current = false
    }
    video.onplay = () => {
      onVideoStartCallback?.()
    }
  }, [isElementReady, intervalRef, onVideoStartCallback, onVideoVideoEnd, videoRef])

  return { drawImage, isVideoPlaying }
}
