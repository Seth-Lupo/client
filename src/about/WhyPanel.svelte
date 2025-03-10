<script>
    import viewport from "../useViewportAction";
    let active = false
    
</script>

<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}>



    <div id="header">
        <div id="acc1"></div>
        <div id="acc2"></div>
        <h1>Why do I love them?</h1>
    </div>
    <div id="divider">
        <div id="math">
            <h2><span id="c1">Math</span> lets me solve problems.</h2>
        </div>
        <div id="cs">
            <h2><span id="c2">CS</span> lets me implement solutions.</h2>
        </div>
    </div>


</main>

<style>
    main {
        width: calc(100% - 20vh);
        margin: 10vh;
        
        display: grid;
        grid-template-columns: 10vh 1fr 10vh 2fr 10vh;
        grid-template-areas: ". h . d .";

        border-left: 0.5rem solid;
        border-right: 0.5rem solid;
        border-color: #a300ff; 
        
        opacity: 0;
        justify-content: center;

        
        
        /* background-color: grey; */
    }
    
    
    #header {  
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        grid-area: h;
        
    }
    
    #divider {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: d;
        
    }
    
    #math, #cs {
        width: 100%;
        height: 50%; 
        display: flex;
       
    }
    
    #math {
        border-bottom: 0.25rem solid;
        border-color: #a300ff; 
        align-items: flex-end;
    }
    #cs {
        border-top: 0.25rem solid;
        border-color: #a300ff; 
        align-items: flex-start;
    }
    
    h1 {
        font-size: 2.5rem;
        font-family: 'Martian Mono', monospace;
        text-align: center;
        margin: 1.25rem;
    }
    
    
    h2 {
        font-size: 2.5rem;
        font-family: 'Martian Mono', monospace;
        

        margin-top: 1.25rem;
        margin-bottom: 1.25rem;

    }

    #math h2 {
        color: #6f00ff;
    }

    #cs h2 {
        color: #0078ff;
    }


    
    #c1, #c2 {
        
    }

   

    #acc1, #acc2 {
        width: 25px;
        height: 25px;
        position: absolute;
        
    }

    #acc1 {

        top: 0;
        left: 0;
        border-top: 0.25rem solid;
        border-left: 0.25rem solid;
        border-color: #a300ff;  
    }

    #acc2 {
        bottom: 0;
        right: 0;
        border-right: 0.25rem solid;
        border-bottom: 0.25rem solid;
        border-color: #a300ff; 
        
    }
    
    
</style>