import { useEffect } from 'react'

export function useEscape(onEscape: any) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onEscape()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])
}
