import './Pokedex.scss'
function PokeData(props:any) {
    const {data} = props; 
    return ( 
        <div className='poke-data'>
        <img className='poke-img' src={data.image}/>
        <div className='nummber'>{data.id}</div>
       <div className='poke-name'>{data.name}</div>
       <div className='poke-type'>Type: {data.type}</div>
      </div>
     );
}
export default PokeData;

