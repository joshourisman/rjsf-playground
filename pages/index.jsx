import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Form from "@rjsf/core";

const ReactJson = dynamic(import("react-json-view"), { ssr: false });

const Home = () => {
  const [schema, setSchema] = useState({
    title: "A form for the playground",
    properties: { firstName: { type: "string" } },
  });

  let uiSchema = { foo: "bar" };
  let formData = { foo: "bar" };

  let updateSchema = ({ updated_src }) => setSchema(updated_src);

  return (
    <div className={styles.container}>
      <Head>
        <title>react-jsonschema-form playground</title>
        <meta
          name="description"
          content="A playground for working with react-jsonschema-form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A{" "}
          <a href="https://github.com/rjsf-team/react-jsonschema-form">
            react-jsonschema-form
          </a>{" "}
          playground.
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <ReactJson
              src={schema}
              onEdit={updateSchema}
              onAdd={updateSchema}
              onDelete={updateSchema}
            />
          </div>

          <div className={styles.card}>
            <ReactJson src={uiSchema} />
          </div>
          <div className={styles.card}>
            <ReactJson src={formData} />
          </div>
        </div>
        <div>
          <Form schema={schema} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
