"use client";
interface Produto {
  codigo: string;
  descricao: string;
  disponivel: string;
  preco: string;
  reservado: string;
  unidade: string;
  URLmarca: string;
  URLproduto: string;
  vendas12m: string;
  vendas1m: string;
  vendas3m: string;
  VLTMAIA20: string;
  VLTMAIV20: string;
  VLTMENA20: string;
  VLTMENV20: string;

  // outros campos conforme necessário
}

interface PaginaDeProdutos {
  totalPages: number;
  productObjArray: Produto[];
}
//Função que recebe um array de produtos conforme o JSON abaixo
// [
//   {
//       "codigo": "0104468",
//       "descricao": "PNEU 295/60-15,5 18PR TL TR882 SPL I-3 BKT",
//       "disponivel": "4",
//       "preco": "      1.800,00",
//       "reservado": "2",
//       "unidade": "PECA",
//       "URLmarca": "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
//       "URLproduto": "https://pneuzao.com.br/wp-content/uploads/2023/04/PNEU-BKT-TR882-1-640x640-1.jpg",
//       "vendas12m": "0",
//       "vendas1m": "0",
//       "vendas3m": "0",
//       "VLTMAIA20": "      3.600,00",
//       "VLTMAIV20": "      3.600,00",
//       "VLTMENA20": "      1.602,00",
//       "VLTMENV20": "      1.674,00"
//   }
// ]
function buscarProdutosPorDescricao(
  produtos: Produto[],
  descricaoBusca: string
): Produto[] {
  // Filtra os produtos cuja descrição contém a string de busca e separa por asterisco utilizando
  //a mesma logica do Senior
  const termosDeBusca = descricaoBusca.split("*");
  // Filtra os produtos que contêm todos os termos da busca na descrição
  return produtos.filter((produto) =>
    termosDeBusca.every((termo) => produto.descricao.includes(termo))
  );
}

// Exemplo de uso:
const dados: PaginaDeProdutos[] = [
  {
    totalPages: 11,
    productObjArray: [
      {
        codigo: "0104468",
        descricao: "PNEU 295/60-15,5 18PR TL TR882 SPL I-3 BKT",
        disponivel: "4",
        preco: "      1.800,00",
        reservado: "2",

        unidade: "PECA",
        URLmarca: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
        URLproduto:
          "https://pneuzao.com.br/wp-content/uploads/2023/04/PNEU-BKT-TR882-1-640x640-1.jpg",
        vendas12m: "0",
        vendas1m: "0",
        vendas3m: "0",
        VLTMAIA20: "      3.600,00",
        VLTMAIV20: "      3.600,00",
        VLTMENA20: "      1.602,00",
        VLTMENV20: "      1.674,00",
      },
    ],
  },
];

export function BuscaProdutos() {
  let stringDeBusca = "60-15*BKT"; // Substitua com o valor desejado
  console.log("dados", dados[0]);

  const produtosFiltrados = buscarProdutosPorDescricao(
    dados[0].productObjArray,
    stringDeBusca
  );

  console.log(produtosFiltrados);
}

export const formatarCEPInput = (cep: string): string => {
  const digits = cep.replace(/\D/g, "");
  const cepTruncado = digits.substring(0, 8);

  if (cepTruncado.length > 5) {
    return cepTruncado.substring(0, 5) + "-" + cepTruncado.substring(5);
  }

  return cepTruncado;
};
