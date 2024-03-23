import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

const BookForm = () => {
  const initialValues = {
    title: '',
    author: '',
    ISBN: '',
    publicationDate: ''
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const validate = values => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.author) {
      errors.author = 'Author is required';
    }

    if (!values.ISBN) {
      errors.ISBN = 'ISBN is required';
    }

    if (!values.publicationDate) {
      errors.publicationDate = 'Publication date is required';
    }

    return errors;
  };

  return (
    <Container>
      <h2>Add Book</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <Form>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" />
            <ErrorMessageStyled name="title" component="div" />
          </div>
          <div>
            <Label htmlFor="author">Author</Label>
            <Input type="text" id="author" name="author" />
            <ErrorMessageStyled name="author" component="div" />
          </div>
          <div>
            <Label htmlFor="ISBN">ISBN</Label>
            <Input type="text" id="ISBN" name="ISBN" />
            <ErrorMessageStyled name="ISBN" component="div" />
          </div>
          <div>
            <Label htmlFor="publicationDate">Publication Date</Label>
            <Input type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessageStyled name="publicationDate" component="div" />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default BookForm;
