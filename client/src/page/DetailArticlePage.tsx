import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import DetailContent from '../components/Detail/DetailContent';
import { getArticle } from '../services/api';
import { ArticleTypes } from '../services/api';

const DetailArticlePage = () => {
    const {id} = useParams();
    console.log(id);
    const {data,isLoading} = useQuery<ArticleTypes[]|undefined>('article', () => getArticle(id as string))
    
    if(isLoading) return <div>article loading...</div>
  return (
    <DetailContent article={data?.[0] as ArticleTypes}/>
  )
}

export default DetailArticlePage