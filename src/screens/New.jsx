import axios from "axios";
import * as Validators from "../helpers/validators"
import { useNavigate } from "react-router";
import { Form, Field } from 'react-final-form'
import ValidationDiv from "../components/ValidationDiv";



const New = () => {
    const navigate = useNavigate();
    const onFormSubmit = async (values) => {
      const don = { ...values };
      await axios
                .post("/dons/new", { don })
                .then((res) => {
                  if ((res.status === 200)) {
                    navigate(`/dons/${res.data}`)
                  }
                })
                .catch((err) => {
                    console.error(err);
                });
    }
        


  const NewDonForm = () => (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" validate={Validators.required}>
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
          <Field name="location" validate={Validators.required}>
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
          <Field name="image" validate={Validators.required}>
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
          <Field name="description" validate={Validators.required}>
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
            <button className="btn btn-success" disabled={invalid}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );


    return (
    <>
      <div className="row">
        <h1 className="text-center">Donnez vos objets</h1>
        <div className="col-6 offset-3">
          <NewDonForm />
        </div>
      </div>
    </>
  );
}
export default New