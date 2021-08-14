import Card from "./Card";

function Board(props) {
    let {images, clickedCard} = props;
    let randomImages = [ ...images];
    shuffle(randomImages);
    return <div className="board" >
    {
        randomImages.map((image, index) => {
          return <Card key={index} index={index + 1} image={image} clickedCard={clickedCard}/>
        })
    }
    </div>
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default Board;