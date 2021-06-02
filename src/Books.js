import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetAllBooks {
    books {
      title
    }
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log("error", error);
    return <p>Error :(</p>;
  }
  console.log(data);
  return <p>Books Component</p>;
};

export default Books;
