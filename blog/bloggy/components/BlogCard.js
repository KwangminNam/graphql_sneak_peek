import Link from 'next/link';


export default function BlogCard({
  title,
  author,
  coverPhoto,
  key,
  slug,
  datePub
}) {
  return (
    <div >
      <Link href={'/post/' + slug}>
        <div >
          <img src={coverPhoto?.url} alt={title} />
        </div>
      </Link>
      <div >
        <h2>{title}</h2>
        <div >
          <div style={styles.author}>
            <img src={author.avator?.url} alt="" />
            <h3>{author.name}</h3>
          </div>
          <div >
            <h3>{datePub}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
