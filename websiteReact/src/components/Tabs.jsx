export default function Tabs({children, buttons, ButtonsContainer = 'menu'}){
    //const ButtonsContainer = buttonsContainer; //Hay que hacer esto xq si escribiera <buttonsContainer> buscaría un built-in component con ese nombre en vez de tomar la variable y tratarlo como un CustomComponent
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}