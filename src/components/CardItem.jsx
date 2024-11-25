const CardItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-font">
          <img src={item.img_url} alt="Character" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li><strong>Character Name:</strong>{item.name}</li>
            <li><strong>Spicies:</strong>{item.species}</li>
            <li><strong>Origin:</strong>{item.origin}</li>
            <li><strong>Status:</strong>{item.status}</li>
            <li><strong>Ability:</strong>{item.abilities[0]}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardItem