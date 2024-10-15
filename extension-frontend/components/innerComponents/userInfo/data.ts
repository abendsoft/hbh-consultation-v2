interface userInfoTypes {
  id: number;
  label: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea" | "checkbox";
  placeholder?: string;
}
export const userInfoData: userInfoTypes[] = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: 2,
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    id: 3,
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "+1 (123) 123-456",
  },
  {
    id: 4,
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: 5,
    label: "Health Concern",
    name: "message",
    type: "textarea",
    placeholder: "Type Here...",
  },
  {
    id: 6,
    label: "Click here to visit Terms and conditions link",
    name: "terms_and_condition",
    type: "checkbox",
  },
];

export const initialData = {
  firstName: "",
  lastName: "",
  phn: 0,
  email: "",
  healthConcern: "",
  agreeterms: false,
};
export type HandleChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
