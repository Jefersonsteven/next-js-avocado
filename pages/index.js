import react, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Link from 'next/link';

const Home = () => {
  const [ input, setInput ] = useState('')

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <NavBar/>
      <h1>Hello, World!!</h1>
      <input type="text" value={input} onChange={handleInput}/>
      <Link href={`/product/${input}`}>
        Search
      </Link>
    </div>
  );
}

export default Home;