import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  useField,
  FieldArray,
  ErrorMessage,
} from "formik";
import { useState } from "react";

function Educate() {
  //   const validationSchema = Yup.object().shape({
  //     saswavlebeli: Yup.string().min(2),
  //     xarisxi: Yup.string().required("ხარისხი სავალდებულო"),
  //     date: Yup.date().required("დამთავრების რიცხვი სავალდებულო"),
  //   });
  const CustomField = ({ label, hint, ...props }) => {
    const [field, meta] = useField(props);
    const errorStyle = meta.touched && meta.error ? "border-[#ef5050]" : "";
    const validStyle = meta.touched && !meta.error ? "border-[#98e37e]" : "";
    const baseStyle = `${props.type == "date" ? "w-[371px]" : "w-full"}
      border focus:border-[2px] text-base text-[#000] opacity-60 focus:opacity-100 border-[#bcbcbc] rounded-[4px] px-4 py-[13px] outline-none `;

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "hidden"
      : "text-green-500";

    return (
      <div>
        <label htmlFor={props.name} className="font-[500] block mb-2">
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
      "appearance-none w-[371px] focus:border-[2px] focus:opacity-100 text-base text-[#000] opacity-60 font-[400] leading-[1.31] bg-[#fff] rounded-[4px] border border-[#bcbcbc] flex items-center justify-between px-4 py-[14px] focus:outline-none";

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "hidden"
      : "text-green-500";

    return (
      <div>
        <label htmlFor={props.name} className="font-[500] block mb-2">
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
      "h-[180px] w-full focus:border-[2px] opacity-60 focus:opacity-100 text-base text-[#000] font-[400] leading-[1.38] bg-[#fff] rounded-[4px] border border-solid border-[#bcbcbc] pl-4 pr-[83px] py-[13px] resize-none outline-none placeholder:text-base placeholde:text-[#000] placeholder:opacity-60 placeholder:font-[400] placeholder:leading-[1.31]";

    const messageColor = !meta.touched
      ? "text-gray-500"
      : meta.error
      ? "hidden"
      : "text-green-500";

    return (
      <div>
        <label htmlFor={props.name} className="font-[500] block mb-2">
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

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission logic here
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="education">
            {({ insert, remove, push }) => (
              <main className="flex flex-col gap-[31px] pb-[52px] border-b border-solid border-[#c1c1c1]">
                <section className="gap-2 mt-[77px]">
                  <CustomField
                    label={"სასწავლებელი"}
                    name={"saswavlebeli"}
                    type="text"
                    placeholder="სასწავლებელი"
                    hint={"მინიმუმ 2 სიმბოლო"}
                  />
                </section>
                <section className="flex items-center justify-between">
                  <CustomSelect
                    label={"ხარისხი"}
                    name="xarisxi"
                    type="select"
                  />
                  <CustomField
                    label={"დამთავრების რიცხვი"}
                    name="date"
                    type="date"
                    className="w-[371px]"
                  />
                </section>
                <div className="flex flex-col gap-2 mt-1">
                  <CustomTextarea
                    label={"აღწერა"}
                    name="description"
                    type="text"
                    placeholder="განათლების აღწერა"
                  />
                </div>
                <button type="submit">submit</button>
              </main>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}

export default Educate;
