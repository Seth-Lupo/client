<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 10;

    const language = "Java"
    const languageLogo = "java.png"
    const languageLogo2 = ""
    
    const type = "Processing Application"
    const typeLogo = "pro.png"
    const typeLogo2 = ""
        
    const downloadLink = "/projects/N-Body Pendulum/sim.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "https://github.com/Seth-Lupo/NBodyPendulum"



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
    
    <p>This program simulates an N-Body Pendulum. This means that you can use this to simulate single pendulums, double pendulums, triple pendulums, or even a pseudo-rope!</p>

    <h1>Background</h1>

    <p>This simulation relies of <a href="https://en.wikipedia.org/wiki/Lagrangian_mechanics">Lagrangian mechanics</a>. In short, Langrangian mechanics don't just rely on forces like Newtonian Mechanics; instead, it relies on the principle of least action.</p>

    <p><a href="https://en.wikipedia.org/wiki/Stationary-action_principle">The principle of least action</a> states that an object will take the path that minimizes a quantity called the Lagrangian—kinetic energy minus potential energy.</p>

    <p>When dealing with complex systems, this is vastly more efficient than Newtonian mechanics. Instead of dealing with every force, you simply need be able to calculate an objects potential and kinetic energy to track it's path.</p>

    <p>To apply use this to be able to determine the angular acceleration of each, you must plug the Lagrangian into the <a href="https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation">Lagrange equation.</a> While I was able complete the math for a single and double pendulum, I wasn't able to calculate a general solution. That's why I borrowed <a href="https://arxiv.org/pdf/1910.12610.pdf">Boran Yesilyurt's n-body generalization.</a></p>

    <h1>Implementation</h1>

    <p>I want to note that simulation becomes less accurate more mass's you add. This is why you RK-4 integration is suitable for just a double pendulum but 100 integration steps are necessary for 5+ masses.</p>

    <p>In the demo JAR, I added 8 pendulums but slightly tweaked the initial angles. While they begin to move in the same path, they eventually scatter. They scatter faster more mass's you add.</p>

    <p>For aesthetics, I made the object change color as it moves. The faster a mass moves, more orange it appears. I also added a little blur cause who doesn't like a little motion blur???</p>

    
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