import { ClientOnly } from '@/components/ClientOnly'
import { Root as Lms } from '@/dc/generated/Lms'

// Not linked from the public site yet.
export const metadata = { title: 'Liminal Math — Learn', robots: { index: false, follow: false } }

export default function Page() {
  return (
    <ClientOnly>
      <Lms />
    </ClientOnly>
  )
}
