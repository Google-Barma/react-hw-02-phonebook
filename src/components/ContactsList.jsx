export default function ContactsList({ contactsData, onChangeFilter }) {
  return (
    <>
      <ul>
        {contactsData.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: <span>{phone}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
