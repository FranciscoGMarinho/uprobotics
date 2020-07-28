import React from  'react'
import Container from './Container';
import NavbarCreate from '../components/NavbarCreate';


/*
 * Container da Página Create
 */

export default function CreateContainer({children}){
    return(
        <>
        <NavbarCreate/>
        <Container> {children} </Container>  
        </>
    )
}