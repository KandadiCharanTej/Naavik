import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Naavik — One platform for engineering students',
    short_name: 'Naavik',
    description:
      'An early-stage student ecosystem for engineering students in Telangana & Andhra Pradesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfcfd',
    theme_color: '#7c3aed',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
