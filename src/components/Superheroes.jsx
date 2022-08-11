import './Superheroes.css'

function Superheroes(props){
return(
<div className="superhero-card">
    <img className='img' src={props.url} alt=''/>
    <div className="superhero-name">{props.name}</div>
    <div className="superhero-info">{props.info}</div>
    </div>




)


}

export default Superheroes