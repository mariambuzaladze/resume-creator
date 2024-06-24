import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  const handleSubmit = () => {};

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justiy-center items-centerh-screen gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <label htmlFor="name" className="font-bold block mb-2">
                  სახელი
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="ანზორ"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="surname" className="font-bold block mb-2">
                  გვარი
                </label>
                <Field
                  type="text"
                  name="surname"
                  placeholder="მუმლაძე"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <ErrorMessage
                  name="surname"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="font-bold block mb-2">
                პირადი ფოტოს ატვირთვა
              </label>
              <div className="custom-file-input ">
                <Field
                  id="image"
                  type="file"
                  accept="image/*"
                  name="image"
                  placeholder="ატვირთვა"
                  className="hidden"
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

            <div>
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

            <div>
              <label htmlFor="email" className="font-bold block mb-2">
                ელ.ფოსტა
              </label>
              <Field
                type="email"
                name="email"
                placeholder="anzorr666@redberry.ge"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="number" className="font-bold block mb-2">
                მობილურის ნომერი
              </label>
              <Field
                type="number"
                name="number"
                placeholder="+995 551 12 34 56"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <ErrorMessage
                name="number"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <Link to={"/experience"} className="flex justify-end">
              <button className="text-white bg-[#6B40E3] rounded-sm pt-1 pb-1 p-4 mt-10 mb-4 md:mb-8">
                შემდეგი
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </main>
  );
}
