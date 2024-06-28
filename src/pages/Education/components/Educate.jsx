import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  useField,
  FieldArray,
  ErrorMessage,
} from "formik";
import { dataContext } from "../../../App";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Educate() {
  const { data, setData } = useContext(dataContext);
  const navigate = useNavigate();
  const CustomField = ({ label, hint, ...props }) => {
    const [field, meta] = useField(props);
    const errorStyle = meta.touched && meta.error ? "border-[#ef5050]" : "";
    const validStyle = meta.touched && !meta.error ? "border-[#98e37e]" : "";
    const baseStyle = `${props.type == "date" ? "w-[371px]" : "w-full"}
      border focus:border-[1.5px] text-base text-[#000] opacity-60 focus:opacity-100 border-[#bcbcbc] rounded-[4px] px-4 py-[13px] outline-none `;

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "text-red-500"
      : "text-green-500";

    return (
      <div>
        <label
          htmlFor={props.name}
          className="font-[500] block mb-2 dark:text-white"
        >
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
  //
  const CustomSelect = ({ label, hint, ...props }) => {
    const [field, meta] = useField(props);
    const errorStyle = meta.touched && meta.error ? "border-[#ef5050]" : "";
    const validStyle = meta.touched && !meta.error ? "border-[#98e37e]" : "";
    const baseStyle =
      "appearance-none w-[371px] focus:border-[1.5px] focus:opacity-100 text-base text-[#000] opacity-60 font-[400] leading-[1.31] bg-[#fff] rounded-[4px] border border-[#bcbcbc] flex items-center justify-between px-4 py-[14px] focus:outline-none";

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "hidden"
      : "text-green-500";

    return (
      <div>
        <label
          htmlFor={props.name}
          className="font-[500] block mb-2 dark:text-white"
        >
          {label}
        </label>
        <div className="relative">
          <select
            {...field}
            {...props}
            className={`${baseStyle} ${errorStyle} ${validStyle}`}
          >
            <option value="" className="" hidden selected>
              აირჩიეთ ხარისხი
            </option>
            <option value="option1">საშუალო სკოლის დიპლომი</option>
            <option value="option2">ზოგადსაგანმანათლებლო დიპლომი</option>
            <option value="option3">ბაკალავრი</option>
            <option value="option4">მაგისტრი</option>
            <option value="option5">დოქტორი</option>
            <option value="option6">ასოცირებული ხარისხი</option>
            <option value="option7">სტუდენტი</option>
            <option value="option8">კოლეჯი (ხარისხის გარეშე)</option>
            <option value="option9">სხვა</option>
          </select>
          <img
            src="/public/icon-arrow-down.svg"
            className="absolute right-[22px] top-[23px]"
            alt="Dropdown Icon"
          />
        </div>
        <p className={`text-sm ${messageColor}`}>{hint}</p>
        <ErrorMessage
          name={props.name}
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
    );
  };
  const CustomTextarea = ({ label, hint, ...props }) => {
    const [field, meta] = useField(props);
    const errorStyle = meta.touched && meta.error ? "border-[#ef5050]" : "";
    const validStyle = meta.touched && !meta.error ? "border-[#98e37e]" : "";
    const baseStyle =
      "h-[180px] w-full focus:border-[1.5px] opacity-60 focus:opacity-100 text-base text-[#000] font-[400] leading-[1.38] bg-[#fff] rounded-[4px] border border-solid border-[#bcbcbc] pl-4 pr-[83px] py-[13px] resize-none outline-none placeholder:text-base placeholde:text-[#000] placeholder:opacity-60 placeholder:font-[400] placeholder:leading-[1.31]";

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "hidden"
      : "text-green-500";

    return (
      <div>
        <label
          htmlFor={props.name}
          className="font-[500] block mb-2 dark:text-white"
        >
          {label}
        </label>
        <textarea
          {...field}
          {...props}
          className={`${baseStyle} ${errorStyle} ${validStyle}`}
        ></textarea>
        <ErrorMessage
          name={props.name}
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
    );
  };

  // values
  const [initialValues, setInitialValues] = useState({
    education: [
      {
        saswavlebeli: "",
        xarisxi: "",
        date: "",
        description: "",
      },
    ],
  });

  //validations for inputs
  const validationSchema = Yup.object().shape({
    education: Yup.array().of(
      Yup.object().shape({
        saswavlebeli: Yup.string()
          .min(2, "მინიმუმ 2 სიმბოლო")
          .required("სავალდებულოა"),
        xarisxi: Yup.string().required("სავალდებულოა"),
        date: Yup.date().required("სავალდებულოა"),
        description: Yup.string().required("სავალდებულოა"),
      })
    ),
  });

  // handles submit saves data and moves to resume page
  const submitHandler = (values) => {
    setData((prevData) => {
      const neweducationArray = [...values.education];

      return {
        ...prevData,
        education: neweducationArray,
      };
    });
    const { education } = values;
    const inputValues = education.map((item) => ({
      saswavlebeli: item.saswavlebeli,
      xarisxi: item.xarisxi,
      date: item.date,
      description: item.description,
    }));

    localStorage.setItem("data", JSON.stringify(data));
    navigate("/resume");
  };

  // it checks and ads new form
  const handleAddNewForm = async (push, isValid, submitForm) => {
    if (isValid) {
      push({
        saswavlebeli: "",
        xarisxi: "",
        date: "",
        description: "",
      });
    } else {
      console.log("Form is not valid. Please correct errors.");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isValid, submitForm, values }) => (
        <Form>
          <FieldArray name="education">
            {({ insert, remove, push }) => (
              <main>
                {values.education.map((education, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[31px] pb-[52px] border-b border-solid border-[#c1c1c1]"
                  >
                    <section className="gap-2 mt-[77px]">
                      <CustomField
                        label={"სასწავლებელი"}
                        name={`education[${index}].saswavlebeli`}
                        type="text"
                        placeholder="სასწავლებელი"
                        hint={"მინიმუმ 2 სიმბოლო"}
                      />
                    </section>
                    <section className="flex items-start justify-between flex-col lg:flex-row lg:items-center">
                      <CustomSelect
                        label={"ხარისხი"}
                        name={`education[${index}].xarisxi`}
                        type="select"
                      />
                      <CustomField
                        label={"დამთავრების რიცხვი"}
                        name={`education[${index}].date`}
                        type="date"
                        className="w-[371px]"
                      />
                    </section>
                    <div className="flex flex-col gap-2 mt-1">
                      <CustomTextarea
                        label={"აღწერა"}
                        name={`education[${index}].description`}
                        type="text"
                        placeholder="განათლების აღწერა"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddNewForm(push, isValid, submitForm)}
                  className="w-[289px] h-[48px] flex items-center justify-center rounded-[4px] bg-[#62a1eb] text-base text-[#fff] font-[400] leading-[20px] mt-[45px]"
                >
                  სხვა სასწავლებლის დამატება
                </button>
              </main>
            )}
          </FieldArray>
          <div className="flex items-center justify-between mt-[200px]">
            <button
              onClick={() => navigate("/experience")}
              className="w-[113px] h-12 flex items-center justify-center rounded-[4px] bg-[#6b40e3] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] "
            >
              ᲣᲙᲐᲜ
            </button>
            <button
              type="submit"
              className="w-[151px] h-12 flex items-center justify-center rounded-[4px] bg-[#6b40e3] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] "
            >
              დასრულება
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Educate;
