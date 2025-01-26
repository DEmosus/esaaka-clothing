import DirectoryItem from "../directory-item/directory-item.component";

import { CategoriesContainer } from "./categories-items.styles";

const CategoriesItems = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.postimg.cc/mkFXQGQh/hats.avif',
      route: 'shop/hats'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.postimg.cc/wxygWy2R/jackets.avif',
      route: 'shop/jackets'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.postimg.cc/J4jmLf91/sneakers.avif',
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.postimg.cc/MTQM8WVW/women-1.avif',
      route: 'shop/womens'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.postimg.cc/3x7hJLT2/men.avif',
      route: 'shop/mens'
    }
  ]
  return (
    <CategoriesContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} route={category.route} />
      ))
      }
    </CategoriesContainer>
  )
}

export default CategoriesItems;