

<script>
    // @ts-nocheck
    
    import * as PIXI from 'pixi.js'
    import Victor from 'victor'
    import { onMount } from 'svelte'
    import App from '../App.svelte';
    
    let wrapper
    
    onMount( () => {
        let app = new PIXI.Application({ 
            resizeTo: wrapper,
            antialiasing: false,
        });
        
        
        
        
        
        wrapper.appendChild(app.view)
        
        const container1 = new PIXI.ParticleContainer(9000); 
        app.stage.addChild(container1);
        const container2 = new PIXI.ParticleContainer(9000); 
        app.stage.addChild(container2);
        
        container1.interactive = true
        container2.interactive = 0xc6bbb9
        
        let colors = [0x1c1026, 0xc6bbb9, 0x4c1e3c, 0x21242b, 0x7a748c]
        
        let textures = []
        
        let template1 = new PIXI.Graphics();
        template1.beginFill(0x009fff);
        template1.drawCircle(0, 0, 3)
        let texture1 = app.renderer.generateTexture(template1);
        textures.push(texture1)
        
        let template2 = new PIXI.Graphics();
        template2.beginFill(0x5F0094);
        template2.drawCircle(0, 0, 3)
        let texture2 = app.renderer.generateTexture(template2);
        textures.push(texture2)
        

        let initParticle = (container, texture, sizeMin, sizeRange) => {

            let particle = new PIXI.Sprite(texture);
            particle.anchor.set(0.5)
            particle.x = 0
            let data = {
                pos: Victor(
                    app.renderer.width * Math.random(),
                    app.renderer.height * Math.random()
                ),
                vel: Victor(
                    5*(Math.random()-0.5),
                    5*(Math.random()-0.5)
                )
            }
            let size = Math.random() * sizeRange + sizeMin
            particle.width = size
            particle.height = size
            particle["data"] = data
            container.addChild(particle)
            return particle
        }
        
        let particles = []
        particles = particles.concat(new Array(9000).fill(null).map(() => initParticle(container2, texture1, 2, 5)))
        particles = particles.concat(new Array(9000).fill(null).map(() => initParticle(container1, texture2, 5, 10)))

        let elapsed = 0.0;
        
        app.ticker.maxFPS = 
        app.ticker.add((delta) => {
            elapsed += delta;
            
            let mousePos = Victor(
            app.renderer.plugins.interaction.mouse.global.x,
            app.renderer.plugins.interaction.mouse.global.y
            )
            let inX = mousePos.x > 0 && mousePos.x < app.renderer.width
            let inY = mousePos.y > 0 && mousePos.y < app.renderer.height
            
            particles.map((particle) => {     
               
                if (inX && inY) {
                    let interaction = particle.data.pos.clone()
                    .subtract(mousePos)
                    let factor = 0.1/interaction.lengthSq()
                    interaction.multiply(Victor(factor, factor))
                    particle.data.vel.add(interaction)
                    particle.data.vel.add(Victor(-150*interaction.y, 150*interaction.x))
                }
                
                particle.data.vel.multiply(Victor(0.99, 0.99))
                particle.data.pos.add(particle.data.vel)
                
                if (particle.data.pos.x < 0) {
                    particle.data.pos.x = app.renderer.width
                } else if (particle.data.pos.x > app.renderer.width) {
                    particle.data.pos.x = 0
                }
                
                if (particle.data.pos.y < 0) {
                    particle.data.pos.y = app.renderer.height
                } else if (particle.data.pos.y > app.renderer.height) {
                    particle.data.pos.y = 0
                }
                
                
                
                particle.x = particle.data.pos.x
                particle.y = particle.data.pos.y
                
                
            })
            
        });
        
        
    });
    
    
</script>

<main bind:this={wrapper}>
    <h1>SETHLUPO</h1>
    <div id="gradient"></div>
</main>

<style>



    main {
        overflow-x: none;

        width: 100%;
        height: 80vh;
        margin-bottom: 10vh;

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    h1 {
        font-family: 'Martian Mono', monospace;
        font-size: 10vw;
        z-index: 1;
        color: white; 
    }

    #gradient {
        width: 100%;
        height: 2%;
        position: absolute;
        bottom: 0px;
        z-index: 10;
        background-image: linear-gradient(rgb(0, 0, 0, 0), black);
        transform: translateY(1px);
       
    }





    @media screen and (max-width: 480px) {
        h1 {
            font-size: 10vh;
        }
    }



</style>

