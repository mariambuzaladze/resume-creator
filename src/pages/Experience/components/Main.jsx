import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

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
  const initialValues = {
    position: "",
    employer: "",
    started_at: "",
    ended_at: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    position: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულოა"),
    employer: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულოა"),
    started_at: Yup.date().required("სავალდებულოა"),
    ended_at: Yup.date().required("სავალდებულოა"),
    description: Yup.string().required("სავალდებულოა"),
  });

  const handleSubmit = () => {};

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col min-h-screen gap-4 md:gap-6">
            <CustomField
              label="თანამდებობა"
              name="position"
              type="email"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              hint="მინიმუმ 2 სიმბოლო"
            />

            <CustomField
              label="დამსაქმებელი"
              name="employer"
              type="text"
              placeholder="დამსაქმებელი"
              hint="მინიმუმ 2 სიმბოლო"
            />

            <div className="flex flex-col md:flex-row justify-between w-full">
              <CustomField
                label="დაწყების რიცხვი"
                name="started_at"
                type="date"
                hint="სავალდებულოა"
              />
              <CustomField
                label="დამთავრების რიცხვი"
                name="ended_at"
                type="date"
                hint="სავალდებულოა"
              />
            </div>

            <CustomField
              label="აღწერა"
              name="description"
              type="textArea"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              hint="სავალდებულოა"
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
