const Card = ({ src, code }) => {
    return (
      <div className="delt-card">
        <img src={src} alt={code} width="150" height="180"/>
      </div>
    )
}

export default Card;
