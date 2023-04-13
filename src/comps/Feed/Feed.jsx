import './Feed.css';
import Post from './comps/Post';
import imgpost from  "./comps/imagens/lanainsta.webp";
import imgautor from "./comps/imagens/lana-delrey.webp"
import imgautor2 from "./comps/imagens/kayblackperfil.jpg" 
import imgpost2 from "./comps/imagens/kayblackpost.jpg"
import imgautor3 from "./comps/imagens/veighperfil.jpg"
import imgpost3 from "./comps/imagens/veighpost.jpg"

export default function Feed (props) {
 
    return (
     <div className='Feed'>
        <Post nome='Lana Del Rey' imgAutor={imgautor} imgPost={imgpost} comentarios="Amei" />
        <Post nome='Kay Black' imgAutor={imgautor2} imgPost={imgpost2} comentarios="Matei" />
        <Post nome='Veigh' imgAutor={imgautor3} imgPost={imgpost3} comentarios="Nem ligo"/>
        <Post nome='Fabia' comentarios="Já peguei"/>
        <Post nome='Alinny' comentarios="Nem é tudo isso"/>      
     </div> 
    )
  }