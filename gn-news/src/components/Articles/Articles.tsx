import { GridItem } from '@chakra-ui/react'
import ArticleCard from 'components/ArticleCard'
import SideMenu from 'components/SideMenu'

const Articles = () => {
  return (
   <>
      <GridItem><ArticleCard /></GridItem>
      <GridItem><ArticleCard /></GridItem>
      <GridItem><ArticleCard /></GridItem>
      <GridItem><ArticleCard /></GridItem>
    </>
  )
}

export default Articles