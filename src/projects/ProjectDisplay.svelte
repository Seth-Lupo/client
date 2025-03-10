<script>

    import { onMount } from "svelte";
  import currentContent from "./currentContent";
    
  import currentProject from "./currentProject";
  import Sources from "./Sources.svelte";


    
    

    let active = false
   
    onMount(() => {
       active = true
       document.querySelector("html").style.overflowY = "hidden"
    }) 

    let remove = () => {
        active = false
        setTimeout(() => {
            currentProject.set(0)
            document.querySelector("html").style.overflowY = "scroll"
        }, 300)
    }

</script>


<main
class:mountingMain={active} 
class:unmountingMain={!active}>

<div id="x" on:click={remove} ></div>

    

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="display" 
   
    class:mountingDisplay={active} 
    class:unmountingDisplay={!active}>  

        <div id="acc1"></div>
        <div id="acc2"></div>
        <div id="acc3"></div>
        <div id="acc4"></div>

        
        <div id="innerDisplay">

            <div  id="headerDiv">
                <h1>
                    
                    <div id="acc5"></div>
                    <div id="acc6"></div>
                    
                    {$currentProject}
                
                </h1>
                <img src={"/projects/" + $currentProject + "/main.png"}>
            </div>

            <svelte:component this={$currentContent}></svelte:component>
            

            
        </div>

        

        




    </div>

</main>


<style>

    #x {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;

        background-image: url("/x.png");
        background-size: cover;
    }

    #innerDisplay {
        /* padding: 1.25rem; */
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    #headerDiv {
        width: 100%;
        height: 100%;
        display: flex;
       
        width: 100%;
        
       
        /* border: #5600ff solid 3px; */
        align-items: center;
        justify-content: space-evenly;

    

    }

    h1 {
        font-family: 'Martian Mono', monospace;
        font-size: 3.5rem;
        width: min-content;
        /* height: auto; */
        color: #0078ff;
        text-align: center;
        height: calc(100% - 5rem);
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        
        /* border: #5600ff double 1rem; */

    }

    img {
        max-width: calc(61% - 1.25rem);
        max-height: calc(100% - 5rem);
        align-self: center;
        /* border: 0.5rem dashed #5600ff; */
        
       
    }

    @media screen and (max-aspect-ratio: 6/3) and (max-width: 1100px) {
        #headerDiv {
            flex-flow: column;
            height: fit-content;
            
        }
        img {
            
            margin-bottom: 1.25rem;
        }
        h1 {
            
            margin-left: 0;
            margin-right: 0;
            margin: 1.25rem;
            width: fit-content;
            /* padding: 1.25rem;
            border-left: #5600ff 0.5rem solid;
            
            border-right: #5600ff 0.5rem solid; */
            
           
        }

        #acc5, #acc6 {
            display: none;
        }
    }

    main {
        position: fixed;
        top: 0%;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(0, 120, 240, 0.2);
        z-index: 3;
        backdrop-filter: blur(5px) saturate(0.3) brightness(0.4);

        display: flex;
        align-items: center;
        justify-content: center;
       
        
    }

    

    #display {
   
        width: calc(100vw - 30vh);
        height: 90vh;
        
        /* background-color: black; */
        /* border: 0.5rem solid #0078F0; */
        z-index: 10;

        opacity: 0;
        position: relative;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        
    }

    #innerDisplay {
        width: calc(100% - 10vh);
        height: calc(100% - 10vh);
        background-color: rgb(251, 250, 255, );

        /* overflow-y: scroll; */

    }

    .mountingDisplay {
        animation: mountDisplay 0.5s forwards;
    }

    .unmountingDisplay {
        animation: unmountDisplay 0.3s forwards;
    }

    @keyframes mountDisplay {
        0% {
            opacity: 0;
            scale: 0;
            
        }
        100% {
            opacity: 1;
            scale: 1;
            
        }
    }

    @keyframes unmountDisplay {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .mountingMain {
        animation: mountMain 0.5s forwards;
    }

    .unmountingMain {
        animation: unmountMain 0.3s forwards;
    }

    @keyframes mountMain {
        0% {
            opacity: 0;
            
        }
        100% {
            opacity: 1;
            
        }
    }

    @keyframes unmountMain {
        0% {
            opacity: 1;
          
        }
        100% {
            opacity: 0;
           
        }
    }

    #acc1, #acc2, #acc3, #acc4 {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 10;
        transition: transform 0.4s, opacity 0.4s;
        opacity: 1;
        box-sizing: content-box;
    }

    @keyframes acc1{
        0% {
            transform: translate(-10rem, -10rem);
        }
        100% {
            transform: translate(0rem, 0rem);
        }
    }

    @keyframes acc2{
        0% {
            transform: translate(10rem, 10rem);
        }
        100% {
            transform: translate(0rem, 0rem);
        }
    }

    @keyframes acc3{
        0% {
            transform: translate(10rem, -10rem);
        }
        100% {
            transform: translate(0rem, 0rem);
        }
    }

    @keyframes acc4{
        0% {
            transform: translate(-10rem, 10rem);
        }
        100% {
            transform: translate(0rem, 0rem);
        }
    }

    #acc1 {
        left: 0;
        top: 0;
        border-top: 1rem solid;
        border-left: 1rem solid;
        border-color: #0078ff;

        animation: acc1 forwards 0.8s;
    }

    #acc2 {
        bottom: 0;
        right: 0;
        border-right: 1rem solid;
        border-bottom: 1rem solid;
        border-color: #0078ff;

        animation: acc2 forwards 0.8s;
    
    }

    #acc3 {
        top: 0;
        right: 0;
        border-top: 1rem solid;
        border-right: 1rem solid;
        border-color: #0078ff;

        animation: acc3 forwards 0.8s;
    
           
    }

    #acc4 {
        left: 0;
        bottom: 0;
        border-bottom: 1rem solid;
        border-left: 1rem solid;
        border-color: #0078ff;

        animation: acc4 forwards 0.8s;
    
    }

    #acc5, #acc6 {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 10;
        
    }

    #acc5 {
        left: 0;
        top: 0;
        border-top: 0.5rem solid;
        border-left: 0.5rem solid;
        border-color: #0078ff;  
    }

    #acc6 {
        bottom: 0;
        right: 0;
        border-right: 0.5rem solid;
        border-bottom: 0.5rem solid;
        border-color: #0078ff;       
    }


</style>