/**
 * Convierte cualquier link publico de Google Drive a una URL servible como <img src>.
 * Soporta los formatos mas comunes:
 *  - https://drive.google.com/file/d/{ID}/view
 *  - https://drive.google.com/open?id={ID}
 *  - https://drive.google.com/uc?id={ID}
 *  - https://drive.google.com/uc?export=view&id={ID}
 */
export const transformDriveImage = (url: string): string => {
  if (!url) return ''
  if (!url.includes('drive.google.com')) return url

  const patterns: RegExp[] = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
  ]

  let id: string | null = null
  for (const re of patterns) {
    const match = url.match(re)
    if (match?.[1]) {
      id = match[1]
      break
    }
  }
  if (!id) return url

  return `https://lh3.googleusercontent.com/d/${id}=w1600`
}

export const transformDriveThumbnail = (url: string, size = 400): string => {
  const transformed = transformDriveImage(url)
  if (!transformed.includes('lh3.googleusercontent.com')) return transformed
  return transformed.replace(/=w\d+$/, `=w${size}`)
}
