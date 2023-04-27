import styles from "../../styles/Burgers.module.css"
import Image from "next/image"

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:4400/keyItems')
  const data = await res.json()

  const paths = data.map(burger => {
    return {
      params: { burgersId: burger.id }
    }
  })

  return {
    paths, //paths: paths 
    fallback: false//если указать true, то при обращении к несуществующему id, приложение будет генерировать стр динамически, а не заранее статически во время сборки, если они не были предварительно определены в getStaticPaths и если такой страницы нет, то будет показана заглушка, а если false, то будет ошибка 404 
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.burgersId
  const res = await fetch(`http://localhost:4400/keyItems/${id}`)
  const data = await res.json()

  return {
    props: { burger: data }
  }
}

const BurgersParams = ({ burger }) => {

  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={burger.image}
          alt={burger.name}
          width={150}
          height={150}
          priority={true}
          // layout="responsive"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <p>{burger.description}</p>
      </div>
    </div>
  )
}

export default BurgersParams