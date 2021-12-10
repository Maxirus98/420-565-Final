import Client from "./Client";

const ClientList = ({ clients }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
      <table>
        <caption>Bonne fin de session!</caption>
        <tbody>
          {clients.length > 0 &&
            clients.map((client, key) => {
              return (
                <tr key={key}>
                  <Client>{client.id}</Client>
                  <Client>{client.firstName}</Client>
                  <Client>{client.lastName}</Client>
                  <Client>{client.gender}</Client>
                  <Client>{client.birthDate}</Client>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
