<script>

    export let downloadLink
    export let downloadLabel
    
    export let sourceLink
    

</script>

<main>

    <a href={downloadLink}>{downloadLabel}</a>
    <a href={sourceLink}>Github Repo</a>
    
</main>

<style>

    main {
        width: 100%;
       
       
        /* border: 2px solid black; */
        display: flex;
        justify-content: center;
        padding: 1.25rem;
        
    }

    a {

        text-decoration: none;

        cursor: pointer;
        display: flex;
        font-family: 'Martian Mono', monospace;
        font-size: 2.5rem;
        background-color: #0078ff;
        align-items: center;
        align-content: center;
       
        width: fit-content;
        margin: 0 2.5rem;
        padding: 1.25rem;

        text-align: center;

      
        transition: background-color 0.3s, color 0.3s;
       
    }

    a:hover {
        background-color: #5600ff;
        color: black;

    }
    
    @media screen and (max-aspect-ratio: 6/3) and (max-width: 1100px) {
        main {
          
            
        }
        a{
            font-size: 1.25rem;
            margin: 0rem 1.25rem;
        }
    }
   

</style>