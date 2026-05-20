export default function About () {
  return (
    <div>
      <main>
        <div className="mb-8 flex items-center justify-center lg:-mt-32 lg:justify-start lg:translate-y-32 lg:max-w-screen-lg lg:mx-auto">
          <img src="img/logo.png" alt="Kino logotype" />
        </div>
        <section className="bg-card p-8 m-2 lg:max-w-screen-lg lg:mx-auto">
          <div>
            <h1 className="text-left font-bold text-3xl mb-6 lg:text-center lg:mt-12">
              Om oss - Kino
            </h1>
            <p className="lg:max-w-screen-lg lg:mx-auto">
              Välkommen till Kino – en exklusiv biograf där film möter finess
              och varje besök är noggrant utformat för att bli något utöver det
              vanliga. Kino grundades med en tydlig ambition: att skapa en
              sofistikerad mötesplats där filmälskare kan njuta av filmens magi
              i en miljö präglad av komfort, kvalitet och personlig service.
              Från första stund har Kino varit mer än en traditionell biograf.
              Här förenas den stora filmupplevelsen med gastronomi, dryck och
              social samvaro. Våra moderna salonger erbjuder generösa, bekväma
              sittplatser och en genomtänkt atmosfär, kompletterat av
              restaurang, bar och kiosk med ett noga utvalt sortiment – från
              eleganta tilltugg till tidlösa bioklassiker. Kino vänder sig till
              alla som uppskattar det lilla extra. Hit kommer par för en
              romantisk kväll, vänner för en stilfull sammankomst och familjer
              för att skapa gemensamma filmminnen. Utvalda kvällar bjuder vi
              även in till exklusiva evenemang. Vår Champagnebio kombinerar film
              med bubbel, charkbricka och mingel i pausen, medan Barnbio
              erbjuder en lekfull men genomtänkt upplevelse med maskotbesök och
              aktiviteter anpassade för våra yngsta gäster. Hos Kino är varje
              detalj omsorgsfullt utvald. Den mjuka belysningen, de inbjudande
              salongerna och det noggrant komponerade utbudet i restaurang och
              bar samverkar för att skapa en känsla av lyx, närhet och elegans.
              Vår strävan är att varje gäst ska känna sig sedd och bortskämd –
              oavsett om det gäller en premiärkväll, en specialvisning eller ett
              spontant biobesök. Med Kino vill vi erbjuda mer än film. Vi skapar
              upplevelser där stämning, smaker och filmkonst smälter samman till
              något minnesvärt. Välkommen till en biograf där helheten är lika
              viktig som filmen på duken. Kino – där filmupplevelsen förädlas
              och varje kväll blir ett minne.
            </p>
          </div>
        </section>
        <section className="m-2 lg:max-w-screen-lg lg:mx-auto">
          <div className="">
            <img src="img/map.png" alt="Karta över Kino" className="" />
          </div>
        </section>
        <section className="bg-card p-8 m-2 lg:max-w-screen-lg lg:mx-auto">
          <div>
            <h2 className="font-bold text-2xl mb-6">Salong Atlas</h2>
            <p>
              Vår största och mest storslagna salong. Salong Atlas bär upp de
              stora premiärerna och de episka berättelserna, där generöst
              utrymme, mäktigt ljud och en omslutande atmosfär låter filmen ta
              fullt grepp om publiken.
            </p>
            <h2 className="font-bold text-2xl mb-6 mt-6">Salong Lumière</h2>
            <p>
              En intim och sofistikerad salong, döpt efter filmkonstens
              pionjärer. Här står närhet och detaljrikedom i fokus – perfekt för
              konstfilm, utvalda visningar och filmupplevelser som förtjänar
              full uppmärksamhet.
            </p>
            <h2 className="font-bold text-2xl mb-6 mt-6">Salong Bijou</h2>
            <p>
              Vår mest personliga salong, där ordet bijou – franska för “liten
              juvel” – speglar känslan. Salong Bijou lämpar sig för barnbio,
              specialvisningar och privata evenemang, med en varm och inbjudande
              stämning som gör varje visning minnesvärd.
            </p>
          </div>
        </section>
        <section className="m-2 lg:flex lg:flex-row lg:max-w-screen-lg lg:mx-auto">
          <div className="overflow-hidden lg:mr-2">
            <img
              src="img/salon.png"
              alt="insidan av salongen"
              className="w-full object-cover mb-2"
            />
          </div>
          <div className="overflow-hidden lg:max-w-screen-lg lg:mx-auto">
            <img
              src="img/snacks.png"
              alt="Kiosken"
              className="w-full object-cover"
            />
          </div>
        </section>
        <section className="m-2 lg:m-2 lg:mx-auto">
          <div className="lg:max-w-screen-lg lg:mx-auto lg:overflow-hidden">
            <img
              src="img/outside.png"
              alt="Kino utsida"
              className="lg:w-full lg:object-cover"
            />
          </div>
        </section>
        <section className="bg-card p-8 m-2 lg:max-w-screen-lg lg:mx-auto">
          <div>
            <p>
              Det sägs att huset alltid har vetat att det en dag skulle bli en
              plats för berättelser. Redan innan filmrullarna och neonskylten
              tog plats lär kvällsljuset ha samlats runt tornet, som om
              byggnaden själv ville bli betraktad. När gatlyktorna tändes
              speglades skenet i de välvda fönstren och förbipasserande stannade
              till – inte för att de visste varför, utan för att huset bad om
              uppmärksamhet. När Kino till slut slog upp portarna var det som om
              lokalen drog en lättnadens suck. De tunga tegelväggarna, som burit
              decennier av stadens röster, fick äntligen fyllas av nya historier
              – viskade repliker, dämpade skratt och det där speciella
              ögonblicket precis innan filmen börjar. Tornet, som alltid hållit
              vakt över kvarteret, blev nu en tyst biovärd som varje kväll ser
              gästerna anlända, lite uppklädda, lite förväntansfulla. Och än i
              dag, när dörrarna öppnas och ljuset inifrån spiller ut över gatan,
              känns det som om huset lutar sig fram en aning och viskar:
              ”Välkommen. I kväll har jag något att berätta.”
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
