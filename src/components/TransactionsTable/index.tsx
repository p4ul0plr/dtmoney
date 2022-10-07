import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de wesite</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>12/04/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 800,00</td>
            <td>Casa</td>
            <td>30/03/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de wesite</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>12/04/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
