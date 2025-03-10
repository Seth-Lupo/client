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
        
    const downloadLink = "/projects/Wave Simulator/sim.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "https://github.com/Seth-Lupo/WaveMaker"



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
    <p>This project simulates energy waves. It darkens wave peaks and lightens wave troughs.</p>

    <h1>Controls</h1>

    <p>You can click and drag to create ripples.</p>
    
    <p>However, you can also create linear and conic walls, but these must added through the constructor for the Mesh class.<p>

    <p>You can also turn this into a 3D simulation by setting Main.SPACIAL to true. If in 3D, you can change the angle your viewing the surface at by using the W and S keys. </p>

    <h1>Background</h1>

    <p>As far as physics simulations, this one was relatively simply. The plane can be described as a two dimensional array of points. These points are associated with a certain height, vertical velocity, and vertical acceleration. The vertical acceleration is proportional to the points <i>relative height</i> when compared to nearby points. In calculus, this is formally known as the <a href="https://en.wikipedia.org/wiki/Laplace_operator#:~:text=In%20mathematics%2C%20the%20Laplace%20operator,scalar%20function%20on%20Euclidean%20space.">Laplacian</a>.</p>

    <p>This means that every point is being pulled towards nearby points—each point applies tension to each other.</p>

    <h1>Implementation</h1>

    <p>This physics simulation uses RK-4. It is rather stable as opposed to some other simulations (I'M LOOKING AT YOU N-BODY PENDULUM!). It also runs relatively fast.</p>

    <p>The JAR below does not contain walls or initial disturbances. However, as mentioned before, you can put some in by going into the code. Use methods with "excite" to create disturbances and methods with "raise" to make walls. Just to note, parameters that describe X and Y don't want values in terms of pixels, but in terms of % width and height.</p>

    <p><i>I suggest you play around with this one...</i></p>

    <h2></h2>



    
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