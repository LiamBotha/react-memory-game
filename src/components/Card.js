function Card(props) {
    const { index, image, clickedCard } = props;
    return (
        <div className={"card " + image.color} onClick={() => clickedCard(image.text)}>
            <img src="" alt={image.text}/>
        </div>
    );
}

export default Card;