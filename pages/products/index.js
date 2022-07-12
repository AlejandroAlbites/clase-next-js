import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/personajes.module.css'

const Index = ({dataRickMorty}) => {
  const router = useRouter();
    const [data, setData] = useState(dataRickMorty);
    
    const handleClick = () => {
      router.push({
        pathname: "/home",
      });
    };
  return (
    <div className={styles.container}>
       <button className={styles.btn} onClick={handleClick}>Ir al Home</button>
        <div className={styles.cardsContainer}>
          { data.results.map( item => (
            <div key={item.id} className={styles.cardContainer}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <Link href={`/products/${item.id}`}>
                  <a className={styles.viewMore}>Ver mas ...</a>
               </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const apiRickMorty = await fetch(
      'https://rickandmortyapi.com/api/character/',
      {
        method: "GET",
      }
    );
    const dataRickMorty = await apiRickMorty.json();
    console.log("dataServer:", dataRickMorty);

    return {
      props: {
        dataRickMorty,
      }, // will be passed to the page component as props
    };
  }

export default Index