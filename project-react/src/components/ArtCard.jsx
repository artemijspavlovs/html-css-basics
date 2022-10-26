import './ArtCard.css'
import { ArtPrimary, ArtSecondary } from './ArtButtons'

const PositionStyles = {
    fontSize: '2rem',
    color: '#F7C4A5',
}

const ArtCard = ({ name, position, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} />
            <div className="name">{name}</div>
            <div style={PositionStyles}>{position}</div>
            <ArtPrimary text={'connect'} />
            <ArtSecondary text={'block'} />
        </div>
    )
}

export default ArtCard