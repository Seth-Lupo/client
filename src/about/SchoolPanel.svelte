<script>
    import viewport from "../useViewportAction";
    import getSchool from "./getSchool";
    let active = false

    let school = getSchool()
    let display = school ? "flex" : "none"
    
    

    

</script>

<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}
style:display>

    <div id="acc1"></div>
    <div id="acc2"></div>
    
   

    <div id="wrapper"> 
        {#if school}
            <div id="image" class:normal={getSchool()!="MIT"} class:mit={getSchool()=="MIT"} style:background-image={"url(schools/"+school.split(" ").at(-1)+".png)"}></div> 
        {/if}
        <h1>{school}{getSchool()=="MIT" ? "" : "!"}</h1> 
    </div>
    
    
    

</main>

<style>

    main {
        width: calc(100% - 20vh);
        height: 80vh;
        margin: 10vh;

        display: flex;
        position: relative;
        flex-flow: column;

        opacity: 0;
        justify-content: center;
        align-items: center;

        

    }

    #acc1, #acc2 {
        width: 50px;
        height: 50px;
        position: absolute;
    }

    #acc1 {
        top: 0;
        left: 0;
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

    #wrapper {
        width: calc(100% - 10vh);
        height: calc(100% - 10vh);
        

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
     
    }

    #image {
        width: 100%;
        height: 100%;
     
        
        background-size: cover;
        background-position: top;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;

        opacity: 0.7;
        z-index: -10;

     
    }

    .normal {
        filter: saturate(3) contrast(2);
    }

    .mit {
        filter: saturate(3) contrast(0.9);
    }


    h1 {
        font-family: 'Martian Mono', monospace;
        font-size: 10vw;
        color: white;
        width: min-content;
        
      
    }

    #mark {
      color: white;
    }


</style>