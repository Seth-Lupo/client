<script>
    import Info from "../Info.svelte";
    import Sources from "../Sources.svelte";

    const grade = 10;

    const language = "Java"
    const languageLogo = "java.png"
    const languageLogo2 = ""
    
    const type = "Desktop Application"
    const typeLogo = "javafx.png"
    const typeLogo2 = ""
        
    const downloadLink = "/projects/RSA Encrypter/app.jar"
    const downloadLabel = "Download JAR"
    
    const sourceLink = "www.sethlupo.com/RSA-Encrypter"



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
    
    <p>This application allows you to encrypt a small private message. You can send the encrypted message to someone else with application, and they will be able to decrypt it.</p>

    <h1>Background</h1>

    <p>This application relies of on <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">Rivest-Shamir-Adleman encryption</a> (RSA). This encryption scheme uses a public and a private key. This means that no private communication needs to be shared between both users. Instead, the sender uses the receiver's public key to encrypt a message, and the receiver uses their private key to decrypt it.</p>

    <p>In RSA encryption, the message is mapped to a large integer. The scheme utilizes <a href="https://en.wikipedia.org/wiki/Modular_arithmetic">modular arithmetic</a>. The sender first raises that integer to a number specified in the public key. The sender then finds its remainder relative to a certain base (another number in the public key). They then send it to the receiver. The receiver does the same thing with the private key: they raise it by their own private number and finds its remainder relative to the same base.</p>
    
    <p>This is mathematically assured to be the original message according to <a href="https://en.wikipedia.org/wiki/Euler%27s_theorem">Euler's Theorem.</a> Because the receiver generated that special base, they know its <a href="https://en.wikipedia.org/wiki/Euler%27s_totient_function">totient</a>. This totient can only be known by calculating the prime factorization of the base (A REALLY COMPUTATIONALLY HARD TASK!). However, the reciever know's its prime factorization because they generated it by multiplying together two very large primes. </p>

    <h1>Usage</h1>

    <p>A user's public and private key are both generated when the application first runs and is saved immediately. For my application, the user only needs to worry about the public key, the private key is kept out of view.</p>

    <p>To send a message, you must first receive your friend's public key. Then copy and paste it into the corresponding textbox. There, you can input a message as well as a visible header.</p>

    <p>You then can click 'encrypt' and out come's your encrypted message. Send it to a friend and they can copy and paste it into the 'decrypt' textbox.</p>

    <p><i>This is a prime way to Rick-roll someone because I purposely made it so links open automatically.</i></p>

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