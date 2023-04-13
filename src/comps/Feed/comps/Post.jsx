import "./Post.css";

export default function Post(props) {
    return(
        <div className="Post">

          <div className="Cabecalho_Post">
            <div className="imgAutor">
              <img src={props.imgAutor} />
            </div>
            {props.nome}
          </div>
          <div className="Conteudo_Post"> <img src={props.imgPost} /> </div>
          <div className="Acoes_Post">Ações do Post </div>
          <div className="Comentarios_Post"> {props.comentarios}</div>
        </div>
    )
}