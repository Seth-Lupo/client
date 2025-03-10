<script>
    import viewport from "../useViewportAction";
    let active = false


    import * as PIXI from 'pixi.js'
import Victor from 'victor'
import { onMount } from 'svelte'
  import { dataset_dev, query_selector_all } from "svelte/internal";

let currentTech = ""
let setTech = (s) => {
    return () => {
        currentTech = s
    }
}



let wrapper

onMount( () => {
    
    let app = new PIXI.Application({ 
        resizeTo: wrapper,
        antialias: true,
    });
    wrapper.appendChild(app.view)
    
    const lineContainer = new PIXI.Container(); 
    app.stage.addChild(lineContainer);

    const container = new PIXI.Container(); 
    app.stage.addChild(container);

    let mousePrev = Victor(
        app.renderer.plugins.interaction.mouse.global.x,
        app.renderer.plugins.interaction.mouse.global.y
    )
    let mouseCurr

    


    let images = [
        
        [80, true, 0,  "logos/java.png", "Java"],
        [80, true, 1, "logos/js.png", "Javascript"],
        [80, true, 2, "logos/python.png", "Python"],
        // [40, false, 3, "logos/c.png"],
        // [40, false, 4, "logos/regex.png"],
        

        [40, false, 0, "logos/javafx.png", "JavaFX"],
        [40, false, 0, "logos/pro.png", "Processing"],
        [40, false, 0, "logos/maven.png", "Maven"],
        
        
        [40, false, 1, "logos/svelte.png", "Svelte"],
        [40, false, 1, "logos/react.png", "React"],
        [40, false, 1, "logos/pixi.png", "Pixi"],
        [40, false, 1, "logos/node.png", "Node"],
        [40, false, 1, "logos/p5.png", "P5"],
        
        [40, false, 2, "logos/django.png", "Django"],
        [40, false, 2, "logos/numpy.png", "Numpy"],
        [40, false, 2, "logos/pandas.png", "Pandas"],
    
    ]

    let particles = images.map((info) => {

        let particle = PIXI.Sprite.from(info[3]);
        particle.anchor.set(0.5)
        particle["data"] = {
            pos: Victor(
                app.renderer.width * (Math.random()*0.8+0.1),
                app.renderer.height * (Math.random()*0.8+0.1)
            ),
            vel: Victor(
                0,
                0
            ),
            size: info[0],
            currentSize: info[0],
            primary: info[1],
            type: info[2],
            selected: false,
            name: info[4]
        }
        
        particle.height = info[0] 
        particle.width = info[0] * (particle.texture.baseTexture.width / 
        particle.texture.baseTexture.height)

        particle.on('mousedown', (e) => {
            particle.data.pos = Victor(e.data.global.x, e.data.global.y)
            particle.data.selected = true;
            currentTech = particle.data.name
        })

        particle.on('mousemove', (e) => {
	        if (particle.data.selected) {
		        particle.data.pos = Victor(e.data.global.x, e.data.global.y)
	        }
        })

        particle.on('mouseup', (e) => {
	        particle.data.selected = false
            particle.data.vel = mouseCurr
            particle.data.vel.subtract(mousePrev)
            currentTech = ""
        })

        particle.interactive = true

        container.addChild(particle)
        return particle

});

    let lines = []
    for (let particle1 of particles) {
        for (let particle2 of particles) {
            if (particle1.data.primary && !particle2.data.primary && particle1.data.type == particle2.data.type) {

                let line = new PIXI.Graphics();

                line["data"] = {
                    p1: particle1,
                    p2: particle2
                }
                
                lines.push(line)
                lineContainer.addChild(line)

            }
        }
    }

    app.ticker.add((delta) => {
        
        mousePrev = mouseCurr
        mouseCurr = Victor(
            app.renderer.plugins.interaction.mouse.global.x,
            app.renderer.plugins.interaction.mouse.global.y
        )
   

        particles.map((particle) => {     
        
            particles.map((attractor) => {
                
                if (particle != attractor) {    
                    
                    let attraction = attractor.data.pos.clone()
                    attraction.subtract(particle.data.pos)
                    let distance = attraction.length()
                    attraction.normalize()
    
                    let repulsion = attraction.clone() 
                    let distantRepulsion = attraction.clone()
                    let distantAttraction = attraction.clone()
                    
                    let attractionCoef = 100/(distance**2)
                    let repulsionCoef =  -40000/(distance**3)
                    let distantAttractionCoef = 0.0009*distance
                    let distantRepulsionCoef = -0.35/(distance)**0.5
                    
                    attraction.x *= attractionCoef
                    attraction.y *= attractionCoef
                    repulsion.x *= repulsionCoef
                    repulsion.y *= repulsionCoef
                    distantAttraction.x *= distantAttractionCoef
                    distantAttraction.y *= distantAttractionCoef
                    distantRepulsion.x *= distantRepulsionCoef
                    distantRepulsion.y *= distantRepulsionCoef
                    
                    if ((particle.data.primary == false && attractor.data.primary == true) && attractor.data.type == particle.data.type) { 
                        // particle.data.vel.add(attraction)
                        particle.data.vel.add(distantAttraction)
                    }

                    if (particle.data.type != attractor.data.type) particle.data.vel.add(distantRepulsion)
                   
                    particle.data.vel.add(repulsion)
                }

            })

            let wallRepulsion = particle.data.primary ? 50 : 30
            particle.data.vel.add(Victor(
                wallRepulsion/(particle.data.pos.x)**1,
                wallRepulsion/(particle.data.pos.y)**1,
            ))

            particle.data.vel.add(Victor(
                wallRepulsion/(particle.data.pos.x-app.renderer.width)**1,
                wallRepulsion/(particle.data.pos.y-app.renderer.height)**1,
            ))


            // let mousePos = Victor(
            //     app.renderer.plugins.interaction.mouse.global.x,
            //     app.renderer.plugins.interaction.mouse.global.y
            // )
            // let inX = mousePos.x > 0 && mousePos.x < app.renderer.width
            // let inY = mousePos.y > 0 && mousePos.y < app.renderer.height
            // if (inX && inY) {
            //     mousePos.subtract(particle.data.pos)
            //     let distance = mousePos.lengthSq()
            //     mousePos.divide(Victor(-distance*0.05, -distance*0.05))
            
            //     particle.data.vel.add(mousePos)
            // }

            if (particle.data.pos.x < -50) {
                particle.data.pos.x = app.renderer.width
            } else if (particle.data.pos.x > app.renderer.width + 50) {
                particle.data.pos.x = 0
            }
            
            if (particle.data.pos.y < -50) {
                particle.data.pos.y = app.renderer.height
            } else if (particle.data.pos.y > app.renderer.height + 50) {
                particle.data.pos.y = 0
            }
            


             
        })

        particles.map((particle) => {    

            particle.data.vel.multiply(Victor(0.98, 0.98))

            let speed = particle.data.vel.length()
            if (speed > 20) {
                particle.data.vel.normalize().multiply(Victor(20, 20))
            }

            if (!particle.data.selected) particle.data.pos.add(particle.data.vel)

            particle.x = particle.data.pos.x
            particle.y = particle.data.pos.y

            if (currentTech == particle.data.name) particle.data.currentSize = 120
            else particle.data.currentSize = particle.data.size
            let size = particle.data.currentSize
            

            particle.width = size * (particle.texture.baseTexture.width / 
            particle.texture.baseTexture.height)
            particle.height = size
           

        })

        lines.map((line) => {    

            line.clear()


            line.lineStyle(4, 0xa300ff)
            .moveTo(line.data.p1.data.pos.x, line.data.p1.data.pos.y)
            .lineTo(line.data.p2.data.pos.x, line.data.p2.data.pos.y);


        })



         
    })

    

});


