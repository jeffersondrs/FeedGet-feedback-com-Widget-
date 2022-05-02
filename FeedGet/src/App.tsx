// // Componentes sao funçoes que retornam HTML, Obrigatorio ter a primeira letra maiuscula.

// // props são as propriedades do componente que eu quero que ele tenha, sem precisar mexer um por um. As propriedades ficarão como se fosse habilidades para serem udadas posteriormente e individualmente quando forem chamadas.
// interface BotaoProps {
//   text?: string;
// }
// // para chamar o interface tem que colocar como parametro para a função
// function Botao(props: BotaoProps){
//   return <button className="rounded bg-blue-500 text-white hover:bg-blue-800 transition-colors">{props.text ?? 'Botão'}</button>
//   // para colocar um codigo javascript dentro do html, precisa ser envolvido com chaves
// }
// function App() {
//   return <div className="flex gap-2.5">
//     <Botao text="Entrar"/>
//     <Botao text="Enviar"/>
//     <Botao />
//   </div>
//   // text nesse caso seria uma propriedade adicionada ao componente botao.
// }

// export default App

import { Widget } from "./componets/Widget"
export function App(){
  return <Widget />
}
