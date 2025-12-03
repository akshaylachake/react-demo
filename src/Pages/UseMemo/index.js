import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const bigList = Array.from(
    { length: 20000 },
    (_, i) => `item-${i}-${Math.floor(Math.random() * 100)}`
  ); // simulating a big list with random numbers

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return bigList.filter((item) => item.includes(query));
  }, [query]); // recompute ONLY when query changes

  return (
    <>
      Memoize computed values (heavy calculations, derived data)
      <br />
      Returns : Value <br />
      When to use : When a calculation is expensive OR when you want stable
      computed results
      <br />
      <input onChange={(e) => setQuery(e.target.value)} />
      <div>Filtered items: {filtered?.length}</div>
      <button onClick={() => setCount((c) => c + 1)}>
        Re-render Component {count}
      </button>
    </>
  );
}
