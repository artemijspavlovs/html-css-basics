const PrimaryStyles = {
    color: 'red'
}

const SecondaryStyles = {
    color: 'blue'
}

export const ArtPrimary = ({ text }) => {
    return (
        <button style={PrimaryStyles}>{text}</button>
    )
}

export const ArtSecondary = ({ text }) => {
    return (
        <button style={SecondaryStyles}>{text}</button>
    )
}