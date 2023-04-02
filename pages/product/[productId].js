import react, { Fragment } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar/NavBar';

function ProducId() {
  const { query: { productId } } = useRouter();

  return (
    <Fragment>
      <NavBar/>
      <h1>Este es el producto {productId}</h1>
    </Fragment>
  );
}

export default ProducId;
