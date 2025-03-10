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
        
    const downloadLink = "https://mybinder.org/v2/gh/Seth-Lupo/Newtonian-Fractals/d219abdef41b51209b4ef1342b9d4a9c8b4bd0e3"
    const downloadLabel = "Run Binder"
    
    const sourceLink = "www.sethlupo.com/Newtonian-Fractals/blob/master/Newtonian%20Fractals.ipynb"



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
    
    <p>This project generates <a href="https://en.wikipedia.org/wiki/Newton_fractal#:~:text=The%20Newton%20fractal%20is%20a,is%20given%20by%20Newton's%20method.">Newtonian fractals</a>. Effectively, it is a shape with multiple regions but zero edges—when regions touch, every region touches simultaneously.</p>

    <h1>Background</h1>

    <p>You can generate a Newtonian fractal by using a polynomial. Every n-degree polynomial is continuous and has n roots on the complex plane.</p>

    <p>When you take a random point on the complex plane, it could <i>ride</i> the polynomial down to one of these roots. Which root it arrives at depends on its particular position. If you color each of these points depending on which root it arrives at, you will create a Newtonian fractal. </p>

    <p>More specifics are written out in the notebook.</p>

    <h1>Implementation</h1>

    <p>At first, I tried using <a href="https://www.sympy.org/en/index.html">Sympy</a>. This symbolic library was easy to use but incredibly slow. I then opted to use Numpy's polynomial library. This was far faster.</p>

    <p>However, I originally did all the processing synchronously. This ended up to be ridiculously slow. I optimized it by using <a href="https://www.ray.io/">Ray</a> to do async calculations. Still, for larger more detailed images (say about 2000x2000 px), generating the image became incredibly slow.</p>

    <p>Soon I hope to revisit this project and optimize it even further.</p>

    <p>Also, I would like to note that even though I add a link to a binder so that you can run it in the cloud, I highly recommend that you run it locally. Binder is RIDICULOUSLY SLOW!</p>

    
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