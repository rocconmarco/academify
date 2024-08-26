<br />
<div id="readme-top" align="center">
  <a href="https://academify-self.vercel.app/">
    <img src="public/academify-logo-blank.png" alt="Logo" width="130" height="130">
  </a>

<h3 align="center">Academify</h3>

  <p align="center">
    Breaking down traditional barriers to high-quality education<br /> through the security and transparency of blockchain technology.
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
            enable users to purchase products using 
            <strong>blockchain payments</strong>.

<br>

From there, I expanded the project to imagine a platform that allows
            everyone to 
            <strong>freely access high-quality scientific articles</strong> 
            through the blockchain. Today, research materials are often locked
            behind paywalls or restricted to university staff, making them hard
            for the general public to access.

<br>

Academify aims to change this by making all articles available to
            the public while ensuring the 
            <strong>reliability of the information</strong>.

<br>

In the first phase of development, I focused on building the 
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

The goal is to make the platform even more inclusive by 
            <strong>introducing roles</strong> that contribute to the
            ecosystem's integrity. For instance, the role of certifier will be
            crucial. Certifiers are selected users who review articles submitted
            by the community and decide whether they should be published on the
            platform.
            
<br>

To reward certifiers for their work, I plan to introduce 
            <strong>a token called $OWL</strong> (inspired by the Academify
            logo). Certifiers can earn these tokens through their activities,
            and users who purchase articles will also earn them as a form of
            engagement score.
            
<br>

What you see now is just a basic MVP of the platform, showcasing its
            potential direction.
            
<br>

If you’re interested in the project, feel free to contact me via the "Contacts" form in <a href="https://rocconmarco.github.io/">my portfolio website<a>.

<br>



## Specs for nerds

The project was developed using the React framework <strong>Next.js</strong>, in order to <strong>avoid compatibility issues</strong> with various dependencies, as experienced in the past with React Native.

<br>

<strong>Tailwind CSS</strong> was used for styling, with <strong>TypeScript</strong> providing robust type safety throughout the project.

<br>

Page routing was handled using Next.js's <strong>App Router</strong>, where each route is represented by a folder within the main “app” directory, and each page is represented by a page.tsx file.

<br>

To ensure content decentralization on the platform, I opted for <strong>web3.storage</strong>, a service that allows articles to be uploaded to the <strong>IPFS network</strong>, generating a corresponding CID. This CID enables users to access the content after making a payment.

<br>

The payment process is managed by a simple <strong>smart contract written in Solidity</strong>. It ensures that every payment sent to the contract is redirected to the wallet of the contract owner (as required by the project guidelines). This will be modified with future updates to allow each author to receive payments for their own articles.

<br>

Transactions are executed on the <strong>Sepolia testnet</strong> using the <strong>SepoliaETH test token</strong>.

<br>

To integrate the smart contract and handle user authentication, I opted for <strong>Wagmi</strong>. This decision was driven by its user-friendly interface and the streamlined management of information through its specialized hooks, which seamlessly support the <strong>four wallet connectors</strong> available on the platform.

<br />

## Contact

<b>Marco Roccon - Digital Innovation & Development</b><br>
Portfolio website: https://rocconmarco.github.io/<br>
Linkedin: https://www.linkedin.com/in/marcoroccon/<br>
GitHub: https://github.com/rocconmarco

Project Link: https://academify-self.vercel.app/

<br>

## Copyright

© 2024 Marco Roccon. All rights reserved.
