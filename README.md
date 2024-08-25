<br />
<div id="readme-top" align="center">
  <a href="https://academify-self.vercel.app/">
    <img src="public/academify-logo-blank.png" alt="Logo" width="130" height="130">
  </a>

<h3 align="center">Academify</h3>

  <p align="center">
    Breaking down traditional barriers to high-quality education through the security and transparency of blockchain technology.
    <br />
    <a href="https://github.com/rocconmarco/academify"><strong>Repository GitHub »</strong></a>
    <br />
  </p>
</div>

## About The Project

This project was conceived and developed as part of the "Typescript,
            React, and Web3" course in the Master’s program in Blockchain
            Development at start2impact University. The initial goal was to
            create a <strong>decentralized application</strong> that would
            enable users to purchase products using{" "}
            <strong>blockchain payments</strong>.

<br>

From there, I expanded the project to imagine a platform that allows
            everyone to{" "}
            <strong>freely access high-quality scientific articles</strong>{" "}
            through the blockchain. Today, research materials are often locked
            behind paywalls or restricted to university staff, making them hard
            for the general public to access.

<br>

Academify aims to change this by making all articles available to
            the public while ensuring the{" "}
            <strong>reliability of the information</strong>.

<br>

In the first phase of development, I focused on building the{" "}
            <strong>core features</strong>: saving and displaying articles,
            connecting to the blockchain, and enabling payment and access to the
            final content.
            
<br>

I used <strong>key blockchain technologies</strong> like IPFS for
            storage, wallet connectors, and test network transactions with
            SepoliaETH tokens.

<br>

What you see now is just a basic MVP of the platform, showcasing its
            potential direction.
            
<br>

The goal is to make the platform even more inclusive by{" "}
            <strong>introducing roles</strong> that contribute to the
            ecosystem's integrity. For instance, the role of certifier will be
            crucial. Certifiers are selected users who review articles submitted
            by the community and decide whether they should be published on the
            platform.
            
<br>

To reward certifiers for their work, I plan to introduce{" "}
            <strong>a token called $OWL</strong> (inspired by the Academify
            logo). Certifiers can earn these tokens through their activities,
            and users who purchase articles will also earn them as a form of
            engagement score.
            
<br>

What you see now is just a basic MVP of the platform, showcasing its
            potential direction.
            
<br>

If you’re interested in the project, feel free to contact me via the "Contacts" form in my portfolio website down below.

<br>



## Specs for nerds

L'app è stata sviluppata tramite React e Typescript. I componenti sono
stati creati in file .jsx tranne nel caso di QuizPage.tsx, dove si è optato
per una tipizzazione più stringente nella generazione di domande casuali.

<br>

Nello specifico, ho utilizzato un type literal di "10" assegnato all'argomento
della funzione generateRandomQuestions, in modo tale da imporre un limite di 10
alle domande generate dalla funzione.

<br>

Typescript è stato usato nella definizione di array di oggetti per la 
raccolta di domande (questions.ts) e trofei (trophies.ts). È stata utilizzata,
in entrambi i casi, un'interfaccia che definiva con precisione tutte
le proprietà e i relativi tipi di ogni oggetto nell'array.

<br>

Per quanto riguarda il routing in App.js, si è deciso di inserire un controllo
per evitare che l'utente cerchi di navigare verso la Summary page e la Answers page
prima di aver completato il quiz. A questo scopo, sono stati creati due ulteriori
componenti, ProtectedSummaryRoute.jsx e ProtectedAnswersRoute.jsx, dove è stato inserito
un controllo che utilizza la variabile di stato globale "userAnswers" e verifica
se quest'ultima è vuota o ha una lunghezza inferiore a 10 (numero di risposte
necessarie per accedere alla Summary e Answers page).

<br>

Per lo styling ho utilizzato Tailwind CSS v.3.4.6, applicando lo stile
direttamente in fase di scrittura del jsx sotto forma di classi.

<br>

A causa di problemi di compatibilità tra Typescript v.5.5.4 e react-scripts,
in fase di build del progetto ho dovuto aggiungere un override nel file
package.json. Nello specifico:

<br>

"overrides": {
    "react-scripts": {
      "typescript": "^5.5.4"
    }
  }

  <br>

  Questa modifica mi ha permesso di forzare l'utilizzo della versione più
  aggiornata di Typescript e di fare il deploy del progetto su Netlify.

  <br>

## Contact

<b>Marco Roccon - Digital Innovation & Development</b><br>
Portfolio website: https://rocconmarco.github.io/<br>
Linkedin: https://www.linkedin.com/in/marcoroccon/<br>
GitHub: https://github.com/rocconmarco

Project Link: https://quizapp-recycle.netlify.app

<br>

## Copyright

© 2024 Marco Roccon. Tutti i diritti riservati.
