import { useNavigate } from "react-router-dom";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import Line from "../../../shared-components/Line";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../App";

const CustomField = ({ label, hint, ...props }) => {
  const { data, setData } = useContext(dataContext);

  const [field, meta] = useField(props);
  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  const validStyle = meta.touched && !meta.error ? "border-green-500" : "";
  const baseStyle = "border border-gray-300 rounded-lg p-2 w-full";

  const messageColor =
    meta.error && field.value
      ? "hidden"
      : field.value && !meta.error
      ? "text-green-500"
      : "text-gray-500";

  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="font-bold block mb-2 dark:text-white"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        onChange={(event) => {
          field.onChange(event);

          setData((prevData) => {
            const updatedExperiences = prevData.experience.map((item, idx) => {
              if (idx === props.index) {
                return {
                  ...item,
                  [props.name.split(".")[2]]: event.target.value,
                };
              }
              return item;
            });

            if (props.index === prevData.experience.length) {
              updatedExperiences.push({
                [props.name.split(".")[2]]: event.target.value,
              });
            }

            return {
              ...prevData,
              experience: updatedExperiences,
            };
          });
        }}
        className={`${baseStyle} ${errorStyle} ${validStyle} dark:bg-[#323443] dark:text-white`}
      />
      <p className={`text-sm ${messageColor}`}>{hint}</p>
      {meta.error && field.value ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default function Main() {
  const { data, setData } = useContext(dataContext);
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    experiences: [
      {
        position: "",
        employer: "",
        started_at: "",
        ended_at: "",
        description: "",
      },
    ],
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData && storedData.experience) {
      setInitialValues({ experiences: storedData.experience });
    }
  }, []);

  const validationSchema = Yup.object().shape({
    experiences: Yup.array().of(
      Yup.object().shape({
        position: Yup.string()
          .min(2, "მინიმუმ 2 სიმბოლო")
          .required("სავალდებულოა"),
        employer: Yup.string()
          .min(2, "მინიმუმ 2 სიმბოლო")
          .required("სავალდებულოა"),
        started_at: Yup.date().required("სავალდებულოა"),
        ended_at: Yup.date().required("სავალდებულოა"),
        description: Yup.string().required("სავალდებულოა"),
      })
    ),
  });

  const handlePush = (push) => {
    push({
      position: "",
      employer: "",
      started_at: "",
      ended_at: "",
      description: "",
    });
  };

  const handleSubmit = (values) => {
    setData((prevData) => {
      const newExperienceArray = [...values.experiences];

      return {
        ...prevData,
        experience: newExperienceArray,
      };
    });

    localStorage.setItem("data", JSON.stringify(data));
    navigate("/education");
  };

  return (
    <main>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={false}
      >
        {({ values }) => (
          <Form className="flex flex-col min-h-screen gap-4 md:gap-8">
            <FieldArray name="experiences">
              {({ insert, remove, push }) => (
                <div>
                  {values.experiences.length > 0 &&
                    values.experiences.map((experience, index) => (
                      <div className="flex flex-col gap-4 mb-4" key={index}>
                        <CustomField
                          label="თანამდებობა"
                          name={`experiences.${index}.position`}
                          type="text"
                          placeholder="დეველოპერი, დიზაინერი, ა.შ."
                          hint="მინიმუმ 2 სიმბოლო"
                          index={index}
                        />
                        <CustomField
                          label="დამსაქმებელი"
                          name={`experiences.${index}.employer`}
                          type="text"
                          placeholder="დამსაქმებელი"
                          hint="მინიმუმ 2 სიმბოლო"
                          index={index}
                        />
                        <div className="flex flex-col md:flex-row justify-between w-full">
                          <CustomField
                            label="დაწყების რიცხვი"
                            name={`experiences.${index}.started_at`}
                            type="date"
                            hint="სავალდებულოა"
                            index={index}
                          />
                          <CustomField
                            label="დამთავრების რიცხვი"
                            name={`experiences.${index}.ended_at`}
                            type="date"
                            hint="სავალდებულოა"
                            index={index}
                          />
                        </div>
                        <CustomField
                          label="აღწერა"
                          name={`experiences.${index}.description`}
                          type="textarea"
                          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                          hint="სავალდებულოა"
                          index={index}
                        />
                        <Line />
                      </div>
                    ))}
                  <button
                    type="button"
                    className="text-white bg-[#62A1EB] rounded-sm pt-1 pb-1 p-4 self-start"
                    onClick={() => handlePush(push)}
                  >
                    მეტი გამოცდილების დამატება
                  </button>
                </div>
              )}
            </FieldArray>

            <div className="flex justify-between mt-10 mb-4 md:mb-8">
              <button
                onClick={() => {
                  navigate("/private");
                }}
                className="text-white bg-[#6B40E3] rounded-sm pt-1 pb-1 p-4"
              >
                უკან
              </button>

              <button
                type="submit"
                className="text-white bg-[#6B40E3] rounded-sm pt-1 pb-1 p-4"
              >
                შემდეგი
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
