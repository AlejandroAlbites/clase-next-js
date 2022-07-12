import React, { useState } from 'react'
import Link from "next/link";
import styles from '../../styles/personajeId.module.css'

const ProductId = ({dataRickMorty}) => {
    const [data, setData] = useState(dataRickMorty);
 
  return (
    <div className={styles.container}>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Especie: {data.species}</p>
      <p>Estado: {data.status}</p>
      <Link href='/products'>
                  <a className={styles.comeBack}>Volver</a>
               </Link>
    </div>
  )
}

export async function getServerSideProps({ params }) {
    const apiRickMorty = await fetch(
      `https://rickandmortyapi.com/api/character/${params.productId}`,
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

export default ProductId