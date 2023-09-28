import Link from 'next/link';
import Conception from '../components/layout';
import {getEachInfo, getData} from '../lib/data';

export async function getStaticProps( {params} ){
  const itemData = await getData(params.id);
  return{
    props:{
      itemData
    }
  };
}

export async function getStaticPaths(){
 const paths = getEachInfo();
  return{
    paths,
    fallback:false
    };
}

export default function Entry({itemData}){
  return(
      <Conception>
<article className="card col-6">
  <div className="card-body">
    <h5 className="card-title">name: {itemData.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">age: {itemData.age}</h6>
    <p className="card-text">profession: {itemData.profession}</p>
  </div>
</article>
      </Conception>
  );
}