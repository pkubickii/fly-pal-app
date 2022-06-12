import { useEffect } from 'react'

const useLeafletScripts = () => {
    useEffect(() => {
        const link = document.createElement('link')
        const script = document.createElement('script')

        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css'
        link.integrity =
            'sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=='
        link.crossOrigin = ''

        document.head.appendChild(link)

        script.src = 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.js'
        script.integrity =
            'sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=='
        script.crossOrigin = ''
        script.async = true

        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
            document.head.removeChild(link)
        }
    }, [])
}

export default useLeafletScripts
