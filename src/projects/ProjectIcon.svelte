

<script>
  import viewport from "../useViewportAction";
  import currentProject from "./currentProject";
  import currentContent from "./currentContent";

  // Pre-import all content components
  import COVIDVisualizer from "./content/COVID-19 Visualizer.svelte";
  import CallOpener from "./content/Call Opener.svelte";
  import Connect4AI from "./content/Connect 4 AI.svelte";
  import CrystalSimulator from "./content/Crystal Simulator.svelte";
  import GraphExplainer from "./content/Graph Algorithm Explainer.svelte";
  import NewtonianFractals from "./content/Newtonian Fractals.svelte";
  import NBodyPendulum from "./content/N-Body Pendulum.svelte";
  import RSAEncrypter from "./content/RSA Encrypter.svelte";
  import Sudoku from "./content/Sudoku.svelte";
  import WaveSimulator from "./content/Wave Simulator.svelte";
  import Template from "./content/template.svelte";

  export let tag = "Crystal Simulator";
  let active = false;

  const contentMap = {
    "COVID-19 Visualizer": COVIDVisualizer,
    "Call Opener": CallOpener,
    "Connect 4 AI": Connect4AI,
    "Crystal Simulator": CrystalSimulator,
    "Graph Algorithm Explainer": GraphExplainer,
    "Newtonian Fractals": NewtonianFractals,
    "N-Body Pendulum": NBodyPendulum,
    "RSA Encrypter": RSAEncrypter,
    "Sudoku": Sudoku,
    "Wave Simulator": WaveSimulator,
    "template": Template,
  };

  const toggleDisplay = () => {
    const content = contentMap[tag];
    currentContent.set(content);
    currentProject.set(tag);
  };
</script>




<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active={active}
on:click={toggleDisplay}> 

    <div id="acc1"></div>
    <div id="acc2"></div>
    <div id="acc3"></div>
    <div id="acc4"></div>

    <div id="image" style={"background-image: url('/projects/" + tag + "/icon.png');"}></div>
    <div id="header"><h1>{tag}</h1></div>

</main>

<style>
    main {
        width: 50vh;
        height: 35vh;
        margin: 5vh 5vh;
        position: relative;
        opacity: 0;
        /* border: 4px solid #a300ff;    */
        

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #image {
        background-position: center;
        background-size: cover;

        width: calc(100% - 50px);
        height: calc(100% - 50px);

        display: flex;
        justify-content: center;
        align-items: center;
        
        transition: opacity 0.4s;
        opacity: 0.5;

    }

    main:hover #image {
        opacity: 1;
    }

    #header {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-family: 'Martian Mono', monospace;
        font-size: 2rem;
        width: min-content;
        color: white;
        transition: color 0.4s;
        text-align: center;
        
        
    }

    main:hover h1 {
        color: #a300ff;
    }

 

    #acc1, #acc2, #acc3, #acc4 {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 10;
        transition: transform 0.4s, opacity 0.4s;
        opacity: 1;
    }

    #acc1 {
        left: 0;
        top: 0;
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

    #acc3 {
        top: 0;
        right: 0;
        border-top: 0.25rem solid;
        border-right: 0.25rem solid;
        border-color: #a300ff;
           
    }

    #acc4 {
        left: 0;
        bottom: 0;
        border-bottom: 0.25rem solid;
        border-left: 0.25rem solid;
        border-color: #a300ff;
    }

    main:hover #acc1 {
        transform: translate(-2vh, -2vh);
        opacity: 0.5;
    }

    main:hover #acc2 {
        transform: translate(2vh, 2vh);
        opacity: 0.5;
    }

    main:hover #acc3 {
        transform: translate(2vh, -2vh);
        opacity: 0.5;
    }

    main:hover #acc4 {
        transform: translate(-2vh, 2vh);
        opacity: 0.5;
    }

</style>