</script>

<main 
use:viewport 
on:enterViewport={() => {active = true}}
class:active= {active}>

    
    <div id="text">

        <h1>Tech I know...</h1>
        <p>While I've used many programming languages and frameworks, these are the one's I use most commonly:</p>

        <ul class="outer">
            
            <span class="lang">
            <li on:mouseenter={setTech("Java")} on:mouseleave={setTech("")}><a href="https://www.ibm.com/cloud/learn/java-explained" class:on={currentTech == "Java"}>Java</a></li>
            <ul class="inner">
                <li on:mouseenter={setTech("Processing")} on:mouseleave={setTech("")}><a href="https://processing.org/" class:on={currentTech == "Processing"}>Processing</a></li>
                <li on:mouseenter={setTech("JavaFX")} on:mouseleave={setTech("")}><a href="https://openjfx.io/" class:on={currentTech == "JavaFX"}>JavaFX</a></li>
                <li on:mouseenter={setTech("Maven")} on:mouseleave={setTech("")}><a href="https://maven.apache.org/" class:on={currentTech == "Maven"}>Maven</a></li>
            </ul>
            </span>
            
            <span class="lang">
            <li on:mouseenter={setTech("Python")} on:mouseleave={setTech("")}><a href="https://www.python.org/doc/essays/blurb/" class:on={currentTech == "Python"}>Python</a></li>  
            <ul class="inner"> 
                <li on:mouseenter={setTech("Numpy")} on:mouseleave={setTech("")}><a href="https://numpy.org/" class:on={currentTech == "Numpy"}>Numpy</a></li>
                <li on:mouseenter={setTech("Pandas")} on:mouseleave={setTech("")}><a href="https://pandas.pydata.org/" class:on={currentTech == "Pandas"}>Pandas</a></li>
                <li on:mouseenter={setTech("Django")} on:mouseleave={setTech("")}><a href="https://www.djangoproject.com/" class:on={currentTech == "Django"}>Django</a></li>
            </ul>
            </span>
            
            <span class="lang">
            <li on:mouseenter={setTech("Javascript")} on:mouseleave={setTech("")}><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" class:on={currentTech == "Javascript"}>Javascript</a></li>  
            <ul class="inner"> 
                <li on:mouseenter={setTech("Node")} on:mouseleave={setTech("")}><a href="https://nodejs.org/en/" class:on={currentTech == "Node"}>Node.js</a></li>
                <li on:mouseenter={setTech("Svelte")} on:mouseleave={setTech("")}><a href="https://svelte.dev/" class:on={currentTech == "Svelte"}>Svelte</a></li>
                <li on:mouseenter={setTech("React")} on:mouseleave={setTech("")}><a href="https://reactjs.org/" class:on={currentTech == "React"}>React</a></li>
                <li on:mouseenter={setTech("P5")} on:mouseleave={setTech("")}><a href="https://p5js.org/" class:on={currentTech == "P5"}>P5.js</a></li>
                <li on:mouseenter={setTech("Pixi")} on:mouseleave={setTech("")}><a href="https://pixijs.com/" class:on={currentTech == "Pixi"}>Pixi.js</a></li>
            </ul>
            </span>             

        </ul>
       

        

    </div>

    <div id="sketch" bind:this={wrapper}>

        <div id="acc1"></div>
        <div id="acc2"></div>
        <!-- <div id="acc3"></div>
        <div id="acc4"></div> -->


    </div>

   
