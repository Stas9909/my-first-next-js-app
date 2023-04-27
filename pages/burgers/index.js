import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/Burgers.module.css"
import Image from "next/image"//Image - компонент, кот нам нужно исп вместо <img>, чтобы картинка была оптимизирована

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4400/keyItems')
  const data = await res.json()

  return {
    props: { data },
    revalidate: 300//не обязательно, но если не указать, то при каждом обновл стр будет запрашиваться новый список
  }
}

const Burgers = ({ data }) => {
  const router = useRouter()

  return (
    <div>
      <h1>Burgers</h1>
      {data.map((burger) => (
        <Link href={`/burgers/${burger.id}`} key={burger.id}>
          <div className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image
                src={burger.image}
                alt={burger.name}
                width={150}
                height={150}
                // layout="responsive"
                priority={true}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <h3>{burger.name}</h3>
            <p>{burger.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Burgers