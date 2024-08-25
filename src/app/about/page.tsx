import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "About - Academify",
  description:
    "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About - Academify</title>
      </Head>
      <div className="min-h-screen bg-backgroundColor p-8 px-6 md:px-10 pt-24 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold">About Academify</h1>
          <p className="w-full md:w-[55%] py-4 text-center">
            <em>an idea by Marco Roccon.</em>
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            This project was conceived and developed as part of the "Typescript,
            React, and Web3" course in the Master’s program in Blockchain
            Development at start2impact University. The initial goal was to
            create a <strong>decentralized application</strong> that would
            enable users to purchase products using{" "}
            <strong>blockchain payments</strong>.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            From there, I expanded the project to imagine a platform that allows
            everyone to{" "}
            <strong>freely access high-quality scientific articles</strong>{" "}
            through the blockchain. Today, research materials are often locked
            behind paywalls or restricted to university staff, making them hard
            for the general public to access.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            Academify aims to change this by making all articles available to
            the public while ensuring the{" "}
            <strong>reliability of the information</strong>.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            In the first phase of development, I focused on building the{" "}
            <strong>core features</strong>: saving and displaying articles,
            connecting to the blockchain, and enabling payment and access to the
            final content.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            I used <strong>key blockchain technologies</strong> like IPFS for
            storage, wallet connectors, and test network transactions with
            SepoliaETH tokens.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            What you see now is just a basic MVP of the platform, showcasing its
            potential direction.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            The goal is to make the platform even more inclusive by{" "}
            <strong>introducing roles</strong> that contribute to the
            ecosystem's integrity. For instance, the role of certifier will be
            crucial. Certifiers are selected users who review articles submitted
            by the community and decide whether they should be published on the
            platform.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            To reward certifiers for their work, I plan to introduce{" "}
            <strong>a token called $OWL</strong> (inspired by the Academify
            logo). Certifiers can earn these tokens through their activities,
            and users who purchase articles will also earn them as a form of
            engagement score.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            If you’re interested in the project, feel free to visit{" "}
            <a
              className="text-[#f67c01] hover:underline"
              href="https://rocconmarco.github.io/"
              target="_blank"
            >
              <strong>my website</strong>
            </a>{" "}
            and reach out via the "Contacts" section.
          </p>
          <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] py-4">
            <em>Updated: 08/25/2024</em>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
