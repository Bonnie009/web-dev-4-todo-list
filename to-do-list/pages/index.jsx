import { Items } from "../components/Items";
import { ItemAdder } from "../components/ItemAdder";
import { usePersistedList } from "../hooks/usePersistedList";

export default function Home() {
  const { list, addToList, replaceList } = usePersistedList("todo");

  return (
    <div>
      <Items list={list} replaceList={replaceList} />
      <ItemAdder addToList={addToList} />
    </div>
  );
}
