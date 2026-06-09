import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top of the page on every pathname change.
 *
 * Depends only on `location.pathname`, not `location.hash`, so in-page
 * hash navigation (e.g. /#projects, /#about) is unaffected.
 *
 * Uses useLayoutEffect so the scroll fires before the browser paints,
 * preventing a visible flash at the previous scroll position.
 *
 * Renders nothing — drop it anywhere inside the router tree.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
