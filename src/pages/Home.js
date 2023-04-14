import React from 'react'
import { useSearchParams  } from "react-router-dom"; 

import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id")

  return (
	<ItemListContainer id={id}/> 
  )
}
export default Home 
