import BookCard from "../components/global/Book/BookCard";
import Stack from "@mui/material/Stack";

import bookService from "../services/book.service";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

const Book = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const res = await bookService.searchBook({});
    setBooks(res);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Container maxWidth="lg" sx={{paddingY:"1rem"}}>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 5 }} alignItems="stretch">
        {books.map((ele) => {
          return (
            <Grid item md={6}  key={ele.name}>
              <BookCard
               
                name={ele.name}
                price={ele.price}
                category={ele.category}
                description={ele.description}
                img={ele.base64image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Book;
