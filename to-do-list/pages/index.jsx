import { Items } from "../components/Items";
import { ItemAdder } from "../components/ItemAdder";
import { usePersistedList } from "../hooks/usePersistedList";
import styles from "../styles/Home.module.css";
export default function Home() {
  const { list, addToList, replaceList } = usePersistedList("todo");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do list</h1>
      <Items list={list} replaceList={replaceList} />
      <ItemAdder addToList={addToList} />
    </div>
  );
}
