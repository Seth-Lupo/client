<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 11;

    const language = "Javascript"
    const languageLogo = "js.png"
    const languageLogo2 = ""
    
    const type = "JQuery/p5.js Website"
    const typeLogo = "jquery.png"
    const typeLogo2 = "p5.png"
        
    const downloadLink = "https://seth-lupo.github.io/Coronavirus-Deaths-Visualization/"
    const downloadLabel = "Visit Site"
    
    const sourceLink = "www.sethlupo.com/Coronavirus-Deaths-Visualization"



</script>

    <Info
    grade={grade}
    language={language}
    languageLogo={languageLogo}
    languageLogo2={languageLogo2}
    type={type}
    typeLogo={typeLogo}
    typeLogo2={typeLogo2}
    ></Info>

<main>
    
    <p>This website seeks to teach people about graph algorithms by using an interactive example. It covers a few topics, namely </p>

    <p>When you press the button, the a large chunk of flags fall from the sky. The flags represent the quantity of deaths corresponding to the country. The countries are fall in order from the most deaths to the least deaths. </p>

    <h1>Motivation</h1>

    <p>I made this project at the start of the summer of 2020. I remember talks about ending the lock-down. I thought this was absurd! Did people understand the death toll? I often heard politicians diminishing the lethality of the disease. They argued that 1%-2% mortality rate was such a low number that it wasn't worth the economic cost.</p>

    <p>In making this project, I sought to put that 1%-2% into perspective. I did so by using those <i>numbers</i> into a graphic.</p>

    <h1>Data</h1>

    <p>I originally used <a href="https://covid19api.com/">Kyle Redelinghuys' COVID-19 API</a>. However, when I came back to the site to put it on this portfolio, I noticed that he had put a paywall up. I opted to switch to a different source of data: <a href="https://github.com/pomber/covid19">a daily updated JSON file from Rodrigo Pomber.</a> However, this was a pain to integrate, because you could not search for the data with country codes (only by country name). Still, at least it works again!</p>
        
    <h1>Design Choices</h1>

    <p>While I've certainly improved as a frontend designer over the past four years, I still like some of the choices I made. In particular, I like the timing, dust, and thud: it really gives mass to the object.</p>

    <p><i>Just to note: when I first made this, each flag represented 200 hundred people. Chillingly, I recently had to switch it to a 1000 because it scrolled for too long.</i></p>

    
</main>

    <Sources 
    downloadLink={downloadLink} 
    downloadLabel={downloadLabel} 
    sourceLink={sourceLink}></Sources>

<style>

    main {
        padding: 0rem 2.5rem;
        max-width: 100%;
        align-self: center;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-size: 1.25rem;
        margin: 1.25rem 0rem;
        color: white;
    }

    h1 {
        font-family: "Lato";
        font-size: 1.25;
        font-weight: 800;
    }

    @media (min-width: 1000px) {
        p {
            font-size: 1.5rem;
        }
    }

</style>