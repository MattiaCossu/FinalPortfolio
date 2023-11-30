export function useConstantsCollapse() {
  const AUTO_DUR_VAR = '--vc-auto-duration'

  const DEFAULT_TRANSITION = `height var(${AUTO_DUR_VAR}) cubic-bezier(0.33, 1, 0.68, 1)`

  const SAFE_STYLES = { padding: 0 } as const

  const FALLBACK_DURATION = 300

  const VISUALLY_HIDDEN = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  } as const

  return { AUTO_DUR_VAR, DEFAULT_TRANSITION, SAFE_STYLES, FALLBACK_DURATION, VISUALLY_HIDDEN }
}
