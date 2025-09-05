import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useNavigate, useParams } from "react-router";
import * as Validators from "../helpers/validators";
import ValidationDiv from "../components/ValidationDiv";


const Edit = () => {
    const [don, setDon] = useState(undefined);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/dons/${id}`).then((res) => {
            setDon(res.data);
        });
    }, [id]);

    const onFormSubmit = async (values) => {
        const don = { ...values };
        await axios
                .put(`/dons/${id}`, { don })
                .then((res) => {
                    navigate(`/dons/${res.data}`)                })
                .catch((err) => {
                    console.error(err);
                });
    }
      const EditDonForm = () => (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit, invalid, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            validate={Validators.required}
            initialValue={don.title}
          >
            {({ input, meta }) => (
              <div className="mb-3">
                <label className="form-label" htmlFor="title">
                    Désignation de l'objet
                </label>
                <input
                  {...input}
                  className={`form-control ${
                    meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""
                  }`}
                  type="text"
                  id="title"
                  name="title"
                />
                <ValidationDiv meta={meta} />
              </div>
            )}
          </Field>
          <Field
            name="location"
            validate={Validators.required}
            initialValue={don.location}
          >
            {({ input, meta }) => (
              <div className="mb-3">
                <label className="form-label" htmlFor="location">
                  Adresse
                </label>
                <input
                  {...input}
                  className={`form-control ${
                    meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""
                  }`}
                  type="text"
                  id="location"
                  name="location"
                />
                <ValidationDiv meta={meta} />
              </div>
            )}
          </Field>
          <Field
            name="image"
            validate={Validators.required}
            initialValue={don.image}
          >
            {({ input, meta }) => (
              <div className="mb-3">
                <label className="form-label" htmlFor="image">
                  Image
                </label>
                <input
                  {...input}
                  className={`form-control ${
                    meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""
                  }`}
                  type="text"
                  id="image"
                  name="image"
                />
                <ValidationDiv meta={meta} />
              </div>
            )}
          </Field>
          <Field
            name="description"
            validate={Validators.required}
            initialValue={don.description}
          >
            {({ input, meta }) => (
              <div className="mb-3">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  {...input}
                  className={`form-control ${
                    meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""
                  }`}
                  type="text"
                  id="description"
                  name="description"
                />
              </div>
            )}
          </Field>
          <div className="mb-3">
            <button className="btn btn-success" disabled={invalid || pristine}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );

  return (
    <>
      {don ? (
        <div className="row">
          <h1 className="text-center">Edit don</h1>
          <div className="col-6 offset-3">
            <EditDonForm />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Edit;