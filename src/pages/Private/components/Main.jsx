import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import React from "react";

const CustomField = ({ label, hint, ...props }) => {
  const [field, meta] = useField(props);
  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  const validStyle = meta.touched && !meta.error ? "border-green-500" : "";
  const baseStyle = "border border-gray-300 rounded-lg p-2 w-full";

  const messageColor = !meta.touched
    ? "text-gray-500"
    : meta.error
    ? "hidden"
    : "text-green-500";

  return (
    <div>
      <label htmlFor={props.id || props.name} className="font-bold block mb-2">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`${baseStyle} ${errorStyle} ${validStyle}`}
      />
      <p className={`text-sm ${messageColor}`}>{hint}</p>
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default function Main() {
  const handleButtonClick = () => {
    document.getElementById("image").click();
  };

  const initialValues = {
    name: "",
    surname: "",
    image: "",
    aboutMe: "",
    email: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "მინიმუმ 2 სიმბოლო")
      .matches(/^[ა-ჰ]+$/, "მხოლოდ ქართული ასოები")
      .required("სავალდებულოა"),
    surname: Yup.string()
      .min(2, "მინიმუმ 2 სიმბოლო")
      .matches(/^[ა-ჰ]+$/, "მხოლოდ ქართული ასოები")
      .required("სავალდებულოა"),
    image: Yup.string().required("სავალდებულოა"),
    email: Yup.string()
      .email("არავალიდური ელ.ფოსტა")
      .matches(/@redberry\.ge$/, "ელ.ფოსტა უნდა მთავრდებოდეს @redberry.ge-ით")
      .required("სავალდებულოა"),
    number: Yup.string()
      .matches(
        /^(\+995)?(5\d{8})$/,
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
      )
      .required("სავალდებულოა"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center min-h-screen gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <CustomField
                label="სახელი"
                name="name"
                type="text"
                placeholder="ანზორ"
                hint="მინიმუმ 2 სიმბოლო, მხოლოდ ქართული ასოები"
              />
              <CustomField
                label="გვარი"
                name="surname"
                type="text"
                placeholder="მუმლაძე"
                hint="მინიმუმ 2 სიმბოლო, მხოლოდ ქართული ასოები"
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="image" className="font-bold block mb-2">
                პირადი ფოტოს ატვირთვა
              </label>
              <div className="custom-file-input ">
                <Field
                  id="image"
                  type="file"
                  accept="image/*"
                  name="image"
                  className={`hidden`}
                />
                <button
                  type="button"
                  className="custom-button"
                  onClick={handleButtonClick}
                >
                  ატვირთვა
                </button>
              </div>
              <ErrorMessage
                name="image"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="aboutMe" className="font-bold block mb-2">
                ჩემ შესახებ (არასავალდებულო)
              </label>
              <Field
                as="textarea"
                name="aboutMe"
                placeholder="ზოგადი ინფო შენ შესახებ"
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="aboutMe"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <CustomField
              label="ელ.ფოსტა"
              name="email"
              type="email"
              placeholder="anzorr666@redberry.ge"
              hint="უნდა მთავრდებოდეს @redberry.ge-ით"
            />
            <CustomField
              label="მობილურის ნომერი"
              name="number"
              type="text"
              placeholder="+995 551 12 34 56"
              hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            />

            <Link to={"/experience"} className="flex justify-end w-full">
              <button
                type="submit"
                className="text-white bg-[#6B40E3] rounded-sm pt-1 pb-1 p-4 mt-10 mb-4 md:mb-8"
              >
                შემდეგი
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </main>
  );
}
