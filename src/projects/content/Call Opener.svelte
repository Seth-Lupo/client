<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 11;

    const language = "Java"
    const languageLogo = "java.png"
    const languageLogo2 = ""
    
    const type = "Desktop Application"
    const typeLogo = "javafx.png"
    const typeLogo2 = ""
        
    const downloadLink = "/projects/Call Opener/app.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "www.sethlupo.com/Call-Opener"



</script>

    <Info
    grade={grade}
    language={language}
    languageLogo={languageLogo}
    languageLogo2={languageLogo2}
    type={type}
    typeLogo={typeLogo}
    typeLogo2={typeLogo2}
    ></Info>

<main>
    
    <p>This application automatically opens Zoom calls for you. All you do is navigate to the corresponding day of the week, enter a label, time, and link to the call, and it will open it automatically.</p>

    <h1>Motivation</h1>

    <p>When the pandemic first began, I, like many other students, had to attend Zoom school. Me and my friends originally enjoyed this new-found freedom. We could get snacks in between classes, wake up exactly at 8:00, play video games during the down time—we faced infinite distractions.<p>

    <p>I wanted to combat these distractions. I wanted get into Zoom class on time.</p>

    <h1>In Practice</h1>

    <p>Out of all my projects, I've used this one the most. I shared my application with me and my friends and we used for the entirety of the pandemic.</p>

    <p>In particular, we put this program in our start-up folder so that it would automatically open every time we turn on our PC. This means that, as long as our PC's were on, we didn't have to worry about being on time for zoom class's at all.</p>

    <p>I used it program so much that after a year, I was conditioned to hate the program's alarm. While the sound was originally soothing (a peaceful riff on a vibraphone) it soon was THE WORST SOUND KNOWN TO HUMANITY!!!</p>

</main>

    <Sources 
    downloadLink={downloadLink} 
    downloadLabel={downloadLabel} 
    sourceLink={sourceLink}></Sources>

<style>

    main {
        padding: 0rem 2.5rem;
        max-width: 100%;
        align-self: center;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-size: 1.25rem;
        margin: 1.25rem 0rem;
        color: white;
    }

    h1 {
        font-family: "Lato";
        font-size: 1.25;
        font-weight: 800;
    }

    @media (min-width: 1000px) {
        p {
            font-size: 1.5rem;
        }
    }

</style>