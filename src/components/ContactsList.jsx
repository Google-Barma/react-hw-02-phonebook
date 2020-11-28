export default function ContactsList({ contactsData, onDeleteBtn }) {
  return (
    <>
      <ul>
        {contactsData.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={e => onDeleteBtn(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
