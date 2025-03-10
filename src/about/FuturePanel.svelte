<script>
    import viewport from "../useViewportAction";
    import getSchool from "./getSchool";
    let active = false
</script>


<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}>

    <div id="acc1"></div>

    <h1>Future Plans</h1>
    
    <p>My passion for difficult math and computer science puzzles drives my interest in becoming a quantitative trader. I thrive on the challenge of solving complex problems, and I see quantitative trading as the perfect intersection of these disciplines, where I can apply advanced mathematical models and cutting-edge computational techniques to real-world financial markets. </p> 
    
    <p>What can I say... the fast-paced, intellectually demanding environment of trading excites me!</p>
        
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
        border-color: #a300ff; 

        opacity: 0;
        

        /* background-color: grey; */
    }


    

   


    h1, h2, p {
        margin-left: 10vh;
        margin-right: 10vh;
    }

    h1 {
        font-size: 2.5rem;
        font-family: 'Martian Mono', monospace;
    }

   

    p {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-size: 1.25rem;
        margin-top: 1.25rem;
    }

    main :last-child {
        margin-bottom: 1.25rem;
    }

    b {
        font-weight: 900;
    }

</style>