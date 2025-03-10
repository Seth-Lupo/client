<script>
  import QuotePanel from "./QuotePanel.svelte";
  import Jumbotron from "./Jumbotron.svelte";
  import BioPanel from "./BioPanel.svelte";
  import WhyPanel from "./WhyPanel.svelte";
  import TechPanel from "./TechPanel.svelte";
  import FuturePanel from "./FuturePanel.svelte";
  import SchoolPanel from "./SchoolPanel.svelte";
  import ProjectPanel from "./ProjectPanel.svelte";

  import currentProject from "../projects/currentProject";
  import ProjectDisplay from "../projects/ProjectDisplay.svelte";

 

  


</script>

<main class:lockScroll={$currentProject != 0}>

    <Jumbotron></Jumbotron>
    <BioPanel></BioPanel>
    <QuotePanel></QuotePanel>
    <WhyPanel></WhyPanel>
    <TechPanel></TechPanel>
    <FuturePanel></FuturePanel>
    <ProjectPanel></ProjectPanel>
    
    
   

</main>

{#if $currentProject != 0}
  <ProjectDisplay></ProjectDisplay>
{/if}

<style>

    main {
      width: 100vw;
      height: 100vh;
      overflow-y: scroll;
    }
   


    @keyframes reveal {
      0% {
        filter: blur(10px);
      }
      1% {
        filter: blur(9px);
      }
      10% {
        filter: blur(10px);
      }
      100% {
        filter: blur(0px);
      }
    }


</style>

