export default function Info({ items }) {
  const numItems = items.length;
  const packedItems = items.map((items) => items.packed).filter(Boolean).length;
  const procentPacked =
    numItems === 0 ? "0.0" : ((packedItems / numItems) * 100).toFixed(1);

  return (
    <footer className="footer">
      {procentPacked === 100
        ? "You packed all of your items. Have a great game! ⚽"
        : `You have ${numItems} items on your list and your already packed ${packedItems} (that is ${procentPacked}%) !`}
    </footer>
  );
}
