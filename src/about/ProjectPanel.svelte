<script>
    import ProjectContainer from "../projects/ProjectContainer.svelte";
import viewport from "../useViewportAction";
    let active = false

</script>

<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}>

  

    <h1>Welp... that's enough talk, time to show you my</h1>
    <h3>PROJECTS!</h3>
    <ProjectContainer></ProjectContainer>
    

   
</main>

<style>
    main {
        width: calc(100% - 20vh);
        
        margin: 10vh;

        display: flex;
        position: relative;
        flex-flow: column;
        border-left: 0.5rem solid;
        border-right: 0.5rem solid;
        border-color:#009fff ; 
       
        

        opacity: 0;
        
        

        /* background-color: grey; */
    }

    h1, h2, p {
        margin-left: 10vh;
        margin-right: 10vh;
    }

    h1 {
        font-size: 2rem;
        color: grey;
        font-family: 'Martian Mono', monospace;
        text-align: center;
    }

    h2 {
        font-size: 10rem;
        font-family: 'Martian Mono', monospace;
        text-align: center;
    }

    h3 {
        font-size: 10vw;
        font-family: 'Martian Mono', monospace;
        text-align: center;
        color:#009fff;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-size: 1.25rem;
        margin-top: 1.25rem;
    }

    /* main :last-child {
        margin-bottom: 1.25rem;
    } */

    b {
        font-weight: 900;
    }

</style>