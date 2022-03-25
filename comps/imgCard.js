import styled from 'styled-components';

const RedCont = styled.div`
background-color:${props=>props.bg};
color:${props=>props.text_cl}
`;


export default function ImgCard({
    img="/dog.jpeg",
    tcl="#3A3A",
    children=null
}){


    return <RedCont text_cl={tcl}>
        {children}
        <img src={img}/>
        <h1>This is a cat</h1>
        
    </RedCont>
}