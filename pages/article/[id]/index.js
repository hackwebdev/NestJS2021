import { useRouter } from 'next/router'

const article = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <p>this is an article {id}</p>
    </div>
  )
}

export default article
