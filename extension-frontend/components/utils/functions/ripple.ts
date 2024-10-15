import { RefObject } from 'react'

export const ripple = (e: React.MouseEvent<HTMLElement>, btnRef: RefObject<HTMLElement>, color: string = 'bg-white/30') => {
    const btn = btnRef.current

    if (!btn) return

    const circle = document.createElement('span')
    const diameter = Math.max(btn.clientWidth, btn.clientHeight)
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`
    circle.style.top = `${e.clientY - (btn.offsetTop + radius)}px`

    circle.classList.add('absolute', 'animate-ripple', 'inset-0', 'scale-0', 'rounded-full', color)

    btn.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 3000)
}
