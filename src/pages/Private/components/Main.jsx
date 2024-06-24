import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Main() {
  const initialValues = {};

  const validationSchema = Yup.object().shape({});

  const handleSubmit = () => {};

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justiy-center items-centerh-screen gap-4">
            <div>
              <label htmlFor="name" className="font-bold block mb-2">
                სახელი
              </label>
              <Field
                type="text"
                name="name"
                placeholder="ანზორ"
                className="border border-gray-300 rounded-lg p-2"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm"
              />

              <label htmlFor="surname" className="font-bold block mb-2">
                გვარი
              </label>
              <Field
                type="text"
                name="surname"
                placeholder="მუმლაძე"
                className="border border-gray-300 rounded-lg p-2"
              />
              <ErrorMessage
                name="surname"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <label htmlFor="image" className="font-bold block mb-2">
              პირადი ფოტოს ატვირთვა
            </label>
            <Field type="file" accept="image/*" name="image" />
            <ErrorMessage
              name="image"
              component="p"
              className="text-red-500 text-sm"
            />

            <label htmlFor="aboutMe" className="font-bold block mb-2">
              ჩემ შესახებ (არასავალდებულო)
            </label>
            <Field
              as="textarea"
              name="aboutMe"
              placeholder="ზოგადი ინფო შენ შესახებ"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <ErrorMessage
              name="aboutMe"
              component="p"
              className="text-red-500 text-sm"
            />

            <label htmlFor="email" className="font-bold block mb-2">
              ელ.ფოსტა
            </label>
            <Field
              type="email"
              name="email"
              placeholder="anzorr666@redberry.ge"
              className="border border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />

            <label htmlFor="number" className="font-bold block mb-2">
              მობილურის ნომერი
            </label>
            <Field
              type="number"
              name="number"
              placeholder="+995 551 12 34 56"
              className="border border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage
              name="number"
              component="p"
              className="text-red-500 text-sm"
            />

            <Link to={"/experience"}>
              <button>შემდეგი</button>
            </Link>
          </Form>
        )}
      </Formik>
    </main>
  );
}
