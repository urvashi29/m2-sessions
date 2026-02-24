import styles from "@/styles/Home.module.css";
import Button from "@/component/Button";

export default function Home() {
  
  return (
    <>
      <p className={styles.container}>Lorem Ipsum</p>
      <h2 style={{ color: "pink" }}>Welcome</h2>

      <button className={styles.button}>Login</button>
      <Button>Login</Button>
    </>
  );
}
