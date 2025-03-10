<script>
    import viewport from "../useViewportAction";
    let active = false

</script>

<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}>

    <div id="acc1"></div>
    <div id="acc2"></div>
    <div id="portrait"></div>
    <div id="text">
        <p>I 
            <span id="l">l</span><span id="o">o</span><span id="v">v</span><span id="e">e</span>
            math and computer science!</p>
    </div>

</main>

<style>

    main {
        width: calc(100% - 20vh);
        height: 80vh;
        margin: 10vh;

        display: flex;
        position: relative;
        flex-flow: row;

        opacity: 0;

    }

    #acc1, #acc2 {
        width: 50px;
        height: 50px;
        position: absolute;
        
    }

    #acc1 {
        border-top: 0.5rem solid;
        border-left: 0.5rem solid;
        border-color: #a300ff;  
    }

    #acc2 {
        bottom: 0;
        right: 0;
        border-right: 0.5rem solid;
        border-bottom: 0.5rem solid;
        border-color: #a300ff; 
        
    }

    * {
        /* border: white solid 1px; */
    }

    #portrait {
        width: 39%;
        min-width: 33vh;
        background-image: url("portrait.svg");
        background-size: cover;
        background-position: top;
        
    }

    #text{
        width: 61%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    p {
        font-family: 'Martian Mono', monospace;
        font-size: 5rem;
    }

    #l, #o, #v, #e {
        color: #009fff;
        color: #5F0094;
        animation: blink 2s infinite;
    }

    #l {animation-delay: 0.5s;}
    #o {animation-delay: 1s;}
    #v {animation-delay: 1.5s;}
    #e {animation-delay: 2s;}

    @keyframes blink {
        0% {
            color: #5F0094;
            
        }
        10% {
            color: #009fff;   
            transform: scaleX(5);
        }
        80% {
            color: #5F0094;
        }
        100% {
            color: #5F0094;
        }
    }

    

</style>