</main>

<style>
    main {
        width: calc(100% - 20vh);
        margin: 10vh;

        display: flex;
        position: relative;
        flex-flow: row;
        border-left: 0.5rem solid;
        border-right: 0.5rem solid;
        border-color: #a300ff; 

      
        display: grid;
        grid-template-columns: 10vh 61fr 10vh 39fr 10vh;
        grid-template-areas: ". s . t .";

        opacity: 0;
        

        /* background-color: grey; */
    }

    @media screen and (max-aspect-ratio: 5/4) {
       main {
        display: flex;
        flex-flow: column;
        height: fit-content;
        padding: 0 10vh;
       }
       #sketch {
        width: 100%;
        height: 50vh;
       }
       .outer {
        display: flex;
        flex-flow: row;
        justify-content: center;
        flex-wrap: wrap;
       }

       .lang {
        display: block;
        margin: 0 10px;
       }
       
    }

    #text {
        
        display: flex;
        position: relative;
        flex-flow: column;
        grid-area: t;
    }

    #sketch {
      
       
        position: relative;
        grid-area: s;
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

    li {
        font-style: italic;
        color: #a300ff;
        white-space:nowrap;
        overflow-x:visible;
    }


    a {
        text-decoration:none;
        transition: color 0.2s;
       
    }
    
    a:hover {
        color: #009fff;
        
    }

    .on {
        color: #009fff;
    }


    .outer {
        margin-top: 1.25rem;
        list-style-position: inside;
        list-style-type: square;
       
    }

    .inner {
        margin-top: 0rem;
        margin-left: 2rem;
        list-style-position: inside;
        margin-bottom: 1.25rem;
        
        list-style-type: square;

       
    }

    .outer li {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-family: 'Martian Mono', monospace;
        font-size: 1.5rem;
        
        
    }

    .inner li {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        
        font-size: 1rem;
        
    }


    

    b {
        font-weight: 900;
    }

    #acc1, #acc2, #acc3, #acc4 {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 10;
        
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

</style>