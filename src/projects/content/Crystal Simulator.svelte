<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 11;

    const language = "Java"
    const languageLogo = "java.png"
    const languageLogo2 = ""
    
    const type = "Processing Application"
    const typeLogo = "pro.png"
    const typeLogo2 = ""
        
    const downloadLink = "/projects/Crystal Simulator/sim.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "www.sethlupo.com/CrystalSimulator"



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
    <p>This project shows a crystal solidifying at the atomic level. Particularly, it simulates ionic bonding.</p>

    <h1>Controls</h1>

    <p>To rotate your view, you can use the WASD keys. To zoom in and out, use Z and X.<p>

    <h1>Background</h1>
    
    <p>It does so with a simplified model: <a href="https://en.wikipedia.org/wiki/Lennard-Jones_potential">Lennard-Jones potential</a>. This model describes the force each atom applies on each other as a function of distance. This function can be split into two terms: attraction and repulsion. The attractive force increases with proximity. The repulsive force also increases with proximity, and eventually overtakes attraction. Because of this, these forces equal each other at a certain distance: the bond length.</p>

    <p>While the Lennard-Jones model is not the most scientifically accurate, it runs relatively quickly and produces fascinating visuals—I'm a programmer that likes fun looking things, not a chemist!</p>

    <h1>Implementation</h1>

    <p>In this simulation, atoms with different colors attract and atoms with like colors repel. This simulates both positively and negatively charged ions.</p>

    <p>The simulation begins as a gas—each particle is given a high initial velocity. However, over times, the particles slow and coalesce into cubic crystals.</p>
    
    <p>This simulation can be quickly modified to produce metallic bonding. All you would need to change is you would modify the code so that all ions attract each other. However, it becomes far more finicky when you attempt to simulate more complicated crystal lattices.</p>

    <p>I want to credit <a href="https://www.youtube.com/@NilsBerglund">Nils Berglund</a> as being the inspiration for this project; his channel introduced me to the Lennard-Jones potential through his 2D simulations.</p>
    
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