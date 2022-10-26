const KarinaButtonTextStyles = {
    color: '#9E7682',
    width: '200px',
    backgroundColor: '#EDCB96',
}

const KarinaButtonText = ({ text }) => {
    return (
        <button style={KarinaButtonTextStyles}> {text}</button >
    )
}

export default KarinaButtonText