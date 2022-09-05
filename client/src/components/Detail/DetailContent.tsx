import React from 'react'
import { ArticleTypes } from '../../services/api';

const DetailContent : React.FC<{article : ArticleTypes}> = ({article}) => {

    console.log(typeof article.data);

  return (
    <div>DetailContent</div>
  )
}

export default DetailContent