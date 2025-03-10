<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 11;

    const language = "Python"
    const languageLogo = "python.png"
    const languageLogo2 = ""
    
    const type = "Notebook/Script"
    const typeLogo = "notebook.png"
    const typeLogo2 = ""
        
    const downloadLink = "https://mybinder.org/v2/gh/Seth-Lupo/Connect-4-AI.git/HEAD"
    const downloadLabel = "Run Binder"
    
    const sourceLink = "www.sethlupo.com/Connect-4-AI"



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
    
<p>This project lets you play against a simple connect 4 AI. At its hardest difficulty, it is nearly impossible to win against.</p>

<h1>Background</h1>

<p>At school I remember my friend Dawson talking about min-max trees. He was trying to make a chess AI (which is infinitely harder). I wanted how min-max trees applied to something simpler.</p>

<p>My AI works by looking into the future. In order to find it's best move, it looks at your best response. It figures out your best response by trying to search for its best response. Each tier of the tree looks deeper and deeper into the future. Each node of the tree is associated with a score—a rating it gives to each possible configuration of the board. A high score corresponds to the AI winning while a low score corresponds to the user winning.</p>

<p>The node is either the max value of all the subnodes or the min value of all the subnodes. It does this because it wants to assume that each player is acting rationally and would actually do the best move.</p>

<p>However, the amount of searching grows exponentially, so it can't look infinitely. At a certain point, the AI has to judge the position for itself. While there is some wiggle-room on how you do this, I opted to count the number of lines and weight them by length.</p>

<p>To also reduce the workload, I utilize something called alpha-beta pruning. In short, it reduces the amount of scenarios the AI check's through by asking 'why would I or the user move this when we know the other move is assured to be better?'</p>

<h1>Implementation</h1>

<p>I first tried to do this project by actually constructing a tree in memory. However, I realized that that is unnecessary and its better to just keep it functional (Java has made me to object oriented!!!)</p>

<p>I put this in a notebook because I was intending to write some documentation just like for my Newtonian fractal generator. However, as of now, I have not done that yet. :(</p>

    
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