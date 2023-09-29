import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../lib/data';
import { newStuff } from '../libdeux/dataTwo';

export async function getStaticProps(){
  const AllMaterial = getSortedList();
  const AllMaterialTwo = newStuff();
      return{
    props:{AllMaterial,AllMaterialTwo}
  };
}


export default function Home({AllMaterialTwo,AllMaterial}){
  return(
    <Conception house>
   <strong> <p>salut mon amie, cest next.js ici. </p></strong>
      <h1> Some professions from different JS file but</h1>
      <h1> using the same json file with new bootstrap classname</h1>
            <div className="navbar navbar-light bg-light">
        {AllMaterialTwo && AllMaterialTwo.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "navbar-brand">
               {name}
             </Link>
            )
          )
        }
      </div>
      <br></br>
        <h2> (Origional file) Names in my list:</h2>
 <div className="list-group">
        {AllMaterial && AllMaterial.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "list-group-item list-group-item-action list-group-item-dark">
               {name}
             </Link>
            )
          )
        }
      </div>
    </Conception>
  );
}

