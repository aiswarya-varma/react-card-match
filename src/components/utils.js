import pikachu from '../img/pikachu.png';
import charmander from '../img/charmander.png';
import squirtle from '../img/squirtle.png';
import bulbasaur from '../img/bulbasaur.png';
import jigglypuff from '../img/jigglypuff.png';
import ash from '../img/ash.png';
import misty from '../img/misty.jpg';
import brock from '../img/brock.jpg';

const items = [pikachu, charmander, squirtle, bulbasaur, jigglypuff, ash, misty, brock];

/**
 * Generates a name for the card based on the image it will hold.
 * @param {String} imgName name of image 
 */
const getCardName = (imgName) => {
    return imgName.split("/")[3].split(".")[0];
}


export { items, getCardName };