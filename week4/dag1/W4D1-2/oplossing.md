[Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/#nl)

justify-content: flex-end

`flex-start`: Elementen aan de linkerkant van de container uitlijnen.
`flex-end`: Elementen aan de rechterkant van de container uitlijnen.
`center`: Elementen in het midden van de container uitlijnen.
`space-between`: Elementen opstellen gelijkmatig verdeeld over de as.
`space-around`: Elementen opstellen met gelijke ruimte aan de buitenkanten op de as.

align-items: flex-end
align-self (voor child elementen)

`flex-start`: Elementen worden uitgelijnd naar de bovenkant van de container.
`flex-end`: Elementen worden uitgelijnd naar de onderkant van de container.
`center`: Elementen worden uitgelijnd op het verticaal middelpunt van de container.
`baseline`: Elementen worden uitgelijnd op de basislijn van de container.
`stretch`: Elementen worden uitgerokken om binnen de container te passen.

 flex-direction: row

`row`: Elementen worden geplaatst in dezelfde richting als deze van de tekst.
`row-reverse`: Elementen worden geplaatst in de tegenovergestelde richting van de tekst.
`column`: Elementen worden onder elkaar geplaatst.
`column-reverse`: Elementen worden boven elkaar geplaatst.

`order`: -1 0 (default), 1

flex-wrap: no-wrap

`nowrap`: Alle elementen worden samengepakt op een enkele lijn.
`wrap`: Elementen worden over meerdere lijnen gewikkeld.
`wrap-reverse`: Elementen worden over meerdere lijnen in omgekeerde richting gewikkeld.

flex-flow (combi van flex-direction en flex-wrap)

`flex-flow`: column wrap;

align-content: flex-start

`flex-start`: Lijnen worden aan de bovenzijde van de container verpakt.
`flex-end`: Lijnen worden aan de onderzijde van de container verpakt.
`center`: Lijnen worden op het verticale center van de container verpakt.
`space-between`: Lijnen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring tussen elke lijn.
`space-around`: Lijnen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring rond elke lijn.
`stretch`: Lijnen worden uitgerokken om in de container te passen.

Oplossing #24:

flex-flow: column-reverse wrap-reverse;
justify-content: center;
align-content: space-between

#Winc
