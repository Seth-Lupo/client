<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 9;

    const language = "Java"
    const languageLogo = "java.png"
    const languageLogo2 = ""
    
    const type = "Desktop Application"
    const typeLogo = "javafx.png"
    const typeLogo2 = "pro.png"
        
    const downloadLink = "/projects/Sudoku/app.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "https://github.com/Seth-Lupo/Sudoku"



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
    
    <p>This is a simple desktop app for playing Sodoku.</p>

    <h1>Usage</h1>

    <p><i>*there is also an additional GUI that explains this*</i></p>

    <p>Click on each square to select it. You can then type in a number.</p>
    
    <p>Press N to toggle note mode. This allows you to write possible numbers in the box before you have decided what it is for sure.</p>

    <p>You can change your puzzle by generating a new one. Change the difficulty by changing the number of blank boxes.</p>

    <p>You can press a certain button for hints. However, you can turn these on or off. You can only change if cheating is allowed before generating a puzzle.</p>

    <h1>Design</h1>

    <p>Looking back, this seems like a very unorthodox application: it uses Processing for the display and JavaFX for the additional GUI. I'm honestly not sure what I was thinking. However, it still works fine. While it isn't the cleanliest design I have ever made, there will always be a special place in my heart for it.</p>

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