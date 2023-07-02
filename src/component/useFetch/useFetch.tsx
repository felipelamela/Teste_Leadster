import React from 'react';

type ApiResponse = {
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  data: string,
  thumbnail: string
};

const useFetch = (categoriaAtual: string) => {
  const [data, setData] = React.useState<ApiResponse[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>(categoriaAtual);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/videos.json');
        const jsonData: ApiResponse[] = await response.json();
        setData([])
        const dataFilter = jsonData.filter(card => card.categoria === category);
        setData(dataFilter);
      } catch (error) {
        setError(`Erro na busca da API: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, [category]);

  return { data, loading, error, category, setCategory };
};

export default useFetch;