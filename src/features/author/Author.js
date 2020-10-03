import React from "react";
import Main from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";

function Author() {

    return (
        <Main>
            <Header title="O autorze" />
            <Section
                contentHeader="Łukasz Krzemiński"
                contentBody={
                    <>
                        Cześć 😁, 
                        <br />
                        nazywam się Łukasz, <b>pochodzę z Olesna</b> - małego miasteczka w województwie opolskim. Jestem absolwentem <i>Politechniki Wrocławskiej</i> na kierunku <i>Automatyka i Robotyka</i>. Mam 25 lat i mieszkam we Wrocławiu. Obecnie pracuję w firmie zarządzającej i monitorującej sieć bankomatów i wpłatomatów. Od jakiegoś czasu postanowiłem spróbować swoich sił w nauce <i>Frontendu</i> aby rozpocząć pracę programisty.
                        <br />
                        W czasie wolnym od pracy czy też nauki zajmuję się amatorsko <strong>produkcją
                        domowego piwa</strong>. Póki co mam na koncie zaledwie 7 warek ale w głowie rodzą się coraz bardziej rozbudowane i szalone pomysły. Chyba każdy lubi po ciężkim dniu zasiąść wygodnie w fotelu i uraczyć się odpowiednio schłodzonym piwkiem :). Dużą satysfakcję sprawia fakt, że mogę poczęstować rodzinę czy znajomych własnym wyrobem!
                    </>
                }
            />
        </Main>
    );
}

export default Author;