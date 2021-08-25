/* FAZER O SCROLL SUAVE (DESLIZAR APERTANDO NA ANCORA, E IR DEVAGAR
    ATE O LOCAL DO ID DESEJADO) */



/* 
a[href^="#"] mostra que somente os itens que tiver jogo da velha vao ser
selecionados nessa variavel
*/

let  menuItens = document.querySelectorAll('.navegacao__div a[href^="#"]')

menuItens.forEach(item =>{
    item.addEventListener("click",function(event){

        event.preventDefault()
        
        /* pega o elemento que foi clicado entre os itens do foreach */
        let elemento = event.target
        
        /* pega somente os atributos que esta dentro do href */
         let id = elemento.getAttribute('href')

         /* pega os elementos com aquela id que ja foi buscada acima */
        let section = document.querySelector(id)

        console.log(section)

        /* ver qual o a distancia da section com relacao ao topo da pagina */
        console.log(section.offsetTop)

        /* faz com que a janela se arraste ate o top do elemento da section
        selecionada, e behavior faz um movimento suave,
        OBS:behavior ainda nao funciona em todos os browser */
        window.scroll({
            top:section.offsetTop,
            behavior:"smooth",
        })


    })
})

