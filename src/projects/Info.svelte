<script>

    export let grade

    export let language = ""
    export let languageLogo = ""
    export let languageLogo2 = ""
    
    export let type = ""
    export let typeLogo = ""
    export let typeLogo2 = ""

</script>



<main>

    <a id="grade">{grade}th Grade</a>
    
    <a id="lang">
        {language}
        {#if languageLogo != ""}<img class="langLogo" src="logos/{languageLogo}">{/if}
        {#if languageLogo2 != ""}<img class="langLogo" src="logos/{languageLogo2}">{/if}
    </a>
    
    <a id="type">
        {type}
        {#if typeLogo != ""}<img class="typeLogo" src="logos/{typeLogo}">{/if}
        {#if typeLogo2 != ""}<img class="typeLogo" src="logos/{typeLogo2}">{/if}
    </a>
    
</main>

<style>

    main {
        width: 100%;
       
       
        /* border: 2px solid black; */
        display: flex;
        justify-content: center;
       
        
    }

    #grade {
        /* font-style: italic; */
        color: #a300ff;
        width: fit-content;
        
    }

    #lang {
        font-style: italic;
        font-family: 'Latos', monospace;
        
    }

    #type {
        font-style: italic;
        font-family: 'Latos', monospace;
        width: min-content;
        max-width: 20vw;
        
        /* color: #a300ff; */
    }

    .langLogo {
        height: 2rem;
        margin-left: 0.75rem ;
    }

    .typeLogo {
        height: 2rem;
        margin-left: 0.75rem ;
    }

    a {
        display: flex;
        font-family: 'Martian Mono', monospace;
        
        
        align-items: center;
        align-content: center;
       
        width: min-content;
        margin: 0 2.5rem;
        font-size: 2rem;
     

        text-align: center;

      
        transition: background-color 0.3s, color 0.3s;
       
    }

    
    @media screen and (max-aspect-ratio: 6/3) and (max-width: 1100px) {
        main {
          
            
        }
        a{

            font-size: 1.25em;
            margin: 0rem 1.25rem;
        }
    }
   

</style>