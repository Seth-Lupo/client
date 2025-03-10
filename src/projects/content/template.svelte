<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 9;

    const language = ""
    const languageLogo = ""
    const languageLogo2 = ""
    
    const type = ""
    const typeLogo = ""
    const typeLogo2 = ""
        
    const downloadLink = ""
    const downloadLabel = ""
    
    const sourceLink = ""



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
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p>It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    <p>Contrary to popular belief, <a href="https://slack.com/">Lorem Ipsum</a> is not simply random text.</p>
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